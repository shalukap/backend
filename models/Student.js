
import mongoose from "mongoose";

const studentSchema=new mongoose.Schema({
    sid:{
        type:String,
        required:true,
        unique:true
    },
    sname:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    dob:{
        type:Date,
        required:true
    }


})

const Student= mongoose.model("student",studentSchema)

export default Student