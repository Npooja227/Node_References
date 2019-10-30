const Freemarker = require('freemarker');

const freemarker = new Freemarker();
var data = {name:'pooja'}
freemarker.render('${name}',data,(error,result) => {
if(error) throw error;
else console.log(result);
});

