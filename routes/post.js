const express = require('express')
const {getPosts, createPost} = require('../controllers/post')
const {requireSignin} = require('../controllers/auth')
const router = express.Router();
const {createPostValidator} = require('../validator')
const {userById} = require('../controllers/user')

router.get("/", requireSignin, getPosts);
router.post("/post", createPostValidator, createPost);

router.param("userId",userById);

module.exports = router;