

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	background(100,66,100);
	fill(0,0,255);
	ellipse(windowWidth/2,windowHeight/2,50,50);
	fill(255,255,0);
	rect(windowWidth / 2 + 4, windowHeight / 2 * 4, 60,60);
}