var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'akash.vit@gmail.com',
    pass: 'jassiofindia'
  }
});

var mailOptions = {
  from: 'akash.vit@gmail.com',
  to: 'akash.vit@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
