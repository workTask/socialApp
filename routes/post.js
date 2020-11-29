const express = require('express')
const postController = require('../controllers/post')
const router = express.Router();


//const getPost = (req,res)=>{
 //   res.send("Home page")
//};

router.get("/",postController.getPosts);

module.exports = router;