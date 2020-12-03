const express = require('express')
const postController = require('../controllers/post')
const router = express.Router();


//const getPost = (req,res)=>{
 //   res.send("Home page")
//};

router.get("/", postController.getPosts);
router.post("/post", postController.createPost);

module.exports = router;