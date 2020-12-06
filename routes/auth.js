const express = require('express')
const {signup, signin} = require('../controllers/auth')
const router = express.Router();
const {userSignupValidation} = require('../validator')

router.post("/signup", userSignupValidation, signup);
router.post("/signin", signin);

module.exports = router;