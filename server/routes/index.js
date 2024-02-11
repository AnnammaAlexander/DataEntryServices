import userRouter from "./userRouter.js";
import superAdminRouter from "./superAdminRouter.js";

const router = (app) =>{
    app.use('/api/user',userRouter())
    app.use('/api/superadmin',superAdminRouter())
}

//userRouter


export default router;