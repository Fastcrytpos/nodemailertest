const nodemailer =require('nodemailer');

const PASS = process.env.PASS;
const EMAIL = process.env.EMAIL;
//put ontop
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secureConnection: false,
    port: 587,
    auth: {
      user: EMAIL,
      pass: PASS,
    },
  }); 


try{

transporter.sendMail({
    to: user.email,
    from: process.env.EMAIL,
    subject: "Password reset",
    html: `
              <p>Click this <a href="http://localhost:3000/postEmailVerification${token}">link</a> to set verify your email.</p>
        `,
  });
} catch (error) {
  console.log("Server error while sending email verification", error);
//   return res
//     .status(500)
//     .json({ message: "Server error while sending email verification" });
}
