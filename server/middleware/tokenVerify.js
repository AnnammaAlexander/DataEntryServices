// import {verifyToken} from "../helper/userHelper.js"

import userHelper from "../helper/userHelper.js"


const middleware=(req,res,next)=>{
    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer ")){
       let token=req.headers.authorization.split(' ')[1]
       try{
        if(typeof token === "string"){
            const response = userHelper.verifyToken(token)
            if(response){
                req.user = response
                next()
            } else {
                res.status(401).json({ message: "Unauthorized" })
            }
        }
    }catch(error){
        res.status(401).json({ message: "Token expired" })
    }
    }else{
        res.send({message:'No token found'})
    }
    
}




export default middleware