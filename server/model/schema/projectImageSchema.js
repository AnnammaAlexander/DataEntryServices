import { Schema,model } from "mongoose";

const projectImgSchema=new Schema(
    {
       
        userId:{
            type:String,
            required:true
        },
        

        imgUrl:{
            type:String,
        },
        isSaved:{
            type:Boolean,
            
            default:false
        },
        shippingArea:{
            type:String
        },
        brand:{
            type:String
        },
        entryDate:{
            type:String
        },
        time:{
            type:String
        },
        warranty:{
            type:String
        },
        shippingTimeframe:{
            type:String
        },
        productRating:{
            type:String
        },
        dateSubmittedForReview:{
            type:String
        },
        material:{
            type:String
        },
        productType:{
            type:String
        },
        globalRating:{
            type:String
        },
      
        projectNoCount: {
            type: Number,
            default: 0
            
        },
        isDeleted:{
            type:Boolean,
            default:false
        },
        isExpired: {
            type:Boolean,
      
            default: false,
          },







        
        
    }
    ,{
        timestamps:true
    }
)
projectImgSchema.pre('save', async function (next) {
    try {
      if (!this.projectNo) {
        const count = await this.constructor.countDocuments({ userId: this.userId });
        this.projectNo = `PRJ-${count + 1}`;
      }
      next();
    } catch (error) {
      next(error);
    }
  });

const ProjectImg = model('projectImg',projectImgSchema,'projectImgs')

export default ProjectImg