const express = require("express");
const router = express.Router();
const {Quizes} =  require("../models/quiz.model")
const _ = require("lodash");

router.route("/")
.get(async(req,res)=>{
    try{
        const quiz = await Quizes.find({})
     quiz?res.status(200).json({success:true,quiz,message:"Quiz Data Successfully Fetched"}):res.status(202).json({success:false,message:"No Data found for Quiz"})
       
    }catch(err){
        res.status(500).json({success:false,message:"Unable to find Quiz",errorMessage:err.message})
    }
})

router.route("/:id")
.get(async(req,res)=>{
        try{
            const id = req.params.id
            const quiz = await Quiz.findById(id)
            quiz?res.status(200).json({success:true,quiz,message:"Quiz Successfully Fetched"}):res.status(202).json({success:false,message:"No Data found for Quiz"})
        }
        catch(err){
            res.status(500).json({success:false,message:"Unable to find Quiz",errorMessage:err.message})
        }
})

module.exports = router