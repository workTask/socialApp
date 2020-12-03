exports.createPostValidator = (req,res,next)=>{
    //title
    req.check("title","Write a title").notEmpty();
    req.check("title", "Title must be between 4 to 150 char").isLength({
        min:4,
        max:150
    });
    //body
    req.check("body","Write a body").notEmpty();
    req.check("body", "Body must be between 4 to 2000 char").isLength({
        min:4,
        max:2000
    });
    // check for error
    const errors = req.validationErrors();
    if (errors){
        const fError= errors.map(error => error.msg)[0];
        return res.status(400).json({error:fError});
    };
    // proceed to next middleware
    next();
};