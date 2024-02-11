import { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
// import './Stripe.css'
import { paymentIntent } from "../../../../API/apiUserConnection";


// const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_TESTKEY);

export default function StripePayment() {
    const [clientSecret, setClientSecret] = useState("");

  
    // useEffect(() => {
      // Create PaymentIntent as soon as the page loads
    //   fetch("/create-payment-intent", {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json" },
    //     body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    //   })
    //     .then((res) => res.json())
    //     .then((data) => setClientSecret(data.clientSecret));
    // payment();
    
    // }, []);
async function payment(){
    const response = await paymentIntent(500)
    console.log('ressss;;;;;;;;;',response);
    setClientSecret(response.clientSecret)
}
  
    const appearance = {
      theme: 'stripe',
    };
    const options = {
      clientSecret,
      appearance,
    };
  
    console.log("clientSecret,,,,,,,,,",clientSecret,stripePromise);
    return (
      <div className="Stripe">
        {clientSecret && (
          <Elements options={options} stripe={stripePromise}>
            <CheckoutForm clientSecret={clientSecret} />
          </Elements>
        )}
      </div>
    );
  }