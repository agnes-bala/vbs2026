// src/lib/emailConfig.js
import nodemailer from 'nodemailer';

// Use environment variables (create a .env.local file)
const transporter = nodemailer.createTransport({
  service: 'gmail', // or 'hotmail', 'yahoo', or custom SMTP
  auth: {
    user: process.env.EMAIL_USER, // your email
    pass: process.env.EMAIL_PASS, // your app password (not regular password)
  },
});

export async function sendOTPEmail(toEmail, otp) {
  const mailOptions = {
    from: `"VBS 2026" <${process.env.EMAIL_USER}>`,
    to: toEmail,
    subject: 'Your OTP for VBS 2026 Login',
    text: `Your OTP is: ${otp}. It is valid for 5 minutes.`,
    html: `<p>Your OTP is: <strong>${otp}</strong></p><p>Valid for 5 minutes.</p>`,
  };
  await transporter.sendMail(mailOptions);
}