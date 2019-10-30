const cron = require("node-cron");
const express = require("express");

app = express();

cron.schedule("* * * * *", function() {
   var d = new Date();
   console.log("running a task every minute ",d);
});

app.listen(8080);
