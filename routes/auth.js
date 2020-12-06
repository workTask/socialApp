const express = require('express')
const {signup, signin, signout} = require('../controllers/auth')
const router = express.Router();
const {userSignupValidation} = require('../validator')

router.post("/signup", userSignupValidation, signup);
router.post("/signin", signin);
router.get("/signout", signout);

module.exports = router;