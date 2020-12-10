const express = require('express')
const {signup, signin, signout} = require('../controllers/auth')
const {userById} = require('../controllers/user')
const router = express.Router();
const {userSignupValidation} = require('../validator')

router.post("/signup", userSignupValidation, signup);
router.post("/signin", signin);
router.get("/signout", signout);

router.param("userId",userById);



module.exports = router;