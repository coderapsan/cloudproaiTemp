const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware to parse incoming JSON data
app.use(bodyParser.json());

// Nodemailer configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'Rameshwora26@gmail.com', 
    pass: 'H@ribol1234', 
  },
});



// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
  const formData = req.body;

  // Create email message
  const mailOptions = {
    from: 'Rameshwora26@gmail.com', // replace with your email
    to: 'rapsan363@gmail.com', // replace with the recipient's email
    subject: 'New Form Submission',
    text: `
      Full Name: ${formData.name}
      Phone Number: ${formData.phone_number}
      Email: ${formData.email}
      Subject: ${formData.subject}
      Message: ${formData.message}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      return res.status(500).send(error.toString());
    }
    console.log('Email sent: ' + info.response);
    res.status(200).send('Form submitted successfully!');
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
