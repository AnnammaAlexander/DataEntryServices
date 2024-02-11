import dotenv from 'dotenv';
dotenv.config()
export const configKeys ={
    MONGO_URL:process.env.MONGODB_URL ,
    PORT:process.env.PORT ,
    jwtTokenKey:process.env.JWT_TOKEN_KEY,
    STRIPE_TESTKEY:process.env.STRIPE_TESTKEY,
    success_url:process.env.success_url,
    cancel_url :process.env.cancel_url,
    CLOUDINARY_API_KEY:process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET:process.env.CLOUDINARY_API_SECRET,
    CLOUD_NAME:process.env.CLOUD_NAME
}