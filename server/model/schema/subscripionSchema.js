import { Schema, model } from "mongoose";

const subscriptionSchema = new Schema(
  {
    SubscriptionType: {
      type: String,
      required: true,
    },
    isExpired: {
      type:Boolean,

      default: false,
    },

    userId: {
      type: String,
      required: true,
    },
    currentPackage:{
      type:String
    },
    PackageExpiry:{
      type:String
    },
    TypeOfRegistration:{
      type:String
    }
  },
  {
    timestamps: true,
  }
);

const Subscription = model("Subscription", subscriptionSchema);
export default Subscription;
