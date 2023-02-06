import { response } from "express";
import User from "../models/user.js";
import Transaction from "../models/transaction.js";

export const getDetails = async(req,res) => {
    try{
        const users = await User.find();
        res.json(users);
    }
    catch(err){
        console.log(err);
    }

}

export const updateBalance = async(req,res) => {
  
    const c=req.params.senderaccno;
    
const senderaccno=parseInt(c);
console.log(senderaccno);

    const a=req.params.recieveraccno;
    const accno=parseInt(a);


    const b=req.body.amount;
    const amount=parseInt(b);
    
    
    try{
        const receiver= await User.findOneAndUpdate({accno:accno},{
$inc:{balance:amount},
         });
        //  console.log(receiver);
         
        const sender = await User.findOneAndUpdate({accno:senderaccno},{
            $inc:{balance:-amount}
        });
        // res.json(sender);
        res.status(200).json("Amount has been sent successfully")
        // console.log()
    }
    catch(err){
        console.log(err);
    }

}

export const createTransaction = async(req,res) => {
    const data = req.body;
    const newdata=new Transaction({...data,doneat: new Date().toISOString()});
    
    try{
        await newdata.save();
        res.status(200).json(newdata)
    }
    catch(e){
        console.log(e);
    }
}

export const deleteTransaction = async(req,res)=>{
    const idd=req.params.id;
    try{
        await User.findByIdAndDelete(idd);
        res.status(200).json("Success is happened")
    }
    catch(e){
        console.log(e);
    }
}

export const getTransactions =async (req,res) =>{
    try {
        const data =await Transaction.find();
        res.status(200).json(data);

    } catch (error) {
        console.log(error);
    }
}

