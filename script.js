var noteIndex = 45;
var earTrainingIndex = Math.floor((Math.random() * 95));
var playing = false;
var earTrainingHumanRange = false;
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
	["C1", 32.70],
	["C#1", 34.65],
	["D1", 36.71],
	["D#1", 38.89],	
	["E1", 41.20],
	["F1", 43.65],
	["F#1", 46.25],
	["G1", 49.00],
	["G#1", 51.91],	
	["A1", 55.00],	
	["A#1", 58.27],
	["B1", 61.74],
	["C2", 65.41],
	["C#2", 69.30],
	["D2", 73.42],
	["D#2", 77.78],
	["E2", 82.41],
	["F2", 87.31],
	["F#2", 92.50],
	["G2", 98.00],
	["G#2", 103.83],
	["A2", 110.00],
	["B2", 116.54],
	["C3", 130.81],
	["C#3", 138.59],
	["D3", 146.83],
	["D#3", 155.56],
	["E3", 164.81],
	["F3", 174.61],
	["F#3", 185.00],
	["G3", 196.00],
	["G#3", 207.65],
	["A3", 220.00],
	["A#3", 233.08],
	["B3", 246.94],
	["C4", 261.63],
	["C#4", 277.18],
	["D4", 293.66],
	["D#4", 311.13],
	["E4", 329.63],
	["F4", 349.23],
	["F#4", 369.99],
	["G4", 392.00],
	["G#4", 415.30],
	["A4", 440.00],
	["A#4", 466.16],
	["B4", 493.88],
	["C5", 523.25],
	["C#5", 554.37],
	["D5", 587.33],
	["D#5", 622.25],
	["E5", 659.26],
	["F5", 698.46],
	["F#5", 739.99],
	["G5", 783.99],
	["G#5", 830.61],
	["A5", 880.00],
	["A#5", 932.33],
	["B5", 987.77],
	["C6", 1046.50],
	["C#6", 1108.73],
	["D6", 1174.66],
	["D#6", 1244.51],
	["E6", 1318.51],
	["F6", 1396.91],
	["F#6", 1479.98],
	["G6", 1567.98],
	["G#6", 1661.22],
	["A6", 1760.00],
	["A#6", 1864.66],
	["B6", 1975.53],
	["C7", 2093.00],
	["C#7", 2217.46],
	["D7", 2349.32],
	["D#7", 2489.02],
	["E7", 2637.02],
	["F7", 2793.83],
	["F#7", 2959.96],
	["G7", 3135.96],
	["G#7", 3322.44],
	["A7", 3520.00],
	["A#7", 3729.32],
	["B7", 3951.07],
	["C8", 4186.01]
]
	
console.log("Notes length: " +notes.length);
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
	console.log("This was noteIndex: " + noteIndex);
	console.log("This was note: " + notes[noteIndex][0]);
	console.log("This was note frequency: " + notes[noteIndex][1]);
	
	if (playing == false) {
		playing = true;
		ctx.resume();
		o.type = "sine";
		o.frequency.value = notes[noteIndex][1];
		g.gain.value = 1;
		$("#referenceNoteDisplay").text(notes[noteIndex][0]);	
	} else {
		playing = false;
		ctx.suspend();
		$("#referenceNoteDisplay").text("Note turned off");	
	}
	console.log("state of audio context");
	console.log(ctx.state);
	
});	

$("#lowerToggle").click(function() {
	if (noteIndex != 0) {
		noteIndex--;
		console.log("This is noteIndex: " + noteIndex);
		if (playing == true) {
			o.type = "sine";
			o.frequency.value = notes[noteIndex][1];
			g.gain.value = 1;		
			ctx.resume();		
			$("#referenceNoteDisplay").text(notes[noteIndex][0]);	
		}	
	} else {
		console.log("Cannot lower anymore");
	}
});	

$("#raiseToggle").click(function() {
	if (noteIndex != 95) {
		noteIndex++;
		console.log("This is noteIndex: " + noteIndex);
		if (playing == true) {
			o.type = "sine";
			o.frequency.value = notes[noteIndex][1];
			g.gain.value = 1;		
			ctx.resume();		
			$("#referenceNoteDisplay").text(notes[noteIndex][0]);	
		}	
	} else {
		console.log("Cannot increase anymore");
	}	
});	

$("#earTrainingOn").click(function() {
	if (earTrainingHumanRange == true) {
		noteIndex = Math.floor((Math.random() * 95));	
	} else {
		noteIndex = Math.floor((Math.random() * 95));		
	}
	console.log("New generated noteIndex: " + noteIndex);
	if (playing == true) {
		o.type = "sine";
		o.frequency.value = notes[noteIndex][1];
		g.gain.value = 1;		
		ctx.resume();		
	}		
	$("#referenceNoteDisplay").text("What is the note?");	
});	

$("#HumanRangeBoolButton").click(function() {
	if (earTrainingHumanRange == true) {
		earTrainingHumanRange = false;
		$("#HumanRangeBoolButton").html('Turn human range on');
	} else {
		earTrainingHumanRange = true;	
		$("#HumanRangeBoolButton").html('Turn human range off');
	}	
});	

//humanRangeAnswerSelect
$( "#humanRangeAnswerSelect" ).change(function() {
  alert( "Handler for .change() called." );

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