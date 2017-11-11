var playerChoice = 0;
var rock = 1;
var paper = 2;
var scissors = 3;
var youWon = false;
var youLost = false;
var tied = false;

function setup() {
	createCanvas(750,750);	
	computer = floor(random(1,4));
}

function draw() {
	background(238,122,0);
	checkResult();
	console.log(playerChoice);
	console.log(computer);
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

function keyPressed() {
	if (keyCode==82) {
		playerChoice=1;
	}
	if (keyCode==80) {
		playerChoice=2;
	}
	if (keyCode==83) {
		playerChoice=3;
	}
}