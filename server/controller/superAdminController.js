import superAdminHelper from "../helper/superAdminHelper.js";
import { v4 as uuidv4 } from "uuid";

const superAdminController = {
  // getUserid: async(req,res)=>{
  //     try {
  //         const {email} = req.params
  //         const response = await superAdminHelper.getUserIdHelper(email)
  //     } catch (error) {
  //         console.log("error in get userid:",error);
  //     }
  // },
  getUserData: async (req, res) => {
    try {
      const { userId } = req.params;
      const response = await superAdminHelper.getUserDataHelper(userId);
      res.json(response);
    } catch (error) {
      console.log("error in get userdata:", error);
    }
  },
  //upload report
  postReport: async (req, res) => {
    try {
      const { id } = req.body;
      const report = req.file.path.split("/report-")[1];
      const response = await superAdminHelper.uploadReport(id, report);
      if (response) {
        res.json(response);
      }
    } catch (error) {
      console.log("error in get postReport:", error);
    }
  },
  // get project report
  getReport: async (req, res) => {
    try {
      const { id } = req.params;
      const response = await superAdminHelper.getReport(id);
      if (response) {
        res.json(response);
      }
    } catch (error) {
      console.log("error in get getReport:", error);
    }
  },
  //delete Project Report
  deleteReport: async (req, res) => {
    try {
      const { id, userId } = req.body;
      const response = await superAdminHelper.deleteProjectReport(id, userId);
      if (response) {
        res.json({ status: true });
      }
    } catch (error) {
      console.log("error in get getReport:", error);
    }
  },
  //upload project

  uploadProject: async (req, res) => {
    try {
      const userId = req.body.id;
      const projectCount = req.body.projectCount;
      const files = req.files;

      const response = await superAdminHelper.uploadProjectImage(
        userId,
        files,
        projectCount
      );
      if (response) {
        res.json({ status: true });
      } else {
        res.json({ status: false });
      }
    } catch (error) {
      console.log("error in get uploadProject:", error);
      res.json({ status: false, message: "Network error" });
    }
  },
  //gett all projects
  getAllProjects: async (req, res) => {
    try {
      const { userId } = req.params;
      const response = await superAdminHelper.getAllProjects(userId);
      if (response) {
        res.json({ response, status: true });
      }
    } catch (error) {
      console.log("error in get getAllProjects:", error);
      res.json({ status: false });
    }
  },
  //getProjectCount
  getProjectCount: async (req, res) => {
    try {
      const { userId } = req.params;
      const response = await superAdminHelper.getProjectCountHelper(userId);
      if (response) {
        res.json({ projectNoCount: response?.projectNoCount, status: true });
      }
    } catch (error) {
      console.log("error in get getAllProjects:", error);
      res.json({ status: false });
    }
  },
  //activateDashboard
  activateDashboard: async (req, res) => {
    try {
      const { userId } = req.params;
      const user = await superAdminHelper.getProjectCountHelper(userId);
      if (user) {
        const email = user?.email;
        const uuid = uuidv4().slice(0, 6); // create uniqe iid

        const response = await superAdminHelper.sendEmailPassword(
          userId,
          email,
          uuid
        );
        if (response) {
          res.json({ response, status: true });
        }
      }
    } catch (error) {
      console.log("error in activateDashboard:", error);
      res.json({ status: false });
    }
  },
  getClientList: async (req, res) => {
    try {
      const response = await superAdminHelper.allClientList();
      console.log("gggggggggggg");
      if (response) {
        res.json({ response, status: true });
      }
    } catch (error) {
      console.log("error in getClientList:", error);
      res.json({ status: false });
    }
  },
  //sendMessageToUser
  sendMessageToUser: async (req, res) => {
    try {
      const { message, userId } = req.body;
      const response = await superAdminHelper.sendMessage(message, userId);
      if (response) {
        res.json({ status: true });
      }
    } catch (error) {
      console.log("error in sendMessageToUser:", error);
      res.json({ status: false });
    }
  },
  //getAllMessage
  getAllMessage: async (req, res) => {
    try {
      const { userId } = req.params;
      const response = await superAdminHelper.getAllMessageHelper(userId);
      if (response) {
        console.log("rrrrrrrrrrrrr", response);
        res.json({ response, status: true });
      }
    } catch (error) {
      console.log("error in sendMessageToUser:", error);
      res.json({ status: false });
    }
  },
  //upload attachment file
  uploadFile: async (req, res) => {
    try {
      const { userId } = req.body;
      const file = req.file;
      if (file) {
        const isImage = true;
        const Attachments = req.file.path.split("/attachments-")[1];
        const response = await superAdminHelper.sendMessage(
          Attachments,
          userId,
          isImage
        );
        if (response) {
          res.json({ response, status: true });
        }
      }
    } catch (error) {
      console.log("error in uploadFile:", error);
      res.json({ status: false });
    }
  },

  //getLastProjects
  getLastProjects: async (req, res) => {
    try {
      const { userId, projectCount } = req.params;
      const response = await superAdminHelper.getLastProjectHelper(
        userId,
        projectCount
      );
      if (response) {
        res.json({ response, status: true });
      }
    } catch (error) {
      console.log("error in getLastProjects:", error);
      res.json({ status: false });
    }
  },
  //deleteSingleProject
  deleteSingleProject: async (req, res) => {
    try {
      const { ptojectId, userId } = req.body;
      console.log("yyyyyyyyyyyyy");
      const response = await superAdminHelper.deleteProject(ptojectId, userId);
      if (response) {
        res.json({ response, status: true });
      }
    } catch (error) {
      console.log("error in deleteSingleProject:", error);
      res.json({ status: false });
    }
  },
  //deleteAllProject
  deleteAllProject: async (req,res) => {
    try {
      const { projectNoCount, userId } = req.body;

      const response = await superAdminHelper.deleteAllProjectHelper(
        projectNoCount,
        userId
      );
      if (response) {
        res.json({ response, status: true });
      }
    } catch (error) {
      console.log("error in deleteAllProject:", error);
      res.json({ status: false });
    }
  },
  //resetDashboard
  resetDashboard:async(req,res) =>{
    try {
    const {userId} = req.body
    const response = await superAdminHelper.resetDashboardHelper(userId)
    if(response){
      res.json({ response, status: true });
    }
    } catch (error) {
    
      console.log("error in resetDashboard:", error);
      res.json({ status: false });

    }
  }
};
export default superAdminController;
