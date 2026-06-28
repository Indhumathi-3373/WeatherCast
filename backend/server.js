const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("EMAIL:", process.env.EMAIL);
console.log("PASS exists:", !!process.env.PASS);

// Add error handling for missing env vars
if (!process.env.EMAIL || !process.env.PASS) {
  console.error("ERROR: EMAIL or PASS environment variables are not set!");
}

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port:  587 ,
  secure: true,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

// Test email connection on startup
transporter.verify((error, success) => {
  if (error) {
    console.log("Email setup error:", error);
  } else {
    console.log("Email transporter ready!");
  }
});

app.post("/", async (req, res) => {
  const { name, email, feedback } = req.body || {};
  console.log("Received:", { name, email, feedback });

  if (!name || !email || !feedback) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }
    res.json({
    success: true,
    message: "Feedback received! We'll process it shortly.",
  });

  const mailOptions = {
    from: process.env.EMAIL,
    to: process.env.EMAIL,
    subject: `New feedback received from ${name}`,
    html: `
      <h2>Feedback Form</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Feedback:</strong> ${feedback}</p>
    `,
  };

   transporter.sendMail(mailOptions).catch((error) => {
    console.log("EMAIL ERROR:", error.message);
  });
});

// Use Render's dynamic PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});