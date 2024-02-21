import nodemailer from 'nodemailer'



export const nodemailerVerify = (email,uuid)=>{


    const transporter = nodemailer.createTransport({
      host: "smtpout.secureserver.net",
      secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
        ciphers:'SSLv3'
    },
    requireTLS:true,
    port: 465,
    debug: true,
        auth: {
          user: "noreply@codedone.uk",
          pass: "noreply@123",
        },
      });
      
      // async..await is not allowed in global scope, must use a wrapper
      async function main() {
        // send mail with defined transport object
        const info = await transporter.sendMail({
          from: '"DataEntry Service 👻" <noreply@codedone.uk>', // sender address
          to: email, // list of receivers
          subject: "verify email ✔", // Subject line
          text: "Please verify your email by enter the otp ?", // plain text body
          html: `<b>${uuid}</b>`, // html body
          attachments: [{
            filename: "Terms and condition",
            path:'D:/DataEntryServices/server/service/Terms and Policies.pdf',
            contentType: 'application/pdf'

        }]
        });
      
        console.log("Message sent: %s", info.messageId);
        
      }
      
      main().catch(console.error);
      return true

}
export const activateUser = async(email,uuid) =>{
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: "annammaka002@gmail.com",
        pass: "fzmp iaec lppy srxl",
      },
    });
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
      // send mail with defined transport object
      const info = await transporter.sendMail({
        from: '"DataEntry Service 👻" <annammaka002@gmail.com>', // sender address
        to: email, // list of receivers
        subject: "Username & password ✔", // Subject line
        text: "Login your Account using this userName and Password", // plain text body
        html: `username:<b>${email}, password:<b>${uuid}</b>`, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
    
      //
      // NOTE: You can go to https://forwardemail.net/my-account/emails to see your email delivery status and preview
      //       Or you can use the "preview-email" npm package to preview emails locally in browsers and iOS Simulator
      //       <https://github.com/forwardemail/preview-email>
      //
    }
    
    main().catch(console.error);
    return true
  } catch (error) {
    console.log("errror in node mailer");
  }
}
