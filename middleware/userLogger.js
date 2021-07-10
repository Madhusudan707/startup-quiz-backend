function userLogger(req,res,next){
  console.log("logger Called")
  next()
}

module.exports = {userLogger}