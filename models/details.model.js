const mongoose = require("mongoose");

const DetailsSchema = new mongoose.Schema({
  Details:{
      name:String,
      category:String,
      privacy:Boolean,
  }
},{timestamps: true});

const Details = mongoose.model("Details",DetailsSchema)
module.exports = {Details}
