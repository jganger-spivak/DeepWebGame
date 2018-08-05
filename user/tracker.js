var trackedVars = [];
var host = null;

function createTrackerVar(name, initValue) {
	eval(name + " = " + initValue);
	trackedVars.push(name);
}

function setHost(filename) {
	host = new Host()
}

function showVars() {
	host.init(); 
	document.write("<ul>");
	for (var i = 0; i < trackedVars.length; i++) {
		document.write("<li id='var" + i + "'>" + trackedVars[i] +": " + eval(trackedVars[i]) + "</li>");
	}
	document.write("</ul>");
}



function update() {
	for (var i = 0; i < trackedVars.length; i++) {
		document.getElementById("var" + i).innerHTML = trackedVars[i] +": " + eval(trackedVars[i]);
	}
	host.tick();
}
