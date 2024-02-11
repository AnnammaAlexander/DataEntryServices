import axios from "axios";
import {BASE_URL} from "./baseUrl";


const baseUrl = axios.create({
    baseURL:BASE_URL ,
})

baseUrl.interceptors.request.use(
    (config)=>{
        const token = localStorage.getItem("token")
        // const adminToken = localStorage.getItem("adminToken")
       
        if(token){
            config.headers["Authorization"]=`Bearer ${token}`
        // }else if(adminToken){
        //     config.headers["Authorization"]=`Bearer ${adminToken}`
        // }else{
            // delete config.headers["Authorization"]
        }
        return config
    },
    (error)=>{
        console.log("Interceptor encounted an error");
        return Promise.reject(error)
        
    }
)

export default baseUrl