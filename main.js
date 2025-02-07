var _colors = [
    {"r":203,"g":128,"b":62}, // Right
    {"r":0,"g":151,"b":176}, // Left
    {"r":207,"g":255,"b":200}]; // Stop

async function startProgram() { // Main loop - runs until program execution stops
	listenForColorSensor(_colors); // Tells the sensor what colours to cause an execeptuion for	
    setSpeed(40); // Speed is an int between -255 & 255. 30 is a good speed that allows the sensor time to detect various colours
}

async function finish1(color) { // Stop check
	if (color.r !== _colors[2].r || color.g !== _colors[2].g || color.b !== _colors[2].b) return;

	stopRoll();
	await Sound.Effects.Applause.play(true);
}

async function rightColour(color) {  // Checks for right turn colour
	if (color.r !== _colors[0].r || color.g !== _colors[0].g || color.b !== _colors[0].b) return;

	await spin(90, 0.3);
}

async function leftColour(color) { // Checks for left turn colour
	if (color.r !== _colors[1].r || color.g !== _colors[1].g || color.b !== _colors[1].b) return;

	await spin(-90, 0.3);
}


// Register all events
registerEvent(EventType.onColor, finish1);
registerEvent(EventType.onColor, rightColour);
registerEvent(EventType.onColor, leftColour);
