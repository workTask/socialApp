const Post = require('../models/post');
const formidable = require('formidable');
const fs = require('fs');

exports.isPoster = (req, res, next)=>{
   let isPoster = req.post && req.auth && req.post.postedBy._id === req.auth._id;
        if(!isPoster){
            return res.status(403).json({ error: 'Користувач не авторизований'});
        };
        next();
 };

exports.postById = (req, res, next, id)=>{
   Post.findById(id)
   .exec((err, post)=>{
       if(err || !post){
           return res.status(400).json({ 
               error: err
           });
       }
       req.post = post;
       next();
   });
};

exports.getPosts = (req,res)=>{
  const posts = Post.find()
  .populate("postedBy","_id name")
  .select("_id title body")
  .then(posts => {
     res.status(200).json({posts:posts})
   })
   .catch(err => console.log(err));
};

exports.createPost = (req,res)=>{
   let form = new formidable.IncomingForm();
   form.keepExtensions = true;
   form.parse(req,(err, fields, files) => {
      if (err){
         return res.status(400).json({error:'Не вдалося завантажити забраження'})
      }
     let post = new Post(fields);

     post.postedBy = req.profile;
      if(fields.photo){
            post.photo.data = fs.readFileSync(files.photo.path);
            post.photo.contenType = files.photo.type;
      } 
      post.save((err,result) =>{
         if (err){
            return res.status(400).json({ error: err});
         };
         res.json(result);
      });
   });
  // const post = new Post(req.body);
   //console.log("creating POST:", post)

  // post.save().then(result => {
  //    res.status(200).json({
   //      post:result
    //  });
  // });
};

exports.deletePost = (req,res) => { 
   let post = req.post;
   post.remove( (err, post) => {
       if(err){
           return res.status(400).json({error: err});
       };
      res.json({message:"Post deleted"});
   });
  };

exports.postsByUser = (req,res) => {
   Post.find({postedBy: req.profile._id})
       .populate("postedBy", "_id name")
       .sort("_created")
       .exec((err, posts)=>{
          if(err){
             return res.status(400).json({ error: err });
          }
         res.json({posts: posts});
   });
};

 
