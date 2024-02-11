import { Schema,model } from "mongoose";

const bankAccountSchema = new Schema({
    
        nameOfAccountHolder:{
            type:String,
            required:true 
        },
        bankName:{
            type:String,
            required:true   
        },
        branchName:{
            type:String,
            required:true  
        },
        IBAN_IFSCCode:{
            type:String,
            required:true
        },
        accountNo:{
            type:String,
            required:true 
        },
        swiftCode:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true  
        },
        userId:{
            type:String,
            required:true    
        }
})

const BankAccount = model('BankAccount',bankAccountSchema)
export default BankAccount