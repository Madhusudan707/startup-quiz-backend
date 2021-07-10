const mongoose = require("mongoose");


const AnswerSchema = new mongoose.Schema({
    quiz:[
        {
            questions:[
                {
                    id:Number,
                    answers:[],
                    point:Number,
                    isNegative:Boolean,
                    isBonus:Boolean,
                }
            ]
        }
    ]
},{timestamps: true});

AnswerSchema.methods.toJSON = function (){
    let obj = this.toObject()
    delete obj.questions
    return obj
}

const Answer = mongoose.model("Answer",AnswerSchema)
module.exports = {Answer}
