const _ = require('lodash'); //for update user 
const User = require('../models/user');

exports.userById = (req,res,next,id)=>{
    User.findById(id)
    .exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({ 
                error: 'Користувач не знайдений'
            })
        }
        req.profile = user
        next()
    })
}

exports.hasAuthorization = (res,req,next)=>{
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id;
    if(!authorized00){
        return res.status(403).json({error:'Користувач не авторизований, щоб виконувати цю дію'});
    }
}

exports.allUsers = (req,res)=>{
    User.find((err,users)=>{
        if(err){
            return res.status(400).json({error: err})
        }
        res.json({users});
    }).select('name email update created');
}
 exports.getUser = (req, res)=>{
     req.profile.hashed_password = undefined // hide hashpassword
     req.profile.salt = undefined            // hide salt
    return res.json(req.profile);
 }  

 exports.updateUser = (req,res) => {
    let user = req.profile
    user = _.extend(user, req.body)
    user.update = Date.now()
    user.save( err => {
        if (err){
            return res.status(400).json({error:'Ви не авторизовані, щоб виконувати цю дію'})
        }
        user.hashed_password = undefined; // hide hashpassword
        user.salt = undefined;            // hide salt
        
        res.json({user});
    });
 }
 
 