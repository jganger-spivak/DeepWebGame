//Vars declaration
const fs = require("fs");
const readline = require("readline");
var trackedVars = [];
var host = null;

//Setup and function declarations
function createTrackerVar(name, initValue) {
	trackedVars[name] = initValue;
}

function setHost() {
	const hostcode = fs.readFileSync(process.argv[2]);
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
	for (let $var in trackedVars) {
		console.log($var + ": " + trackedVars[$var]);
	}
	
}

//Actual running of program ;)
setInterval(() => { update(); host.tick(); }, 1000);
