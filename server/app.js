import express from 'express';
import cors from 'cors';
import { configKeys } from './config/configKeys.js';
import connectDB from './model/connection.js'
import router from './routes/index.js'
// import {v2 as cloudinary } from 'cloudinary'
import { stripeEventHandler } from './controller/webHooks.js';

//  import stripe from './routes/stripe.js'

const app= express()

// Enabling CORS
const enableCors = {
    // origin: ["user.codedone.uk","admin.codedone.uk"],
    origin:"*",
    exposeHeaders: ['Cross-Origin-Opener-Policy', 'Cross-Origin-Resource-Policy']
  }
  
  app.use(cors(enableCors))
// app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use(express.static('./public'));
app.use('/uploads', express.static('uploads'));


 app.post('/webhook', express.raw({type: 'application/json'}),stripeEventHandler)








connectDB()


// cloudinary.config({
//     cloud_name:configKeys.CLOUD_NAME,
//     api_key :configKeys.CLOUDINARY_API_KEY,
//     api_secret :configKeys.CLOUDINARY_API_SECRET
// })



router(app)



// app.use(router)
const port = configKeys.PORT
app.listen(port ,'0.0.0.0', ()=>{
    console.log(`Server started on http://localhost:${port}`);
})
