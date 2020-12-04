const express = require('express')
const {getPosts, createPost} = require('../controllers/post')
const router = express.Router();
const {createPostValidator} = require('../validator')


//const getPost = (req,res)=>{
 //   res.send("Home page")
//};

router.get("/", getPosts);
router.post("/post", createPostValidator, createPost);

module.exports = router;