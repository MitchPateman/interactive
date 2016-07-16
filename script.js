var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2; //define x and y starting point bottom center
var y = (canvas.height-(canvas.height*0.5));
var rightPressed = false; //left or right gets pressed?
var leftPressed = false;

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

function drawRectangle() {
	ctx.beginPath();
	ctx.rect(20, 40, 50, 50); //(topleftX, topleftY, width, height)
	ctx.fillStyle = "#FF0000";
	ctx.fill();
	ctx.closePath();
}

function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawRectangle();

	if(rightPressed){
		console.log("Right Was Pressed!");
	}
	else if (leftPressed){
		console.log("Left Was Pressed!");
	}
requestAnimationFrame(draw); //sets the interval frame rate to browser automated value
}

draw()
