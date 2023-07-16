import dotenv from 'dotenv';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

import User from '../models/user.js';
import Admin from '../models/admins.js';
dotenv.config();


export const registeruser = async(req,res) => {
    try{
         const {email} = req.body;

        const oldUser = await User.findOne({email});
        if(oldUser) return res.status(400).json({message:'User already Exist'});

        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);

        const newuser = new User({...req.body , password:hash});

        await newuser.save();
        const token = jwt.sign({id:newuser._id} ,process.env.JWT)
        const {password, ...others} = newuser._doc
        res.cookie("access_token", token,{
            httpOnly:true
        }).status(200).json(others);
    }
    catch(err){
        console.log(err);
    }
}
export const registeradmin = async(req,res) => {
    try{
         const {email} = req.body;

        const oldAdmin = await Admin.findOne({email});
        if(oldAdmin) return res.status(400).json({message:'Admin already Exist'});

        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(req.body.password, salt);
        const newAdmin = new Admin({...req.body , password:hash});

        await newAdmin.save();
        const token = jwt.sign({id:newAdmin._id} ,process.env.JWT)
        const {password, ...others} = newAdmin._doc
        res.cookie("access_token", token,{
            httpOnly:true
        }).status(200).json(others);
    }
    catch(err){
        console.log(err);
    }
}

export const login = async(req,res) => {
    console.log(req.body)
    try{
        const Admin = await User.findOne({email:req.body.email})
        if(!Admin) return res.status(404).json({message: "Admin doesn't exist"});

        const isCorrect = await bcrypt.compare(req.body?.password, Admin.password)
        console.log(isCorrect);

        if(!isCorrect) return res.status(400).json({message: "Invalid credentials"});
        const token = jwt.sign({id: Admin._id}, process.env.JWT)
        const {password, ...others} = Admin._doc;
        console.log(others);
        res.cookie("access_token", token,{
            httpOnly:true,
        }).status(200).json(others);
    }
    catch(err){
        console.log(err);
    }
}