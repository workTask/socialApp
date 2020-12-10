const User = require('../models/user');

exports.userById = (req,res,next,id)=>{
    User.findById(id)
    .exec((err,user)=>{
        if(err || !user){
            return res.status(400).json({ 
                error: "Користувач не знайдений"
            })
        }
        req.profile = user
        next()
    })
}