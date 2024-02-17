import Subscription from "../model/schema/subscripionSchema.js";
import User from "../model/schema/userSchema.js";
import {configKeys} from "../config/configKeys.js"
import jwt from "jsonwebtoken";

const userHelper = {
  userExist: async (email) => {
    try {
      const response = await User.findOne({ email });
      return response;
    } catch (error) {
      console.log("error in helper");
    }
  },
  addUser: async (
    email,
    amount,
    name,
    phonenumber,
    nationality,
    currentlocation,
    UploadId,
    DMID
  ) => {
    try {
      const newUser = new User({
        email,
        amount,
        name,
        phonenumber,
        nationality,
        currentlocation,
        UploadId,
      });
      const user = await newUser.save();
      return user;
    } catch (error) {}
  },
  saveUserData: async (fileName, data) => {
    try {
      console.log("fileName.............", fileName);
      const {
        amount,
        plan,
        name,
        phonenumber,
        email,
        nationality,
        currentlocation,
      } = data;
      console.log("...........data:", amount);
      const newUser = new User({
        email,
        amount,
        name,
        phonenumber,
        nationality,
        currentlocation,
        UploadId: fileName,
      });
      const user = await newUser.save();
      console.log("user......", user);
      const today = new Date();
      console.log("today", today);

      // Get current date
      const currentDate = new Date();

      if (plan === "Gold") {
        // Add 150 days to the current date
        currentDate.setDate(currentDate.getDate() + 150);
      } else if (plan === "Silver") {
        // Add 150 days to the current date
        currentDate.setDate(currentDate.getDate() + 90);
      } else {
        // Add 150 days to the current date
        currentDate.setDate(currentDate.getDate() + 30);
      }
      // Get the new expiry date
      const year = currentDate.getFullYear();

      const month = currentDate.getMonth() + 1; // Month is zero-based, so we add 1
      const day = currentDate.getDate();

      // Format the expiry date as desired
      const formattedExpiryDate = `${year}-${
        month < 10 ? "0" + month : month
      }-${day < 10 ? "0" + day : day}`;


      //save Subscription Data
      const newPlan = new Subscription({
        SubscriptionType: "online",
        PackageExpiry: formattedExpiryDate,
        userId: user._id,
        currentPackage: plan,
      });
      const newsubscription = await newPlan.save();

      return true;
    } catch (error) {}
  },
  //isEmailExist
   isEmailExist:async(username) =>{
    try {
        const user =await User.findOne({userName:username})
        
            return user
        
    } catch (error) {
        console.log("error in isEmailExist helper");
  
    }
  },
  //Generates a JWT token for the provided user ID
// generateToken : async (userId) => {
//     try {
//       // Check if the JWT token key is defined in your configuration
//       if (configKeys?.jwtTokenKey) {
//         // Sign the token with the user ID and the JWT token key
//         const token = jwt.sign({ userId }, configKeys.jwtTokenKey, {
//           expiresIn: "5d", // Token expiration time (5 days in this example)
//         });
  
//         // Return the generated token
  
//         return token;
//       } else {
//         // Throw an error if the JWT_TOKEN_KEY is not defined
//         throw new Error("JWT_TOKEN_KEY is undefined");
//       }
//     } catch (error) {
//       // Handle any errors that occur during token generation
//       console.error("Error generating token:", error);
//       throw error;
//     }
//   },

 generateToken :async(payload) => {
    if (configKeys.jwtTokenKey) {
      const token = jwt.sign({ payload }, configKeys.jwtTokenKey, {
        expiresIn: "5d",
      });
      console.log("token...........",token);
      return token;
    } else {
      throw new Error("JWT_TOKEN_KEY is undefined");
    }
  },
  //verify token
 verifyToken : (token) => {
    try {
      if (configKeys.jwtTokenKey) {
        const verification = jwt.verify(token, configKeys.jwtTokenKey);
        if (verification.exp != undefined) {
          const CurrentTime = Math.floor(Date.now() / 1000);
          if (verification.exp >= CurrentTime) {

 // Access the payload directly from the verification result
 const payload = verification.payload;

 // Log or use the payload as needed
            return payload;
          } else {
            return false;
          }
        } else {
          return undefined;
        }
      }
    } catch (error) {
        console.log("error in verify");
    }
  },
  //getuserDataHelper
  getuserDataHelper:async(userId)=>{
    try {
        
    } catch (error) {
        console.log("error in getuserDataHelper");
   
    }
  }

};
export default userHelper;
