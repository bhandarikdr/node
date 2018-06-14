var r1 = require('readline');
var prompts = r1.createInterface(process.stdin,process.stdout);
prompts.question("No of years:", function(experience){

var msg = "";

if(experience < 5)
	msg = "You are too young.";
else
	msg = "Excellent!";

console.log(msg);
process.exit();
});