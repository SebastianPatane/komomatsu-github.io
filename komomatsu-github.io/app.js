var playerChoice = 0;
var compChoice = [1,3];
var rock = 1;
var paper = 2;
var scissors = 3;
var youWon = false;
var youLost = false;
var tied = false;

function setup() {
	createCanvas(750,750);
	

	
}

function draw() {
/*this is the random method I've recently implemented. I have the program setup
to produce the text "YouWin" when the player presses the r key as soon as the computer throws out 
the number three, and when the player presses the p key if the computer throws out the number 1. However, 
the application breaks when the intereaction between player and computer takes place,
saying that "compSelection"––which references the randomization of "compChoice", which is the
array for the computer's choices––is not defined, even though
it is clearly defined in the draw() function. It may need to be a global variable, however I am unsure about 
how I would reference this in the draw() function.*/
	var compSelection = floor(random(compChoice.length));
	background(238,122,0);
	drawRock();
	drawPaper();
	drawScissors();
	checkResult();
	console.log(compChoice[compSelection]);
	console.log(playerChoice);

	//console.log(checkResult);
}

function drawRock() {

}

function drawPaper() {

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

function drawScissors() {

}

function checkResult() {
	if (playerChoice==1 && compSelection==3) { /*|| (playerChoice==scissors && compChoice==paper))*/ 
		youWon=true;
	} if (playerChoice==2 && compChoice==1) {
		youWon=true;
	}

	if (youWon==true) {
		youWin();
	} /*if ((playerChoice==rock && compSelection==rock) || (playerChoice==paper && compSelection==paper) || (playerChoice==scissors && compSelection==scissors)) {
		tie=true;
	} if (tie==true) {
		tie();
	} if ((playerChoice==rock && compSelection==paper) || (playerChoice==paper && compSelection==scissors) || (playerChoice==scissors && compSelection==rock)) {
		youLose();
	}*/
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