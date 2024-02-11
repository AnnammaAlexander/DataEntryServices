import baseUrl from "./axios";

export const makePayment = async (data, amount,plan) => {
  console.log("......................makePayment", data, amount,plan);


const form = new FormData()
form.append('amount',amount)
form.append('plan',plan)

form.append('UploadId',data.UploadId)

form.append("name", data.name);
form.append("phonenumber", data.phonenumber);
form.append("email", data.email);
form.append("nationality", data.nationality);
form.append("currentlocation", data.currentlocation);


  const response = await baseUrl.post("/user/paymentandsignup",form,{
    headers: {
          "Content-Type": "multipart/form-data"
        }
  })
     return response?.data
};

export const VerifyEmail =async(email) =>{
  try {
    const response = await baseUrl.get(`/user/emailVerification/${email}`)
    return response?.data
  } catch (error) {
    console.log("error in api",error);
  }
}

export const paymentIntent = async(amount) =>{
  try {
    const response = await baseUrl.post('/user/paymentandsignup',{amount})
    console.log("...........",response.data);
    return response?.data
  } catch (error) {
    console.log("payment intent error",error);

  }
} 

// export const saveUserData = async (data, filedata) => {
// try {

// const response = await baseUrl.post("/user/saveUserData", form, {
//   headers: {
//     "Content-Type": "multipart/form-data",
//   },
// });
// return response.data;
//   } catch (error) {
//     console.error("Error saving user data:", error);
//     return null;
//   }
// };
