const mongoose = require("mongoose");


const QuizSchema = new mongoose.Schema({
    quiz:[
        {
            info:{
                name:String,
                category:String,
                isPrivate:Boolean,
            },
            questions:[
                {
                    id:Number,
                    question:String,
                    options:[],
                    answers:{type:[],select:false},
                    point:Number,
                    isNegative:Boolean,
                    isBonus:Boolean,
                    imageUrl:String
                }
            ]
        }
    ]
},{timestamps: true});
QuizSchema.methods.toJSON = function (){
    let obj = this.toObject()
    delete obj.questions
    return obj
}

const Quizes = mongoose.model("Quizes",QuizSchema)

module.exports = {Quizes}
