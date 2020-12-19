const express = require('express')
const {userById, allUsers, getUser, updateUser} = require('../controllers/user')
const {requireSignin} = require('../controllers/auth')

const router = express.Router();

router.get("/users", allUsers);  // list all users
router.get("/user/:userId", requireSignin, getUser); // 
router.put("/user/:userId", requireSignin, updateUser); // update user data


router.param("userId",userById);

module.exports = router;