//Javascript
//Variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/4; //define x and y starting point of boat
var y = canvas.height/10;

var rightPressed = false; //left or right gets pressed?
var leftPressed = false;
var rightLast = true;
var speed = 5;

//load images
var boat = document.createElement('img'); // DOM HTMLImageElement
boat.src = 'images/boat.png';
boat.alt = 'boat';

var boatLeft = document.createElement('img'); // DOM HTMLImageElement
boatLeft.src = 'images/boat_left.png';
boatLeft.alt = 'boatLeft';

document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

//is the key held down or not?
function keyDownHandler(e) {
	if(e.keyCode == 39) {  //right arrow key
			rightPressed = true;
	}
	else if(e.keyCode == 37) {  //left arrow key
			leftPressed = true;
	}
}
function keyUpHandler(e) {
	if(e.keyCode == 39) {  //right key
			rightPressed = false;
	}
	else if(e.keyCode == 37) {  //left key
			leftPressed = false;
	}
}

//drawBoat functions
function drawBoat() {
	ctx.drawImage(boat,x,y);
}
function drawBoatLeft() {
	ctx.drawImage(boatLeft,x,y);
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
//left or right last pressed?
	if(rightLast == true){
		drawBoat();
	}
	else{ //left was pressed last
		ctx.clearRect(x, y, boat.width, boat.height);
		drawBoatLeft();
	}
//Move the boat left or right and wrap to other side when off screen
	if(rightPressed && x < canvas.width){
		console.log("Right Was Pressed!");
		rightLast = true;
			x = x + speed;
	}
	else if (rightPressed && x >= (canvas.width)){
		x = 0-boat.width
	}
	if (leftPressed && x > (0-boat.width)){
		console.log("Left Was Pressed!");
		rightLast = false;
		ctx.clearRect(x, y, boat.width, boat.height);
		drawBoatLeft();
		x = x - speed;
	}
	else if (leftPressed && x <= (0-boat.width)){
		x = canvas.width;
		rightLast = false;
	}

requestAnimationFrame(draw); //sets the interval frame rate to browser automated value
}

draw()
