const express = require('express')
const {getPosts, createPost} = require('../controllers/post')
const {requireSignin} = require('../controllers/auth')
const router = express.Router();
const {createPostValidator} = require('../validator')

router.get("/", requireSignin, getPosts);
router.post("/post", createPostValidator, createPost);

module.exports = router;