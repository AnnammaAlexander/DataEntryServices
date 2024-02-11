import express from'express';
import superAdminController from '../controller/superAdminController.js';
import { uploadPtojectReport ,uploadProject,uploadAttachmentFile} from '../middleware/cloudinaryConfig.js';
const superAdminRouter = () =>{
    const router = express.Router()
    router.get('/geruserData/:userId',superAdminController.getUserData)

     router.post('/uploadreport',uploadPtojectReport,superAdminController.postReport)
     router.get('/getreport/:id',superAdminController.getReport)
     router.patch('/deletereport',superAdminController.deleteReport)
     router.post('/uploadproject',uploadProject,superAdminController.uploadProject)
    router.get('/allprojects/:userId',superAdminController.getAllProjects)
    router.get('/projectcount/:userId',superAdminController.getProjectCount)
    router.get('/activatedshboard/:userId',superAdminController.activateDashboard)
    router.get('/clientlist',superAdminController.getClientList)
    router.post('/sendmessage',superAdminController.sendMessageToUser)
    router.get('/getallmessage/:userId',superAdminController.getAllMessage)
    router.post('/uploadAttachment',uploadAttachmentFile,superAdminController.uploadFile)
    router.get('/getlastProject/:userId/:projectCount',superAdminController.getLastProjects)
    router.patch('/deletesingleProject',superAdminController.deleteSingleProject)
    router.patch('/deleteallpeoject',superAdminController.deleteAllProject)
    router.patch('/resetdashboard',superAdminController.resetDashboard)















    return router
}
export default superAdminRouter;