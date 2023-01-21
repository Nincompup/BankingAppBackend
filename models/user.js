import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    accno:{
        type:Number,
        required:true,
        unique:true
    },
    balance:{
        type:Number,
        required:true,

    }

},
{timestamps:true}

);

export default mongoose.model("Users",UserSchema);