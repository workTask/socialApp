const express = require('express')
const {signup} = require('../controllers/auth')
const router = express.Router();
//const {createPostValidator} = require('../validator')


router.post("/signup", signup);

module.exports = router;