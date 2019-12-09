function setup() {
	createCanvas(1000,1000);
}

function draw() {
	background("#003366");
	ellipse (mouseX, mouseY,20,20);
	fill("#2D8BBD");
	stroke("#288C42");
	strokeWeight(5);
	ellipse (500,500,500,500);
	fill("#288C42");
	fill ("#E8FF95")
	stroke("#000000");
	strokeWeight(1);
	textSize(20);
	textFont("Georgia");
	textStyle(ITALIC);
	textAlign(CENTER);
	text("EARTH",500,500);
	textSize(50);
	textFont("Georgia");
	textStyle(ITALIC);
	textAlign(CENTER);
	text("CLIMATE CHANGE",700,800);
}