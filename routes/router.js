const router = require("express").Router();
const nodemailer = require("nodemailer");

router.post("/api/contact", (req, res) => {
  const { name, email, message } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_ADDRESS,
        pass: process.env.PASSWORD,
      },
    });
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: email,
      subject: `Message from ${name}`,
      text: message,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        res.status(500).json({
          message: "Something is Broke",
        });
      } else {
        res.status(201).json({
          status: 201,
          message: "Email sent",
        });
      }
    });
  } catch (error) {
    res.status(200).json({ status: 401, error });
  }
});

module.exports = router;
