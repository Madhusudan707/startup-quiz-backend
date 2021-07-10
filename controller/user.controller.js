
const jwt = require('jsonwebtoken');
const { User } = require('../models/user.model');
const bcrypt = require("bcrypt");
const { catchError } = require('../utils');
const _ = require('lodash');
const secret = process.env.SECRET;

const registerAndSendUserData = async (req, res, next) => {

    catchError(next, async () => {
      let {name,email,password} = req.body;
      const user= {name:name,email:email,password:password}
      console.log(user)
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(user.password, salt);
      let newUser = new User(user);
      newUser = await newUser.save();
      const token = jwt.sign({ _id: newUser._id }, secret, { expiresIn: "24h" });
      let userData = _.pick(newUser, ["_id", "name", "email"])
      userData = _.extend(userData, { token });
      res.json({
        success: true,
        user: userData
      });
    });
  }

const loginAndSendUserData =  async(req,res,next)=>{
  catchError(next,async()=>{
    const {email,password} = req.body
    const user = await User.findOne({email})
    if(user){
      const validPassword = await bcrypt.compare(password,user.password)
      console.log(validPassword)
      if(validPassword){
        const token = jwt.sign({_id:user._id},secret,{expiresIn:"24h"})
      
        let userData = _.pick(user, ["_id", "name", "email"])
        userData = _.extend(userData, { token });
        console.log(userData)
        res.json({
          success:true,
          user:userData
        })
      }
      return res.status(401).json({
        success: false,
        message: "Authentication error!"
      });
    }
    return res.json({
      success: false,
      message: "User not found!"
    });
  })
}

  module.exports = {registerAndSendUserData,loginAndSendUserData}