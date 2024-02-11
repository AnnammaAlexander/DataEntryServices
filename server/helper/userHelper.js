import User from "../model/schema/userSchema.js";

const userHelper = {
    userExist:async(email) =>{
        try {
           const response = await User.findOne({email}) 
           return response
        } catch (error) {
          console.log("error in helper");  
        }
    },
    addUser:async(email,amount,name,phonenumber,nationality,currentlocation,UploadId,DMID) =>{
        try {
            const newUser = new User({
                email,amount,name,phonenumber,nationality,currentlocation,UploadId  
            })
           const user= await newUser.save()
           return user
        } catch (error) {
            
        }
    }


}
export default userHelper