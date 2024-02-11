import dotenv from "dotenv";
// import {v4 as uuidv4 } from 'uuid'
 dotenv.config();
 
//  const stripeInstance = stripe("sk_test_51OWOKZSIp7NUuMWJoYGseKG9BUsCf039JqWNgXmnoZf1vIhZ85TGt8F36ByGfciYUcgaPv3Nx6IfzKXFph42WbVg00BA7D8QjQ");
const stripe = "sk_test_51OWOKZSIp7NUuMWJoYGseKG9BUsCf039JqWNgXmnoZf1vIhZ85TGt8F36ByGfciYUcgaPv3Nx6IfzKXFph42WbVg00BA7D8QjQ";

 const PaymentServices = {
//   generateStripePaymentUrl: async (email,amount) => {
//     try {
//        const uId = uuidv4() // create uniqe id for successpage

//       const session = await stripeInstance.checkout.sessions.create({
//         payment_method_types: ["card"],
//         mode: "payment",
        
//         line_items: [
//           {
//             price_data: {
//               currency: "aed",
//               product_data: {
//                 //   user: userId,
//                 name: email,
                
//               },
//               unit_amount: amount*100,
//             },
//             quantity: 1,
//           },
          
//         ],
//         mode: "payment",
//         //  success_url: process.env.success_url,

//           success_url:`${ process.env.success_url}/${uId}`,
//         cancel_url: `${process.env.cancel_url}/${uId}`,
//         // success_url: https://www.instagram.com/,
//         // cancel_url: https://www.instagram.com/,
//       });

//       return {session,uId};
//     } catch (error) {
//       console.log("error creating checkout session", error);
//     }
//   },


 // Create a PaymentIntent with the order amount and currency
 paymentIntent : async(amount) => {
  try {
    // Use await to get the result of the stripe.paymentIntents.create function
    const paymentIntent = await stripe.paymentIntents.create({
      amount: amount,
      currency: "aed",
      // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
      automatic_payment_methods: {
        enabled: true,
      },
    });

    console.log("Payment Intent Result:", paymentIntent);

    return {
      clientSecret: paymentIntent.client_secret,
    };
  } catch (error) {
    console.log("Error creating payment intent:", error);
  }
}

 };

export default PaymentServices;




