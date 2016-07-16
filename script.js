var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//rectangle
	ctx.beginPath();
	ctx.rect(20, 40, 50, 50); //(topleftX, topleftY, width, height)
	ctx.fillStyle = "#FF0000";
	ctx.fill();
	ctx.closePath();
