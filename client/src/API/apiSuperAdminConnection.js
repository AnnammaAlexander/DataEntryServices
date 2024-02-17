import baseUrl from "./axios";

// export const getUserId = async(email)=>{
//     console.log("eee",email);
//     const response = await baseUrl.get(`/superadmin/geruserid/${email}`)
//     console.log(response);

    
    ``
// }
//getClientlis
export const getClientlist = async()=>{
    try {
        console.log("gggg");
        const response = await baseUrl.get('/superadmin/clientlist')
        if(response){
            console.log("response...........");
            return response?.data
        }
    } catch (error) {
        console.log("error in getClientlist",error); 
  
    }
}
//get user data
export const getUserData = async(email)=>{
try {
    const response = await baseUrl.get(`/superadmin/geruserData/${email}`)
    if(response){
        return response?.data;

    }
} catch (error) {
   console.log("error in get data",error); 
}
}
//upload Reports 
export const uploadReport = async(id,file) =>{
    try {
        const form = new FormData()
        form.append("id", id);
        form.append('UploadReport',file)

       const response = await baseUrl.post("/superadmin/uploadreport",form,{
        headers: {
              "Content-Type": "multipart/form-data"
            }
         } ) 
         return response?.data
    } catch (error) {
        console.log("error in uploadReport ",error); 
 
    }

}
//get project report 
export const getProjectReport = async(id) =>{
    try {
       const response = await baseUrl.get(`/superadmin/getreport/${id}`) 
       if(response){
        console.log(" response?.data",response.data);
        return response?.data
       }
    } catch (error) {
        console.log("error in getProjectReport ",error); 
  
    }
}
//delete report
export const deleteReport = async (id) =>{
    try {

        const response = await baseUrl.patch("/superadmin/deletereport",{id})
        if(response){
            return response?.data
        }
    } catch (error) {
        console.log("error in deleteReport ",error); 

    }
}
//assign projects
export const uploadImageFiles =async(id,imgfiles,nextProjectCount)=>{
    try {
        const formdata = new FormData()
        formdata.append("id",id)
        formdata.append("projectCount",nextProjectCount)

         // Append each file separately
         imgfiles.forEach((file) => {
            formdata.append("img", file);
          });
        const response = await baseUrl.post("/superadmin/uploadproject",formdata,{
            headers:{'Content-Type' : 'multipart/form-data'}
        })
        if(response){
            return response?.data
        }
    } catch (error) {
        console.log("error in uploadImageFiles ",error); 
  
    }
}
//get all projects
export const getAllProjects = async(userId) =>{
    try {
        const response = await baseUrl.get(`/superadmin/allprojects/${userId}`)
        if(response){
            return response?.data
        }
    } catch (error) {
        console.log("error in getAllProjects ",error); 

    }
}
//getProjectCount
export const getProjectCount = async(userId)=>{
    try {
        const response = await baseUrl.get(`/superadmin/projectcount/${userId}`)
        if(response){
            return response?.data
        }
    } catch (error) {
        console.log("error in getProjectCount ",error); 
 
    }
}
//activateUserDashboard
export const activateUserDashboard = async(email,userId) =>{
    try {
        const response = await baseUrl.get(`/superadmin/activatedshboard/${userId}`)
        if(response){
            return response?.data
        }
    } catch (error) {
        console.log("error in getProjectCount ",error); 
 
    }
}
//sendMessage
export const sendMessage = async(message,userId) =>{
    try {
       const response =await baseUrl.post('/superadmin/sendmessage',{message,userId})
       console.log("responsekkkk",response);
       if(response){
        return response?.data
       }
    } catch (error) {
        console.log("error in sendMessage ",error); 
   
    }
}
//getAllMessage
export const getAllMessage = async(userId) =>{
    try {
        const response = await baseUrl.get(`/superadmin/getallmessage/${userId}`)
        if(response){
            return response?.data
        }
    } catch (error) {
        console.log("error in getAllMessage ",error); 
  
    }
}
//postUploadHandler
export const postUploadHandler = async(userId,attachmentFile) =>{
    try {
        const formdata = new FormData()
        formdata.append("userId",userId)
        formdata.append("attachmentFile",attachmentFile)
        const response = await baseUrl.post("/superadmin/uploadAttachment",formdata,{
            headers: {
                  "Content-Type": "multipart/form-data"
                }
             } ) 
             return response?.data
    } catch (error) {
        console.log("error in getAllMessage ",error); 
  
    }
}
//getLastUploadedProject
export const getLastUploadedProject = async(userId,projectCount) =>{
    try {
        const response = await baseUrl.get(`/superadmin/getlastProject/${userId}/${projectCount}`)
        if(response){
            return response?.data
        }
    } catch (error) {
        console.log("error in getLastUploadedProject ",error); 

    }
}
//deleteSingleProject
export const deleteSingleProject = async(ptojectId,userId) =>{
    try {
        
        const response = await baseUrl.patch("/superadmin/deletesingleProject",{ptojectId,userId})
        if(response){
            return response?.data
        }
    } catch (error) {
        console.log("error in getLastUploadedProject ",error); 
    }
}
//deleteAllProject
export const deleteAllProject = async(projectNoCount,userId)=>{
    try {
        const response = await baseUrl.patch("/superadmin/deleteallpeoject",{projectNoCount,userId})
        if(response){
            return response?.data
        }
    } catch (error) {
        console.log("error in getLastUploadedProject ",error); 
 
    }
}
//resetDashboard
export const resetDashboard = async(userId) =>{
    try {
        const response = await baseUrl.patch("/superadmin/resetdashboard",{userId})
        if(response){
            return response?.data
        }
    } catch (error) {
        console.log("error in resetDashboard ",error); 

    }
}