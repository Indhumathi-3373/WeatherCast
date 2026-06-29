const { Resend } = require("resend");
const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

console.log("EMAIL:", process.env.EMAIL);

if (!process.env.EMAIL) {
  console.error("EMAIL is missing!");
}

if (!process.env.RESEND_API_KEY) {
  console.error("RESEND_API_KEY is missing!");
}
// resend api for sending email
 
const resend = new Resend(process.env.RESEND_API_KEY);

app.post("/", async (req, res) => {
  try {
    const { name, email, feedback } = req.body || {};
    
    console.log("Received:", { name, email, feedback });

    if (!name || !email || !feedback) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const sendingmail = await resend.emails.send({
      from: "WeatherCast <onboarding@resend.dev>",
      to: process.env.EMAIL,
      replyTo: email,
      subject: `New feedback received from ${name}`,
      html: `
    <h2>Feedback Form</h2>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Feedback:</strong> ${feedback}</p>
  `,
    });

    console.log(sendingmail);

    res.status(200).json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "failed to send mail",
    });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
