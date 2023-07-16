import mongoose from "mongoose";

const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        // required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        required:true,
        type:String,
    },
    accno:{
        type:Number,
        required:true,
        unique:true
    },
    balance:{
        type:Number,
        // required:true,
        default:0

    },
    pic:{
        type:String,
        // required:true,
       default:"nahi_aaya"
    }

},
{timestamps:true}

);

export default mongoose.model("Users",UserSchema);