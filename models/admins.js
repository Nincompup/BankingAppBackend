import mongoose from "mongoose";

const AdminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        required:true,
        type:String,
        unique:true
    },
    password:{
        type:String,
        required:true,
    },
    isadmin:{
        type:Boolean,
        default:true
    }
},
{timestamps:true}

);

export default mongoose.model("Admins",AdminSchema);