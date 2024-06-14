const nodeMailer = require("nodemailer");

const transport = nodeMailer.createTransport(
  {
    service: "gmail",
    auth: {
      user: process.env.AUTHOR_MAIL,
      pass: process.env.AUTHOR_MAIL_PASSWORD,
    },
  },
  (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  }
);

const generateHtml = (name, msg, emailID) => {
  const emailBody = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>User Communicated with the Portfolio!</title>
  <style>
    body {
      font-family: 'Arial', sans-serif;
      background-color: #f5f5f5;
      margin: 0;
      padding: 0;
    }

    .container {
      max-width: 600px;
      margin: 20px auto;
      background-color: #fff;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    }

    img {
      max-width: 100%;
      height: auto;
    }

    h1 {
      color: #333;
      text-align: center;
    }

    p {
      color: #555;
      margin-bottom: 15px;
    }

    a {
      color: #007bff;
      text-decoration: none;
    }

    a:hover {
      text-decoration: underline;
    }

    .footer {
      margin-top: 20px;
      text-align: start;
      color: #777;
    }

    .image{
      width: 100px;
      object-fit: contain;
      height: 100px;
    }

    .header{
      text-align: start;
      color: #333;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1 class="header">Password Reset Request</h1>
    <p>Hello ${name},</p>
    <p>Someone communicated to you from your portfolio Email:${emailID}.</p>
    <p>${msg}</p>
  </div>
</body>
</html>
`;
  return emailBody;
};

const mail = async (name, msg, emailID) => {
  try {
    const mailOptions = {
      from: "PortFolio <portfolio.gmail.com>",
      to: "happy.patel.cis@gmail.com",
      subject: "reset your password",
      html: generateHtml(name, msg, emailID),
    };
    await transport.sendMail(mailOptions);
  } catch (e) {
    console.log(e);
  }
};

module.exports = mail;
