
import multer from 'multer';
import {CloudinaryStorage } from 'multer-storage-cloudinary';
import {v2 as cloudinary} from 'cloudinary';
          
cloudinary.config({
    cloud_name : 'dtu0fgcqg'  ,
    api_key : '895521677653134',
    api_secret :'0Dbvs3jsFMDsoIdvjldWNnSwnUw'
})
const profileOptions = {
    cloudinary:cloudinary,
    params:{
        folder: 'userIdProof',
        allowed_formats : ['jpg', 'jpeg', 'png','pdf'],
        transformation: [{ width: 500, height: 500, crop: 'limit' },{ quality: '60' }],
        public_id:(req,file) => {
            const originalname = file.originalname
            // console.log("originalname",originalname);
            return `image-${Date.now()}-${originalname[0]}`
        }
    }
}


const uploadReport = {
    cloudinary : cloudinary,
    params : {
        folder : 'projectReport' ,
        allowed_formats :['jpg' ,'jpeg' , 'png' , 'xls' ,'xlsx', 'pdf'  ] ,
        public_id :(req,file) =>{
            
            const originalName = file.originalname
            return `report-${Date.now()}-${originalName[0]}`
        }
    }
}

const projectImage = {
    cloudinary :cloudinary,
    params: {
        folder:'projectImage',
        allowed_formats : ['jpg' ,'jpeg' , 'png' , 'svg' , 'webp' ,'gif'  ] ,
        public_id : (req , file) =>{
            //  console.log('original name....',file);
            
            const originalName = file.originalname
            return `project-${Date.now()}-${originalName[0]}`
        }
    }
}

const uploadAttachment = {
    cloudinary :cloudinary,
    params: {
        folder:'MessageAttachments',
        allowed_formats : ['jpg' ,'jpeg' , 'png' , 'svg' , 'webp' ,'gif' ,'xls' ,'xlsx', 'pdf' ] ,
        public_id : (req , file) =>{
              console.log('original name....',file);
            
            const originalName = file.originalname
            return `attachments-${Date.now()}-${originalName[0]}`
        }
    }
}
const profilePicStorage = new CloudinaryStorage(profileOptions)
export const uploadUserId = multer({storage:profilePicStorage }).single('UploadId')

const projectStorage = new CloudinaryStorage(uploadReport);
export const uploadPtojectReport = multer({storage:projectStorage}).single('UploadReport');

const projectImageStorage = new CloudinaryStorage(projectImage);
export const uploadProject = multer({storage:projectImageStorage}).array('img',1500);

const attachmentStorage = new CloudinaryStorage(uploadAttachment)
export const uploadAttachmentFile = multer({storage:attachmentStorage }).single('attachmentFile')