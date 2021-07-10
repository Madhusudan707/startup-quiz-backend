const express = require("express");
const router = express.Router();
const {Answer} =  require("../models/answer.model")
const _ = require("lodash");



router.route("/:id/:qid/:ans")
.get(async(req,res)=>{
    try{
        const {id,qid,ans} = req.params
        const quiz = await Answer.findById(id)

        const question =_.find(quiz.quiz[0].questions,function(o){return o.id.toString()===qid})
        let isRight = "skip"
       if(question && ans>=0){
            question.answers.toString()===ans.toString() ?  isRight = true: isRight= false
       }

       res.status(200).json({success:true,isRight,answer:question.answers.toString()})
    }catch(err){
        res.status(500).json({success:false,message:"Unable to find Quiz",errorMessage:err.message})
    }
})



module.exports = router