const jwt = require("jsonwebtoken");
const { User } = require("../Model/user.model");
require("dotenv").config
const auth =  async (req,res,next) => {
    const token = req.headers.authorization?.split(" ")[1];
    try{
        if(token){
            jwt.verify(token, JWT_SECRET, async (err, decoded) => {
                if (decoded) {
                    const { userID } = decoded;
                    const user = await User.findOne({ _id: userID });
                    const require_role = user.isAdmin;
                    req.userID = userID;
                    req.role = require_role;
                    next();
                  } else {
                    res.status(400).json({ mssg: "You're not logged in.", err });
                  }
            })
        }else{
            res.status(400).json({mssg: "You're not authorized"});
        }
    }catch(err){
        res.status(400).json({err});
    }
}

module.exports = { 
    auth
}