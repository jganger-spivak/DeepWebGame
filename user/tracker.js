//Vars declaration
const fs = require("fs");
const readline = require("readline");
var trackedVars = [];
var host = null;

//Setup and function declarations
function createTrackerVar(name, initValue) {
	eval(name + " = " + initValue);
	trackedVars.push(name);
}

function setHost() {
	var hostcode = fs.readFileSync(process.argv[2]);
	eval(hostcode.toString());
	host = new Host();
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
setHost();
function update() {
	host.init(); 
	host.tick();
	for (var i = 0; i < trackedVars.length; i++) {
		console.log(trackedVars[i] + ": " + eval(trackedVars[i]));
	}
	
}

//Actual running of program ;)
setInterval(function(){ update(); host.tick(); }, 1000);