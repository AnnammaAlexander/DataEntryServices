import { Schema, model } from "mongoose";

const projectReportSchema = new Schema({
  report: {
    type: String,
  },
  deleteStatus: {
    type: Boolean,
    default: false,
  },
  userId: {
    type: String,
    required: true,
  },
},{
    timestamps:true
});

const ProjectReport = model('ProjectReport',projectReportSchema)
export default ProjectReport