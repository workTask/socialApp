const express = require('express')
const {getPosts, createPost, postsByUser, postById, isPoster, deletePost, updatePost} = require('../controllers/post')
const {requireSignin} = require('../controllers/auth')
const router = express.Router();
const {createPostValidator} = require('../validator')
const {userById} = require('../controllers/user')

router.get("/posts",requireSignin, getPosts);
router.post("/post/new/:userId", requireSignin, createPost, createPostValidator,);
router.get("/posts/by/:userId", requireSignin, postsByUser);
router.delete("/post/:postId", requireSignin, isPoster, deletePost);
router.put("/post/:postId", requireSignin, updatePost);

router.param("userId",userById);
router.param("postId", postById);

module.exports = router;