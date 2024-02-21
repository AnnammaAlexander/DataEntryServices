import express from 'express';
import userController from '../controller/userController.js';
  import { uploadUserId } from '../middleware/cloudinaryConfig.js';
  import middleware from '../middleware/tokenVerify.js';

const userRouter =()=>{
    const router = express.Router()

     router.post('/paymentandsignup',userController.makePayment)


     router.get('/emailVerification/:email',userController.emailVerification)
     router.post('/saveUserData',uploadUserId,userController.saveUserDataAndTransaction)
     router.post('/loginuser',userController.userLogin)
     router.get("/userDataAndProject",middleware,userController.getUserDetails)
     router.get("/userprofiledata",middleware,userController.getuserprofiledata)
     router.patch('/changephone',middleware,userController.changephone)






    return router;
}
export default userRouter;