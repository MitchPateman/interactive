//Javascript

//canvas Variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Boat Variables
var x = canvas.width/3; //define x and y starting point of boat
var y = canvas.height/10.2;
var lineX = x + 389; //Line is relative to where boat is (starting position)
var lineLeftX //This gets value in the draw() function
var lineY = y;
var lineLeftY = y;
//Event Variables
var rightPressed = false; //left or right gets pressed?
var leftPressed = false;
var downPressed = false; //down or up gets pressed?
var upPressed = false;
var rightLast = true;//The boat starts facing right
var speed = 4.5;
//Positioning the arrows on canvas
var leftArrowX = 10;
var rightArrowX = 110;
var upDownArrowX = 1300;
var leftRightArrowY = 625;
var upArrowY = 525;
var downArrowY = 625;
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
canvas.addEventListener("mousedown", mouseDownHandler, false);
canvas.addEventListener("mouseup", mouseUpHandler, false);
canvas.addEventListener("touchstart", touchDownHandler, false);
canvas.addEventListener("touchend", touchUpHandler, false);


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
};
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
};
//On Click Event, console log the x + y coordinates of click
function mouseDownHandler(event) {
	var rect = canvas.getBoundingClientRect();
	clickX = (event.pageX - rect.left) / (rect.right - rect.left) * canvas.width;
	clickY = (event.pageY - rect.top) / (rect.bottom - rect.top) * canvas.height;
	console.log("X: " + clickX + " Y: " + clickY );
			if (clickX > leftArrowX && clickX < (leftArrowX+widthHeight) && clickY > (leftRightArrowY)){
				leftPressed = true;
			}
			else if (clickX > rightArrowX && clickX < (rightArrowX+widthHeight) && clickY > (leftRightArrowY)){
				rightPressed = true;
			}
			else if (clickX > upDownArrowX && clickY > upArrowY && clickY < (upArrowY + widthHeight)) {
				upPressed = true;
			}
			else if (clickX > upDownArrowX && clickY > downArrowY) {
				downPressed = true;
			};
};

function mouseUpHandler(event) {
	clickX = event.pageX - canvas.offsetLeft;
	clickY = event.pageY - canvas.offsetTop;
	//console.log("X: " + clickX + " Y: " + clickY );
			if (clickX > 0 && clickX < canvas.width){
				leftPressed = false;
				rightPressed = false;
				upPressed = false;
				downPressed = false;
			};
};

function touchDownHandler(event) {
	event.preventDefault();
	var rect = canvas.getBoundingClientRect();
	touchX = (event.pageX - rect.left) / (rect.right - rect.left) * canvas.width;
	touchY = (event.pageY - rect.top) / (rect.bottom - rect.top) * canvas.height;
	//console.log("X: " + touchX + " Y: " + touchY );
			if (touchX > leftArrowX && touchX < (leftArrowX+widthHeight) && touchY > (leftRightArrowY)){
				leftPressed = true;
			}
			else if (touchX > rightArrowX && touchX < (rightArrowX+widthHeight) && touchY > (leftRightArrowY)){
				rightPressed = true;
			}
			else if (touchX > upDownArrowX && touchY > upArrowY && touchY < (upArrowY + widthHeight)) {
				upPressed = true;
			}
			else if (touchX > upDownArrowX && touchY > downArrowY) {
				downPressed = true;
			};
};

function touchUpHandler(event) {
	event.preventDefault();

	touchX = event.pageX - canvas.offsetLeft;
	touchY = event.pageY - canvas.offsetTop;
	//console.log("X: " + clickX + " Y: " + clickY );
			if (touchX > 0 && clickX < canvas.width){
				leftPressed = false;
				rightPressed = false;
				upPressed = false;
				downPressed = false;
			};
};


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
	ctx.drawImage(leftArrow,leftArrowX,leftRightArrowY,widthHeight,widthHeight);
}
function drawRightArrow() {
	ctx.drawImage(rightArrow,rightArrowX,leftRightArrowY,widthHeight,widthHeight);
}
function drawUpArrow() {
	ctx.drawImage(upArrow,upDownArrowX,upArrowY,widthHeight,widthHeight);
}
function drawDownArrow() {
	ctx.drawImage(downArrow,upDownArrowX,downArrowY,widthHeight,widthHeight);
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
		lineY = lineY + speed;
		lineX = lineX + 0.2975;
		lineLeftY = lineY;
	}
	else if (upPressed && rightLast == true && lineY > 74){
		lineY = lineY - speed;
		lineX = lineX - 0.2975;
		lineLeftY = lineY;
	}
	if (downPressed && rightLast == false && lineY < 303){
		lineLeftY= lineLeftY + speed;
		lineLeftX = lineLeftX - 0.32;
		lineY = lineLeftY;
	}
	else if (upPressed && rightLast == false && lineY > 74){
		lineLeftY = lineLeftY - speed;
		lineLeftX = lineLeftX + 0.32;
		lineY = lineLeftY;
	}

requestAnimationFrame(draw); //sets the interval frame rate to browser automated value
}

draw();
