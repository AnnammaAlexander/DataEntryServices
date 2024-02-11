import ProjectImg from "../model/schema/projectImageSchema.js";
import ProjectReport from "../model/schema/projectReportSchema.js";
import User from "../model/schema/userSchema.js";
import mongoose from "mongoose";
import { ObjectId } from "mongodb";
import bcrypt from "bcryptjs";

import { activateUser } from "../service/emailVerifivation.js";
import Message from "../model/schema/messageSchema.js";

const superAdminHelper = {
  getUserDataHelper: async (userId) => {
    try {
      const response = await User.findOne({ _id:userId });
      if (response) {
        return response;
      }
    } catch (error) {
      console.log(error);
    }
  },
  //upload reports

  uploadReport: async (userId, report) => {
    try {
      const newReport = new ProjectReport({
        userId,
        report,
      });
      const projectReport = await newReport.save();
      return projectReport;
    } catch (error) {
      console.log("uploadReport error:", error);
    }
  },
  //get report
  getReport: async (userId) => {
    try {
      const response = await ProjectReport.find({ userId });
      if (response) {
        return response;
      }
    } catch (error) {
      console.log("getReport error:", error);
    }
  },
  //delete report
  deleteProjectReport: async (id) => {
    try {
      const response = await ProjectReport.updateOne(
        { _id: id },
        { $set: { deleteStatus: true } }
      );
      if (response.modifiedCount === 1) {
        return response;
      }
    } catch (error) {
      console.log("deleteProjectReport error:", error);
    }
  },
  //upload project Image

  uploadProjectImage: async(userId, files, projectNoCount) => {
    const session = await mongoose.startSession();
    session.startTransaction();

    try {
      const responseArray = [];

      for (const singleFile of files) {
        console.log("llllllllllllll",singleFile.path);
        const imgUrl = singleFile.path.split("/project-")[1];
        const imageDoc = { userId, imgUrl, projectNoCount };

        // Perform the database operation within the transaction
        const createdImage =await ProjectImg.create([imageDoc], { session });
        responseArray.push(createdImage);
      }

      console.log("resp", responseArray);
      // Atomically increment the project count within the transaction
      const result = await User.findOneAndUpdate(
        { _id: userId },
        { $inc: { projectNoCount: 1 } },
        { session, new: true, upsert: true }
      );

      // Commit the transaction
      await session.commitTransaction();
      session.endSession();

      return true;
    } catch (error) {
      // An error occurred, abort the transaction
      await session.abortTransaction();
      session.endSession();

      console.log("uploadProjectImage error:", error);
      return false; // Indicate that the transaction failed
    }
  },
  getAllProjects: async (userId) => {
    try {
      const response = await ProjectImg.find({ userId });
      if (response) {
        return response;
      }
    } catch (error) {
      console.log("uploadProjectImage error:", error);
      return false;
    }
  },
  getProjectCountHelper: async (userId) => {
    try {
      // const id = mongoose.Types.ObjectId(userId.trim());
      const response = await User.findOne({ _id: userId });
      if (response) {
        return response;
      }
    } catch (error) {
      console.log("getProjectCountHelper error:", error);
      return false;
    }
  },
  //activateUserDashboard using node mailer

  allClientList: async () => {
    try {
      const response = await User.find();
      if (response) {
        return response;
      }
    } catch (error) {
      console.log("getProjectCountHelper error:", error);
      return false;
    }
  },
  sendEmailPassword: async (userId, email, uuid) => {
    let session; // Declare session variable outside the try block
  
    try {
      session = await mongoose.startSession();
      session.startTransaction();
  
      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(uuid, salt);
      // activateUser.push(activateUser(email, uuid));
    
     
      
  
      // Await the findOneAndUpdate method
      if(hashPassword){
        const response = await User.findOneAndUpdate(
          { _id: userId },
          {
            $set: {
              userName: email,
              password: hashPassword,
              userActivated: true,
            },
          },
          { new: true } // To return the updated document
        );
    

        const res =await  activateUser(email, uuid)
      }
      
  
      // Commit the transaction
      await session.commitTransaction();
      session.endSession();
  
      return true;
    } catch (error) {
      // An error occurred, abort the transaction
      if (session) {
        await session.abortTransaction();
        session.endSession();
      }
  
      console.log("sendEmailPassword error:", error);
      return false; // Indicate that the transaction failed
    }
  },
  //sendMessage to user
  sendMessage:async(message,userId,isImage)=>{
    try {
      if(isImage){
        const newMessage = new Message({ 
          userId,
          message,
          isImage:true

        }) 
        const response = await newMessage.save()
        if(response){
          return response
        }
      }else{

        const newMessage = new Message({ 
          userId,
          message,
        })
        const response = await newMessage.save()
        if(response){
          return response
        }
      }
     
    } catch (error) {
      console.log("sendMessage error:", error);
      return false;


    }
  },
  //getAllMessageHelper
  getAllMessageHelper:async(userId)=>{
    try {
      const response = await Message.find({userId})
      if(response){
        return response
      }
    } catch (error) {
      console.log("getAllMessageHelper error:", error);
      return false;

    }
  },
  //getLastProjectHelper(userId,projectCount)
  getLastProjectHelper:async(userId,projectCount) =>{
    try {
      const response = await ProjectImg.find({userId,projectNoCount:projectCount,isDeleted:false})
      if(response){
        return response
      }
    } catch (error) {
      console.log("getLastProjectHelper error:", error);
      return false;

    }
  },
  //deleteProject
  deleteProject:async(ptojectId,userId) =>{
    try {
      const response = await ProjectImg.findOneAndUpdate({userId,_id:ptojectId},{$set:{isDeleted:true}})
      if(response){
        // console.log("reeeeeeeeeeeeee",response);
        return response
      }
    } catch (error) {
      console.log("deleteProject error:", error);
      return false;

    }
  },
  //deleteAllProjectHelper
  deleteAllProjectHelper:async(projectNoCount,userId) =>{
    try {
      const response = await ProjectImg.updateMany({projectNoCount,userId},{$set:{isDeleted:true}})
      if(response){
        return response
      }
    } catch (error) {
      console.log("deleteAllProjectHelper error:", error);
      return false;
    }
  },
  //resetDashboardHelper
  resetDashboardHelper:async(userId)=>{
    try {
      // const response = await 
    } catch (error) {
      console.log("resetDashboardHelper error:", error);
      return false;

    }
  }
 
};
export default superAdminHelper;
