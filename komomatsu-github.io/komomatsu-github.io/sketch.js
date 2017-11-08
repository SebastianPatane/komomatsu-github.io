



function setup () {
	createCanvas(695,695);
	

}

function draw () {
	background(0,4,144);
	drawApple();
	console.log(mouseX,mouseY);
	
}

function drawApple() {
	fill(0,255,0);
	ellipse(width/2,height/2,250,250);
	drawTriangles();
	
	
}

function drawTriangles() {
	//bottom triangle
	fill(0,4,144);
	var trix = 30;
	var triy = 50;
	noStroke();
	triangle(trix+290, triy+423, trix+315, triy+375, trix+340, triy+423);
	//second triange
	noStroke();
	triangle(trix+226, triy+165, trix+315, trix+240, trix+397, triy+165);
	//bite of apple

	
}