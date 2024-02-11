import { Schema, model } from "mongoose";
const messageSchema = new Schema(
  {
    userId: {
      type: String,
    },
    message: {
      type: String,
    },
    isViewed: {
      type: Boolean,
      default: false,
    },
    isImage:{
        type: Boolean,
        default: false,  
    }
  },
  {
    timestamps: true,
  }
);
const Message = model("Message", messageSchema);
export default Message;
