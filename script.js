var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2; //define x and y starting point
var y = canvas.height/3.5;
var rightPressed = false; //left or right gets pressed?
var leftPressed = false;
var speed = 5;
//images
var boat = document.createElement('img'); // DOM HTMLImageElement
boat.src = 'images/boat.png';
boat.alt = 'boat';

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

function drawBoat() {
	ctx.beginPath();
	ctx.rect(x, y, 50, 50); //(topleftX, topleftY, width, height)
	ctx.fillStyle = "#FF0000";
	ctx.fill();

	// document.body.appendChild(boat);
	ctx.drawImage(boat,x,y);

	ctx.closePath();
}



function draw() {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	drawBoat();

	if(rightPressed){
		console.log("Right Was Pressed!");
		x = x + speed;
		//boat.x++;
	}
	else if (leftPressed){
		console.log("Left Was Pressed!");
		x = x - speed;
		//boat.x--;
	}
requestAnimationFrame(draw); //sets the interval frame rate to browser automated value
}


draw()
