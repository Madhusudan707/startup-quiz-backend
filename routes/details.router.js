const express = require("express");
const router = express.Router();
const {Details} =  require("../models/details.model")

router.route("/")
.get(async(req,res)=>{
    try{
        const data = await Details.find({})
        res.json({success:true,data})
    }catch(err){
        res.status(500).json({success:false,message:"Unable to find Quiz details",errorMessage:err.message})
    }
})

module.exports = router