import { Schema, model } from "mongoose";

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phonenumber: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
    },

    dp: {
      type: String,
    },
    transaction: {
      type: Boolean,
      default: false,
    },
    
    userName: {
      type: String,
    },
    nationality: {
      type: String,
    },
    currentlocation: {
      type: String,
    },
    UploadId: {
      type: String,
    },
    projectNoCount: {
      type: Number,
      default: 0,
    },
    userActivated: {
      type: Boolean,
      default: false,
    },
    lastProjectStatus:{
        type:String,
        default:"pending"
    },
    DMID:{
        type:String,
        
    }
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

export default User;
