const express = require('express')
const {signup} = require('../controllers/auth')
const router = express.Router();
const {userSignupValidation} = require('../validator')

router.post("/signup", userSignupValidation, signup);

module.exports = router;