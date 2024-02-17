import mongoose from "mongoose";
 import { configKeys } from "../config/configKeys.js";
const connectDB =async()=>{
    try {
        console.log("mongodb............");
        await mongoose.connect(configKeys.MONGO_URL).then(()=>{
            console.log('database connected succesfully')
        })
    } catch(error)  {
        console.log(`database connection Error : ${error}`);
        process.exit(1)
    }
}
export default connectDB; 