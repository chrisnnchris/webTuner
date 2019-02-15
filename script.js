var noteIndex = 45;
var earTrainingIndex = Math.floor((Math.random() * 95));
var playing = false;
var earTrainingHumanRange = false;
var middleDeviation = 0;
var bottomNoteIndex = 0;
var topNoteIndex = 0;
window.AudioContext = window.AudioContext || window.webkitAudioContext;
var slider = document.getElementById("myRange");
// Test if notes can be sent if put below tunerToggle
// note name, note frequency, , learningNotch
var notes = [
	["C0", 16.35, 1, 0],
	["C#0", 17.23, 1, 0],
	["D0", 18.35, 1, 0],
	["D#0", 19.45, 1, 0],
	["E0", 20.60, 1, 0],
	["F0", 21.83, 1, 0],
	["F#0", 23.12, 1, 0],
	["G0", 24.50, 1, 0],
	["G#0", 25.96, 1, 0],
	["A0", 27.50, 1, 0],
	["A#0", 29.14, 1, 0],
	["B0", 30.87, 1, 0],
	["C1", 32.70, 1, 0],
	["C#1", 34.65, 1, 0],
	["D1", 36.71, 1, 0],
	["D#1", 38.89, 1, 0],	
	["E1", 41.20, 1, 0],
	["F1", 43.65, 1, 0],
	["F#1", 46.25, 1, 0],
	["G1", 49.00, 1, 0],
	["G#1", 51.91, 1, 0],	
	["A1", 55.00, 1, 0],	
	["A#1", 58.27, 1, 0],
	["B1", 61.74, 1, 0],
	["C2", 65.41, 1, 0],
	["C#2", 69.30, 1, 0],
	["D2", 73.42, 1, 0],
	["D#2", 77.78, 1, 0],
	["E2", 82.41, 1, 0],
	["F2", 87.31, 1, 0],
	["F#2", 92.50, 1, 0],
	["G2", 98.00, 1, 0],
	["G#2", 103.83, 1, 0],
	["A2", 110.00, 1, 0],
	["A#2", 116.54, 1, 0],
	["B2", 123.47, 1, 0],	
	["C3", 130.81, 1, 0],
	["C#3", 138.59, 1, 0],
	["D3", 146.83, 1, 0],
	["D#3", 155.56, 1, 0],
	["E3", 164.81, 1, 0],
	["F3", 174.61, 1, 0],
	["F#3", 185.00, 1, 0],
	["G3", 196.00, 1, 0],
	["G#3", 207.65, 1, 0],
	["A3", 220.00, 1, 0],
	["A#3", 233.08, 1, 0],
	["B3", 246.94, 1, 0],
	["C4", 261.63, 1, 0],
	["C#4", 277.18, 1, 0],
	["D4", 293.66, 1, 0],
	["D#4", 311.13, 1, 0],
	["E4", 329.63, 1, 0],
	["F4", 349.23, 1, 0],
	["F#4", 369.99, 1, 0],
	["G4", 392.00, 1, 0],
	["G#4", 415.30, 1, 0],
	["A4", 440.00, 1, 0],
	["A#4", 466.16, 1, 0],
	["B4", 493.88, 1, 0],
	["C5", 523.25, 1, 0],
	["C#5", 554.37, 1, 0],
	["D5", 587.33, 1, 0],
	["D#5", 622.25, 1, 0],
	["E5", 659.26, 1, 0],
	["F5", 698.46, 1, 0],
	["F#5", 739.99, 1, 0],
	["G5", 783.99, 1, 0],
	["G#5", 830.61, 1, 0],
	["A5", 880.00, 1, 0],
	["A#5", 932.33, 1, 0],
	["B5", 987.77, 1, 0],
	["C6", 1046.50, 1, 0],
	["C#6", 1108.73, 1, 0],
	["D6", 1174.66, 1, 0],
	["D#6", 1244.51, 1, 0],
	["E6", 1318.51, 1, 0],
	["F6", 1396.91, 1, 0],
	["F#6", 1479.98, 1, 0],
	["G6", 1567.98, 1, 0],
	["G#6", 1661.22, 1, 0],
	["A6", 1760.00, 1, 0],
	["A#6", 1864.66, 1, 0],
	["B6", 1975.53, 1, 0],
	["C7", 2093.00, 1, 0],
	["C#7", 2217.46, 1, 0],
	["D7", 2349.32, 1, 0],
	["D#7", 2489.02, 1, 0],
	["E7", 2637.02, 1, 0],
	["F7", 2793.83, 1, 0],
	["F#7", 2959.96, 1, 0],
	["G7", 3135.96, 1, 0],
	["G#7", 3322.44, 1, 0],
	["A7", 3520.00, 1, 0],
	["A#7", 3729.32, 1, 0],
	["B7", 3951.07, 1, 0],
	["C8", 4186.01, 1, 0]
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
	if (noteIndex != 96) {
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
	console.log("This was note: " + notes[noteIndex][0]);	
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

$("#middleDeviationDown").click(function() {
	console.log("middleDeviationDown Clicked");
	if (middleDeviation > 0) {
		middleDeviation--;
	} else {
		console.log("Cannot decrease middleDeviation");
	}
	console.log("This is middleDeviation: " + middleDeviation);
	//console.log(Math.floor((Math.random() *  (12 * middleDeviation) /* + 47 */)));
	// first octave. C4:48 - B4:59
	// second octave. C3:36 - B5:71
	// third octave. C2:24 - B6:83
	// third octave. C1:12 - B7: 75
	// C0: 0
	// desired output. 0 - 48. 1 - 36
	bottomNoteIndex = 48 - 12 * middleDeviation;
	topNoteIndex = 48 + 12 * middleDeviation;
	console.log("bottomNumber: " + bottomNumber);
	console.log("topNumber: " + topNumber);
});	

$("#middleDeviationUp").click(function() {
	console.log("middleDeviationUp Clicked");
	//console.log("middleDeviation: " + middleDeviation);
	//middleDeviation++;
	//console.log("This was center note: " + notes[47][0]);			
	//console.log(Math.floor((Math.random() *  (12 * middleDeviation) /* + 47 */)));
	if (middleDeviation < 4) {
		middleDeviation++;
	} else {
		console.log("Cannot increase middleDeviation");
	}
	console.log("This is middleDeviation: " + middleDeviation);
	bottomNoteIndex = 48 - 12 * middleDeviation;
	topNoteIndex = 48 + 12 * middleDeviation;
	console.log("bottomNumber: " + bottomNumber);
	console.log("topNumber: " + topNumber);

});	

$( "#humanRangeAnswerSelect" ).change(function() {
	//alert( "Handler for .change() called." );
	//console.log($("#humanRangeAnswerSelect").val());
	if ($("#humanRangeAnswerSelect").val() == notes[noteIndex][0]) {
		console.log("Right guess");
		noteIndex = Math.floor((Math.random() * 95));
		console.log("New generated noteIndex: " + noteIndex);
		console.log("This was note: " + notes[noteIndex][0]);			
	}	else {
		console.log("Wrong guess");
	}	
	$("#humanRangeAnswerSelect").val("");
});

slider.oninput = function() {
  console.log(this.value);
}