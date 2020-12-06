const jwt = require('jsonwebtoken');

const User = require('../models/user');

exports.signup = async(req,res) =>{
    const userExists = await User.findOne({email:req.body.email});
    if (userExists) return res.status(403).json({error:'Такий email вже існує'})

    const user = await new User(req.body);
    await user.save();
    //res.status(200).json({user});
    res.status(200).json({'message':'Signup success!'});
};

exports.signin = (req,res)=>{
    //find the user based on email
    const{email, password}=req.body
    User.findOne({email},(err,user)=>{
        // if error or no user
        if (err || !user){
            return res.status(400).json({'error':'User з цією електронною адресою не існує. Будь ласка, увійдіть!'});
        }
        // email and password match
        if (!user.authenticate(password)){
            return res.status(400).json({'error':'Email and password не співпадають'});
        }
         // generate a token with user id and secret
         const token = jwt.sign({_id:user._id},process.env.JWT_SECRET)
         // persist the token as 't' and cookie with expiry date
        res.cookie('t',token, {expire: new Date()+9999})

          // return res with user and token to frontent client  
         const {_id, name, email} = user
         return res.json({token, user:{_id, email, name}})    
    });
};

exports.signout= (req, res) => {
    //clear cookie
    res.clearCookie('t')
    return res.json({message:'Signout success!'})
}