var mysql = require('mysql');

var con = mysql.createConnection({
connectionLimit : 10,
host: 'localhost',
user: 'root',
password: 'XXXXXXX'
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var sql = "INSERT INTO db1.user(name, email, password) VALUES ('pooja','pooja@yopmail.com','pooja')";  
con.query(sql, function (err, result) {  
if (err) throw err;  
console.log("1 record inserted");  
});  
