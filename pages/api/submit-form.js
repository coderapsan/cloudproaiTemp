// // pages/api/submit-form.js
// import nodemailer from 'nodemailer';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { name, phone_number, email, subject, message } = req.body;

//     // Configure your nodemailer transporter with your email credentials
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: 'Rameshwora26@gmail.com', // Your Gmail email address
//         pass: 'H@ribol1234', // Your Gmail password
//       },
//     });

//     // Setup email data
//     const mailOptions = {
//       from: 'Rameshwora26@gmail.com',
//       to: 'rapsan363@gmail.com',
//       subject: subject,
//       text: `
//         Name: ${name}
//         Phone Number: ${phone_number}
//         Email: ${email}
//         Message: ${message}
//       `,
//     };

//     try {
//       // Send mail
//       await transporter.sendMail(mailOptions);
//       res.status(200).json({ success: true });
//     } catch (error) {
//       console.error('Error sending email:', error);
//       res.status(500).json({ success: false, error: 'Internal Server Error' });
//     }
//   } else {
//     res.status(405).json({ success: false, error: 'Method Not Allowed' });
//   }
// }
