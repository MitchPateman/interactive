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
var rightArrowX = 180;
var upDownArrowX = 1225;
var leftRightArrowY = 560;
var upArrowY = 390;
var downArrowY = 560;
var widthHeight = 200; //widthHeight for arrow keys
//Positioning the fish on the canvas
var skillsX = 10;
var skillsY = 400;
var educationX = 230;
var educationY = 500;
var experienceX = 470;
var experienceY = 440;
var summaryX = 680;
var summaryY = 370;
var projectsX = 845;
var projectsY = 520;
var linksX = 1010;
var linksY = 450;

//Load Images
var boat = document.createElement('img'); // DOM HTMLImageElement
boat.src = 'images/boat.png';

var boatLeft = document.createElement('img'); // DOM HTMLImageElement
boatLeft.src = 'images/boat_left.png';

var fishingLine = document.createElement('img');
fishingLine.src = 'images/fishing_line.png';

var fishingLineLeft = document.createElement('img');
fishingLineLeft.src = 'images/fishing_line_left.png';

var leftArrow = document.createElement('img'); // DOM HTMLImageElement
leftArrow.src = 'images/left_arrow.png';

var rightArrow = document.createElement('img'); // DOM HTMLImageElement
rightArrow.src = 'images/right_arrow.png';

var upArrow = document.createElement('img'); // DOM HTMLImageElement
upArrow.src = 'images/up_arrow.png';

var downArrow = document.createElement('img'); // DOM HTMLImageElement
downArrow.src = 'images/down_arrow.png';

var summaryRight = document.createElement('img');
summaryRight.src = 'images/summary_fish.png';
var summaryLeft = document.createElement('img');
summaryLeft.src = 'images/summary_fish_left.png';

var educationRight = document.createElement('img');
educationRight.src = 'images/education_fish.png';
var educationLeft = document.createElement('img');
educationLeft.src = 'images/education_fish_left.png';

var experienceRight = document.createElement('img');
experienceRight.src = 'images/experience_fish.png';
var experienceLeft = document.createElement('img');
experienceLeft.src = 'images/experience_fish_left.png';

var skillsRight = document.createElement('img');
skillsRight.src = 'images/skills_fish.png';
var skillsLeft = document.createElement('img');
skillsLeft.src = 'images/skills_fish_left.png';

var projectsRight = document.createElement('img');
projectsRight.src = 'images/projects_fish.png';
var projectsLeft = document.createElement('img');
projectsLeft.src = 'images/projects_fish_left.png';

var linksRight = document.createElement('img');
linksRight.src = 'images/links_fish.png';
var linksLeft = document.createElement('img');
linksLeft.src = 'images/links_fish_left.png';


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
  var rect = canvas.getBoundingClientRect();
  touchX = (event.pageX - rect.left) / (rect.right - rect.left) * canvas.width;
  touchY = (event.pageY - rect.top) / (rect.bottom - rect.top) * canvas.height;
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
  touchX = event.pageX - canvas.offsetLeft;
  touchY = event.pageY - canvas.offsetTop;
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


function drawSummaryFish() {
  ctx.drawImage(summaryRight,summaryX,summaryY, 230, 120);
}
function drawSummaryFishLeft() {
  ctx.drawImage(summaryLeft,summaryX,summaryY, 230, 120);
}

function drawEducationFish() {
  ctx.drawImage(educationRight,educationX,educationY, 230, 120);
}
function drawEducationFishLeft() {
  ctx.drawImage(educationLeft,educationX,educationY, 230, 120);
}

function drawExperienceFish() {
  ctx.drawImage(experienceRight,experienceX,experienceY, 230, 120);
}
function drawExperienceFishLeft() {
  ctx.drawImage(experienceLeft,experienceX,experienceY, 230, 120);
}

function drawSkillsFish() {
  ctx.drawImage(skillsRight,skillsX,skillsY, 230, 120);
}
function drawSkillsFishLeft() {
  ctx.drawImage(skillsLeft,skillsX,skillsY, 230, 120);
}

function drawProjectsFish() {
  ctx.drawImage(projectsRight,projectsX,projectsY, 230, 120);
}
function drawProjectsFishLeft() {
  ctx.drawImage(projectsLeft,projectsX,projectsY, 230, 120);
}

function drawLinksFish() {
  ctx.drawImage(linksRight,linksX,linksY, 230, 120);
}
function drawLinksFishLeft() {
  ctx.drawImage(linksLeft,linksX,linksY, 230, 120);
}


//DRAW FUNCTION = IFs
function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawLeftArrow();
  drawRightArrow();
  drawUpArrow();
  drawDownArrow();

  drawSkillsFish();
  drawEducationFishLeft();
  drawExperienceFish();
  drawSummaryFish();
  drawProjectsFishLeft();
  drawLinksFish();
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
