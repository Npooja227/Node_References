const accountSid = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const authToken = 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX';
const client = require('twilio')(accountSid, authToken);

client.messages.create({
  from: 'whatsapp:+XXXXXXXXXXX',
  body: 'Node.js',
  to: 'whatsapp:+XXXXXXXXXXX'
}).then(message => console.log(message.sid));

const client1 = require('twilio')(accountSid, authToken);

client1.messages.create({
  from: '+XXXXXXXXXXX',
  body: 'Node.js',
  to: '+XXXXXXXXXXX'
}).then(message => console.log(message.sid));
