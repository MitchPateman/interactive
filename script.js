//Javascript

//Variables
var canvas = document.getElementById("myCanvas");
var elementLeft = canvas.offsetLeft; //offset used to find position of arrows on canvas
var elementTop = canvas.offsetTop;
var ctx = canvas.getContext("2d");
var elements = [];

var x = canvas.width/3; //define x and y starting point of boat
var y = canvas.height/10.2;
var lineX = x + 389; //Line is relative to where boat is
var lineLeftX
var lineY = y;
var lineLeftY = y;

var rightPressed = false; //left or right gets pressed?
var leftPressed = false;
var downPressed = false; //down or up gets pressed?
var upPressed = false;
var rightLast = true;
var speed = 4.5;
var widthHeight = 128; //widthHeight for arrow keys

//Load Images
var boat = document.createElement('img'); // DOM HTMLImageElement
boat.src = 'images/boat.png';
boat.alt = 'boat';

var boatLeft = document.createElement('img'); // DOM HTMLImageElement
boatLeft.src = 'images/boat_left.png';
boatLeft.alt = 'boatLeft';

var fishingLine = document.createElement('img');
fishingLine.src = 'images/fishing_line.png';
fishingLine.alt = 'fishingLine';

var fishingLineLeft = document.createElement('img');
fishingLineLeft.src = 'images/fishing_line_left.png';
fishingLineLeft.alt = 'fishingLineLeft';

var leftArrow = document.createElement('img'); // DOM HTMLImageElement
leftArrow.src = 'images/left_arrow.png';
leftArrow.alt = 'leftArrow';

var rightArrow = document.createElement('img'); // DOM HTMLImageElement
rightArrow.src = 'images/right_arrow.png';
rightArrow.alt = 'rightArrow';

var upArrow = document.createElement('img'); // DOM HTMLImageElement
upArrow.src = 'images/up_arrow.png';
upArrow.alt = 'upArrow';

var downArrow = document.createElement('img'); // DOM HTMLImageElement
downArrow.src = 'images/down_arrow.png';
downArrow.alt = 'downArrow';

//Event Listener for Key Up and Down
document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);
// canvas.addEventListener('click', function() { }, false);

// Add event listener for `click` events.
// elem.addEventListener('click', function(e) {
// 		var x = e.pageX - elemLeft,
// 				y = e.pageY - elemTop;
//
// 		// Collision detection between clicked offset and element.
// 		elements.forEach(function(element) {
// 				if (y > element.top && y < element.top + element.height
// 						&& x > element.left && x < element.left + element.width) {
// 						alert('clicked an element');
// 				}
// 		});
//
// }, false);

//Event Handler = is the key held down or not?
function keyDownHandler(e) {
	if(e.keyCode == 39) {  //right arrow key
			rightPressed = true;
	}
	else if(e.keyCode == 37) {  //left arrow key
			leftPressed = true;
	}
	else if(e.keyCode == 40) {  //down arrow key
			downPressed = true;
	}
	else if(e.keyCode == 38) {  //up arrow key
			upPressed = true;
	}
}
function keyUpHandler(e) {
	if(e.keyCode == 39) {  //right key
			rightPressed = false;
	}
	else if(e.keyCode == 37) {  //left key
			leftPressed = false;
	}
	else if(e.keyCode == 40) {  //down arrow key
			downPressed = false;
	}
	else if(e.keyCode == 38) {  //up arrow key
			upPressed = false;
	}
}

//DRAW IMAGES
//drawBoat functions
function drawBoat() {
	ctx.drawImage(boat,x,y);
}
function drawBoatLeft() {
	ctx.drawImage(boatLeft,x,y);
}

//drawLine functions (x, y are relative to boat)
function drawLine() {
	ctx.drawImage(fishingLine,lineX,lineY);
}
function drawLineLeft() {
	ctx.drawImage(fishingLineLeft,lineLeftX,lineLeftY);
}

//drawArrow functions
function drawLeftArrow() {
	ctx.drawImage(leftArrow,10,625,widthHeight,widthHeight);
// 	elements.push({
// 		color: transparent;
// 		width: 150;
// 		height: 150;
// 		top: 475;
// 		left: 10;
// 	});
//
// 	// Render elements.
// 	elements.forEach(function(element) {
// 			context.fillStyle = element.color;
// 			context.fillRect(element.left, element.top, element.width, element.height);
// 	});​
}
function drawRightArrow() {
	ctx.drawImage(rightArrow,110,625,widthHeight,widthHeight);
}
function drawUpArrow() {
	ctx.drawImage(upArrow,1300,525,widthHeight,widthHeight);
}
function drawDownArrow() {
	ctx.drawImage(downArrow,1300,625,widthHeight,widthHeight);
}


//DRAW FUNCTION = IFs
function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawLeftArrow();
	drawRightArrow();
	drawUpArrow();
	drawDownArrow();
//left or right last pressed?
	if(rightLast == true){
		drawBoat();
		drawLine();
	}
	else{ //left was pressed last
		ctx.clearRect(x, y, boat.width, boat.height);
		drawBoatLeft();
		drawLineLeft();
	}
//Move the boat left or right and wrap to other side when off screen
	if(rightPressed && x < canvas.width && lineY < 90){
		rightLast = true;
		lineX = x + 389.5; //stick to the boat
		x = x + speed;
		lineX = lineX + speed;
	}
	else if (rightPressed && x >= (canvas.width) && lineY < 90){
		x = 0-boat.width;
		lineX = 0-boat.width;
	}
	if (leftPressed && x > (0-boat.width) && lineY < 90){
		rightLast = false;
		lineLeftX = x + 45.5; //stick to the boat
		ctx.clearRect(x, y, boat.width, boat.height);
		drawBoatLeft();
		drawLineLeft();
		x = x - speed;
		lineLeftX = lineLeftX - speed;
	}
	else if (leftPressed && x <= (0-boat.width) && lineY < 90){
		x = canvas.width;
		lineX = canvas.width;
		rightLast = false;
	}
	// When "down" or "up" bring the line down or up and stop it at ceiling and floor
	if (downPressed && rightLast == true && lineY < 303){
		console.log("pressed down");
		lineY = lineY + speed;
		lineX = lineX + 0.2975;
		lineLeftY = lineY;
	}
	else if (upPressed && rightLast == true && lineY > 74){
		console.log("pressed up");
		lineY = lineY - speed;
		lineX = lineX - 0.2975;
		lineLeftY = lineY;
	}
	if (downPressed && rightLast == false && lineY < 303){
		console.log("pressed down Left was last");
		lineLeftY= lineLeftY + speed;
		lineLeftX = lineLeftX - 0.32;
		lineY = lineLeftY;
	}
	else if (upPressed && rightLast == false && lineY > 74){
		console.log("pressed up left was last");
		lineLeftY = lineLeftY - speed;
		lineLeftX = lineLeftX + 0.32;
		lineY = lineLeftY;
	}

requestAnimationFrame(draw); //sets the interval frame rate to browser automated value
}

draw();
