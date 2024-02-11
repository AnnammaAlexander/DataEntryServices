import { response } from "express";
import PaymentServices from "../routes/stripe.js";
import User from "../model/schema/userSchema.js";
import userHelper from "../helper/userHelper.js";
import {nodemailerVerify} from "../service/emailVerifivation.js";
import {v4 as uuidv4 } from 'uuid'
// const stripe = require("stripe")('sk_test_51OWOKZSIp7NUuMWJoYGseKG9BUsCf039JqWNgXmnoZf1vIhZ85TGt8F36ByGfciYUcgaPv3Nx6IfzKXFph42WbVg00BA7D8QjQ');
import stripe from "stripe";
const stripeInstance = stripe('sk_test_51OWOKZSIp7NUuMWJoYGseKG9BUsCf039JqWNgXmnoZf1vIhZ85TGt8F36ByGfciYUcgaPv3Nx6IfzKXFph42WbVg00BA7D8QjQ');

const userController = {
makePayment: async(req,res)=>{
    try {
     const {email,amount,name,phonenumber,nationality,currentlocation,UploadId,plan} = req.body
     console.log("lllllllllllllllll",email,amount,plan);
     // Create a PaymentIntent with the order amount and currency
     const paymentIntent = await stripeInstance.paymentIntents.create({
        amount: amount, // You need to define 'items' or replace this with your actual order amount calculation
        currency: "inr",
        description:"Data entry services",
        
          
        
       
        automatic_payment_methods: {
          enabled: true,
        },
      });


      
console.log("................",paymentIntent?.client_secret);
        res.json({
          clientSecret: paymentIntent.client_secret,
        });
} catch (error) {
    console.log("error in controller makePayment:", error);

}

},


// const  paymentIntent= await PaymentServices.paymentIntent(amount)
// console.log("paymentIntent",paymentIntent);
//    res.json(paymentIntent)    




    // const emailExist= await userHelper.userExist(email)
    // if(emailExist){
    //     if(emailExist.transaction){
    //         res.json({message:"The user already exist in this email",status:false })
    //     }else{

    //        const response = await stripePayment()
    //        if(response?.session?.url){

    //         res.json({paymentUrl:response?.session?.url,status:true,transactionId:response?.session?.id,userId:emailExist._id,UUid:response.uId})
    //     }else{
    //         res.json({message:"error to loading",status:false})
    //     }

    //     }


    // }else{

    //     const uploadUserId= req.file.path.split("/image-")[1]

    //     const user = await userHelper.addUser(email,amount,name,phonenumber,nationality,currentlocation,uploadUserId)

    //     if(user){
    //         const response =  await stripePayment()
    //         if(response?.session?.url){
    
    //             res.json({paymentUrl:response?.session?.url,status:true,transactionId:response?.session?.id,userId:user._id,UUId:response.uId})
    //         }else{
    //             res.json({message:"error to loading",status:false})
    //         }
    
    

    //     }
    // }

 
saveUserDataAndTransaction: async(req,res) =>{
    try {
        console.log("fileeeeeeeee",req.file.path);
        console.log("dataaaaaaaaaa",req.body);
        
    } catch (error) {
        
    }
},

//emailVerification
emailVerification:async(req,res)=>{
     const {email} = req.params
     const uId = uuidv4().slice(0,6) // create uniqe iid
     const verification = nodemailerVerify(email,uId)
      if(verification){

          res.json({uId,status:true})
      }
    }
     
}

export default userController;