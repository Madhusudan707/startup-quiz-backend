const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
const secret = process.env.SECRET
const {registerAndSendUserData,loginAndSendUserData} = require("../controller/user.controller")
const {authenticateUser} = require('../middleware/auth.middleware')


router.route("/register").post(registerAndSendUserData)
router.route("/login").post(loginAndSendUserData)

router.route("/")
.get(authenticateUser,async(req,res)=>{
    try{
        const data = await User.find({})
        res.json({success:true,data})
    }catch(err){
        res.status(500).json({success:false,message:"Unable to find user",errorMessage:err.message})
    }
})






module.exports = router