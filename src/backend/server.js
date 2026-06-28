const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("EMAIL:", process.env.EMAIL);
console.log("PASS exists:", !!process.env.PASS);

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS, 
  },
});


app.post("/", async (req, res) => {
  const { name, email, feedback } = req.body;
console.log(name, email, feedback); 
  if (!name || !email || !feedback) {
    return res.status(400).json({
      success: false,
      message: "All fields are required",
    });
  }

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

  try {
    await transporter.sendMail(mailOptions);

    return res.json({
      success: true,
      message: "Feedback sent successfully",
    });
  } catch (error) {
    console.log("EMAIL ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Email sending failed",
    });
  }
});


app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});