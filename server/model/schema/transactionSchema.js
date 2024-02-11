import { Schema ,model } from "mongoose";

const transactionSchema = new Schema(
    {
        email:{
            type:String,
            required:true 
        },
        status:{
            type:Boolean,
            required:true,
            default:false
        },
        transactionStatus:{
            type:String,
            required:true  
        },
        scheme:{
            type:String,
            required:true  
        },
        amount:{
            type:String,
            required:true   
        },
        transactionId:{
            type:String,
            required:true   
        },
        userId:{
            type:String,
            required:true 
        }

    }
    ,{
        timestamps:true
    }
)
 
const Transaction = model('Trancaction',transactionSchema)
export default Transaction