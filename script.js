
window.AudioContext = window.AudioContext || window.webkitAudioContext;
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