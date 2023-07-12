import mongoose from "mongoose";

const AdminSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
    },
   

},
{timestamps:true}

);

export default mongoose.model("Admins",AdminSchema);