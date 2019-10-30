const jwt = require('jsonwebtoken');

const payload = { first_name: 'pooja', last_name: 'naraharisetty'};
payload.user_name= payload.first_name+'.'+payload.last_name
const options = { expiresIn: '1d'};
const secret = 'XXXXXXXXXXXXXXXXXXXXXXXXX';
const token = jwt.sign(payload, secret, options);
console.log('token : ',token);
console.log("typeof token",typeof token);

var result = jwt.verify(token, secret, options);
console.log('payload :',JSON.stringify(result));
