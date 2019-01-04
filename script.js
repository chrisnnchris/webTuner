
window.AudioContext = window.AudioContext || window.webkitAudioContext;
// Test if notes can be sent if put below tunerToggle
var notes = [
	["C0", 16.35],
	["C#0", 17.23],
	["D0", 18.35],
	["D#0", 19.45],
	["E0", 20.60],
	["F0", 21.83],
	["F#0", 23.12],
	["G0", 24.50],
	["G#0", 25.96],
	["A0", 27.50],
	["A#0", 29.14],
	["B0", 30.87],
	
]
	

var ctx = new AudioContext();

var o = ctx.createOscillator();
o.type = "sine";
o.start(0);

var g = ctx.createGain();
g.gain.value = 0;

o.connect(g);
g.connect(ctx.destination);

$("#tunerToggle").click(function() {
	//o.resume();
	console.log("Tuner was toggled");
	ctx.resume();
	o.type = "sine";
	o.frequency.value = 392.00;
	g.gain.value = 1;
	console.log("state of audio context");
	console.log(ctx.state);
	
});	

/*	
// First checking if webaudio supported, set to audiocontext if valid
var audiocontext;
window.AudioContext = window.AudioContext || window.webkitAudioContext;
if (window.AudioContext) {
	console.log("web audio supported");

} else {
	console.log("web audio not supported");
}	
audiocontext = new AudioContext();
var o = audiocontext.createOscillator();
o.type = "sine";
o.start(0);

var g = audiocontext.createGain();
g.gain.value = 0;

o.connect(g);
g.connect(audiocontext.destination);	
	
$( "#tunerToggle" ).click(function() {
	o.resume();
	console.log("Tuner was toggled");

});	
	//o.start(0);
	//o.connect(audiocontext.destination);
*/