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

exports.hasAuthorization = (res,req,next)=>{
    const authorized = req.profile && req.auth && req.profile._id === req.auth._id;
    if(!authorized00){
        return res.status(403).json({error:"Користувач не авторизований, щоб виконувати цю дію"});
    }
}