// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = "whsec_4c20115fa17c8d45886ad51b515600e06cc5537dc363eb80aa5d2d6652d854c9";

export const stripeEventHandler = (request, response) => {
    console.log("..................",request);
  const sig = request.headers['stripe-signature'];

  let event;

  try {
    event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
  } catch (err) {
    response.status(400).send(`Webhook Error: ${err.message}`);
    return;
  }

  // Handle the event
  switch (event.type) {
    case 'payment_intent.succeeded':
      const paymentIntentSucceeded = event.data.object;
      console.log("ssssssssssssssssssssssssss");
      // Then define and call a function to handle the event payment_intent.succeeded
      break;
    // ... handle other event types
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  // Return a 200 response to acknowledge receipt of the event
  response.send();
}