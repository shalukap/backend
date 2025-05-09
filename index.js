import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import studentRouter from './routes/studentRoute.js'
import userRouter from './routes/userRoute.js';
import jwt from 'jsonwebtoken';
import cors from 'cors';




dotenv.config();
const app=express();
app.use(cors())

app.use(bodyParser.json())
app.use('/api/user',userRouter)



app.use((req,res,next)=>{
    let token=req.header('Authorization');  
     
    if(token!=null){
        token=token.replace('Bearer ','')
        jwt.verify(token,process.env.JWT_SECRET_KEY,(err,decoded)=>{
            if(err){
                res.json({msg:"Invalid token"})
            }else{
                req.user=decoded;
            }
            }
        )
        
    }
    next()  
})
let mongoUrl=process.env.MONGO_URL


mongoose.connect(mongoUrl)

let connection=mongoose.connection;

connection.once('open',()=>{
    console.log("Connected")
})

app.use('/api/student',studentRouter)
app.listen(3000,()=>{
    console.log("server started on port 3000");
})





