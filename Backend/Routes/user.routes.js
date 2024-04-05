const express = require("express");
const { User } = require("../Model/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken") ;

const userRouter = express.Router();

userRouter.post('/register',async (req,res) => {
    const {username, email ,password} = req.body;
    try{ 
        if(username && email && password){
            // const findUser = await User.findOne({$or : [{email},{username}]});
            const findUser = await User.findOne({email});
            if(findUser){
                return res.json({error:"email already exists"});
            }
            bcrypt.hash(password, 8, async function(err, hash) {
                if(!err){
                    const newUser = new User({username, email ,password: hash});
                    await newUser.save();
                    return res.json({mssg:"New user added Successfully", user: newUser});

                }else{
                    return res.json({error: "Password isn't hashed"})
                }
            })
        }else{
            return res.status(404).json({"error":"Please fill all the required details"});
        }
       
    }catch(err){
        res.status(401).json({error:err});
    }
    
})

userRouter.post("/login", async(req,res) => {
    const {email, password } = req.body;
    try{
        const findUser = await User.findOne({email})
        if(!findUser){
            return res.status(404).json({mssg:"Email not found."});
        }
        bcrypt.compare(password, findUser.password, function(err, result) {
            if(result){
                const token = jwt.sign(
                    { id: findUser._id , role : findUser.role }, 'KEY');
                return res.status(200).json({mssg:"You are logged In.", token})
            }else{
                return res.status(404).json({mssg:"Incorrect Password"});
            }
        });

    }catch(err){
        res.status(401).json({error:"Internal Server Error"})
    }
})

module.exports = {
    userRouter
}