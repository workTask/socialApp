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

exports.userSignupValidation = (req,res,next) =>{
    //name is not null and min 4 max 10 char
    req.check('name', 'Імя не повино бути порожнім').notEmpty();
    //check for password
    req.check('email','Email повинен мати мінімум 4 та максимум 12 символів')
        .matches(/.+\@.+\..+/)
        .withMessage('Email має містити символ @')
        .isLength({ min:4, max:2000 })
    req.check('password','Вкажіть ваш password').notEmpty()
    req.check('password')
        .isLength({min:4})
        .withMessage('Пароль повинен містити min 6 символів')
        .matches(/\d/)
        .withMessage('Пароль повинен містити хоча б одину цифру')
    // check for error
    const errors = req.validationErrors();
    if (errors){
        const fError= errors.map(error => error.msg)[0];
        return res.status(400).json({error:fError});
    };
    // proceed to next middleware

    next();
}