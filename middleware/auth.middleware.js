const jwt = require('jsonwebtoken');
const secret = process.env.SECRET;
const authenticateUser = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
   
      const decoded = jwt.verify(token, secret);
      req.userId = decoded._id;
      return next();
    }
    catch (err) {
      return res.status(401).json({
        success: false,
        message: "Authentication error!"
      })
    }
  }

  module.exports={authenticateUser}