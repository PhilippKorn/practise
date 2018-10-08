let x = 0;

function setup() {
	createCanvas(windowWidth, windowHeight);
	background(100,66,100);
}

function draw() {
	fill(0,0,255);
	ellipse(x,windowHeight/2,50,50);
	x = x + 4;
}