import User from "../models/UserModel.js";
import dotenv from "dotenv";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


dotenv.config();


export function registerUser(req,res){
        
        const data=req.body;
        data.password=bcrypt.hashSync(data.password,10);
        const newUser=new User(data);
        newUser.save().then(()=>{
            res.json({msg:"user registered"})
        }).catch((err)=>{
            res.json({msg:err.message})
        })
        
}

export function loginUser(req,res){
    const data=req.body; 
    
    User.findOne({email:data.email}).then((user)=>{
        if(user==null){
            res.json({msg:"user not found"})
        }else{
            const isPasswordCorrect=bcrypt.compareSync(data.password,user.password);
            if(isPasswordCorrect){
                const token=jwt.sign({
                    email:user.email,
                    name:user.name,
                    role:user.role,
                    profilePicture:user.profilePicture
                },process.env.JWT_SECRET_KEY)
                res.json({msg:"Login success",token:token,user:user})
            }else{
                res.json({msg:"Incorrect password"})
            }
        }
    })
}