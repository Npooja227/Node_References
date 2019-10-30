const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX');
const msg = {
  to: 'pooja.naraharisetty@500apps.com',
  from: 'test@example.com',
  subject: 'Sending with SendGrid is Fun',
  text: 'and easy to do anywhere, even with Node.js',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail.send(msg);
