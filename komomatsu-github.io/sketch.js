var katana = false;
var katanaLeft = false;
var katanaMiddle = false;
var bladex = 85;
var bladey = 85;
var bladeshadowx = 75;
var bladeshadowy = 75;
var playerChoice = 0;
var rock = 1;
var paper = 2;
var scissors = 3;
var youWon = false;
var youLost = false;
var tied = false;

function setup () {
	createCanvas(695,695);
	computer = floor(random(1,4));

}

function draw () {
	background(0,4,144);
	drawApple();
	drawBlades();
	checkResult();
	console.log(mouseX,mouseY);
	console.log(playerChoice);
	console.log(computer);
	fill(0);
	textSize(28);
	text("Rock = 1 Paper = 2 Scissors = 3", 206,100);
}


function drawApple() {
	fill(0,255,0);
	noStroke();
	ellipse(width/2,height/2,250,250);
	drawTriangles();
	textSize(40);
	fill(0);
	text("R", 248,335);
	textSize(40);
	fill(0);
	text("P", 330,335);
	textSize(40);
	fill(0);
	text("S", 400,335);
	
}

function youWin() {
	textSize(32);
	fill(0);
	text("You Win!", 50,50); 
}

function youLose() {
	textSize(32);
	fill(0);
	text("You Lose!",50,50);
}

function tie() {
	textSize(32);
	fill(0);
	text("Draw!",50,50);
}


function drawTriangles() {
	//bottom triangle
	fill(0,4,144);
	var trix = 30;
	var triy = 50;
	noStroke();
	triangle(trix+250, triy+423, trix+305, triy+385, trix+400, triy+423);
	//second triange
	noStroke();
	triangle(trix+226, triy+165, trix+305, trix+225, trix+397, triy+165);
	//leaf
	fill(0,255,0);
	ellipse(345,218,30,50);
}

function drawRightSlice() {
	//white of the blade 1
	fill(255,255,255);
	ellipse(bladex+275,bladey+260,230,230);
	fill(0,255,0);
	ellipse(bladeshadowx+260,bladeshadowy+270,185,185);
	textSize(40);
	fill(0);
	text("S", 400,335);

}

function drawLeftSlice() {
	fill(255,255,255);
	ellipse(bladex+235,bladey+260,230,230)
	fill(0,255,0);
	ellipse(bladeshadowx+270,bladeshadowy+270,185,185);
	textSize(40);
	fill(0);
	text("R", 248,335);
}

function drawMiddle() {
	fill(255,255,255);
	triangle(291,227,391,179,334,460);
	fill(0);
	textSize(40);
	text("P", 330,335);
	
}

function drawBlades() {
	if (keyCode==39) {
		katana = true;
	} if (katana==true) {
		drawRightSlice();
		playerChoice=3;
		fill(0);
		textSize(32);
		text("Computer:" + computer,500,50);
	} if (keyCode==37) {
		katanaLeft=true;
	} if (katanaLeft==true) {
		drawLeftSlice();
		fill(0);
		textSize(32);
		text("Computer:" + computer,500,50);
		playerChoice=1;
	} if (keyCode==40) {
		katanaMiddle=true;
	} if (katanaMiddle==true) {
		drawMiddle();
		playerChoice=2;
		fill(0);
		textSize(32);
		text("Computer:" + computer,500,50);
	}
}

function checkResult() {
	if ((playerChoice==1 && computer==3) || (playerChoice==2 && computer==1) || (playerChoice==3 && computer==2)) {
		youWon=true;
	} 

	if (youWon==true) {
		youWin();
	} 

	if ((playerChoice==1 && computer==1) || (playerChoice==2 && computer==2) || (playerChoice==3 && computer==3)) {
		tied=true;
	}

	if (tied==true) {
		tie();
	}

	if ((playerChoice==3 && computer==1) || (playerChoice==1 && computer==2) || (playerChoice==2 && computer==3)) {
		youLost=true;
	}

	if (youLost==true) {
		youLose();
	}
}
