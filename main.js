var _colors = [
    {"r":0,"g":39,"b":115},
    {"r":181,"g":108,"b":30},
    {"r":0,"g":104,"b":128},
    {"r":178,"g":223,"b":119}];

async function startProgram() { // Main loop - runs until program execution stops
	listenForColorSensor(_colors); // Tells the sensor what colours to cause an execeptuion for	
    setSpeed(30); // Speed is an int between -255 & 255. 30 is a good speed that allows the sensor time to detect various colours
}

async function finish1(color) { // Checks for blue finish colour #1
	if (color.r !== 0 || color.g !== 39 || color.b !== 115) return;

	stopRoll();
	await Sound.Effects.Applause.play(true);
}
async function finish2(color) { // Checks for blue finish colour #2
	if (color.r !== 0 || color.g !== 104 || color.b !== 128) return;

	stopRoll();
	await Sound.Effects.Applause.play(true);
}

async function rightColour(color) {  // Checks for right turn colour
	if (color.r !== 178 || color.g !== 223 || color.b !== 119) return;

	await spin(90, 1);
}

async function leftColour(color) { // Checks for left turn colour
	if (color.r !== 181 || color.g !== 108 || color.b !== 30) return;

	await spin(-90, 1);
}


// Register all events
registerEvent(EventType.onColor, finish1);
registerEvent(EventType.onColor, finish2);
registerEvent(EventType.onColor, rightColour);
registerEvent(EventType.onColor, leftColour);
