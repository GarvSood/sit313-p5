require("dotenv").config();

const express = require("express");
const cors = require("cors");
const sgMail = require("@sendgrid/mail");

const app = express();

app.use(cors());
app.use(express.json());

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

app.post("/subscribe", async (req, res) => {
    const email = req.body?.email;

if (typeof email !== "string" || !email.trim()) {
    return res.status(400).json({
        message: "Please provide an email address."
    });
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

if (!emailPattern.test(email.trim())) {
    return res.status(400).json({
        message: "Please provide a valid email address."
    });
}

    console.log("Subscriber email:", email);

    const message = {
        to: email,
        from: process.env.SENDGRID_FROM_EMAIL,
        subject: "Welcome to Garv's Daily Insider!",
        text: "Thank you for subscribing to Garv's Daily Insider.",
        html: "<h1>Welcome!</h1><p>Thank you for subscribing to Garv's Daily Insider.</p>"
    };

    try {
        const response = await sgMail.send(message);

        console.log("Email API Status:", response[0].statusCode);

        res.status(200).json({
            message: "Subscription successful! Welcome email sent."
        });

    } catch (error) {
        console.error("Email sending failed:", error);
        console.error("SendGrid error details:", error.response?.body);

        res.status(500).json({
            message: "Failed to send welcome email."
        });
    }
});

app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});