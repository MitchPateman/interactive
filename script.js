//Javascript

//canvas Variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

//Boat Variables
var x = canvas.width/20; //define x and y starting point of boat
var y = canvas.height/10.2;
var lineX = x + 389; //Line is relative to where boat is (starting position)
var lineLeftX //This gets value in the draw() function
var lineY = y;
var lineLeftY = y;

var hookX = lineX + 1.14;
var hookLeftX; //This gets value in the draw() function
var hookY = lineY + 263.6;

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
var skX = 1; //Use these for movement, increment value
var skY = 0.2;
var skillGoRight = true;
var educationX = 230;
var educationY = 490;
var educationGoRight = false;
var edX = -0.25;
var edY = -0.1;
var experienceX = 470;
var experienceY = 440;
var experienceGoRight = true;
var exX = 0.8;
var exY = 0.4;
var summaryX = 680;
var summaryY = 370;
var summaryGoRight = true;
var suX = 0.275;
var suY = 0.17;
var projectsX = 845;
var projectsY = 510;
var projectsGoRight = true;
var prX = 1.2;
var prY = -0.3;
var linksX = 1010;
var linksY = 450;
var linksGoRight = false;
var liX = -0.6;
var liY = -0.3;

//Load Images
var bottomBar = document.createElement('img');
bottomBar.src = 'images/bottom_bar_fishing.png'

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
function drawBottomBar() {
  ctx.drawImage(bottomBar,540,-110,800,210);
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



//MAIN DRAW FUNCTION
function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawLeftArrow();
  drawRightArrow();
  drawUpArrow();
  drawDownArrow();
  drawBottomBar();

  //DRAW FISH
  if (skillGoRight == true){
    drawSkillsFish();
  }
  else {
    drawSkillsFishLeft();
  }

  if (educationGoRight == true){
    drawEducationFish();
  }
  else {
    drawEducationFishLeft();
  }

  if (experienceGoRight == true){
    drawExperienceFish();
  }
  else {
    drawExperienceFishLeft();
  }

  if (summaryGoRight == true){
    drawSummaryFish();
  }
  else {
    drawSummaryFishLeft();
  }

  if (projectsGoRight == true){
    drawProjectsFish();
  }
  else {
    drawProjectsFishLeft();
  }

  if (linksGoRight == true){
    drawLinksFish();
  }
  else {
    drawLinksFishLeft();
  }

  //MOVE FISH AND SWITCH DIRECTION
  //Move SKILLS Fish
  if (skillsX <= 200 && skillsX >= 10 && skillsY <= 510 && skillsY >= 370){
    skillsX += skX;
    skillsY += skY;
  }
  else if (skillsX > 200) {
    skX = -skX;
    skillsX += skX;
    skillGoRight = false;
  }
  else if (skillsX < 10) {
    skX = -skX;
    skillsX += skX;
    skillGoRight = true;
  }
  else if (skillsY > 510 || skillsY < 370) {
    skY = -skY;
    skillsY += skY;
  }

  //Move EDUCATION Fish
  if (educationX <= 333 && educationX >= 180 && educationY <= 510 && educationY >= 370){
    educationX += edX;
    educationY += edY;
  }
  else if (educationX > 333) {
    edX = -edX
    educationX += edX;
    educationGoRight = false;
  }
  else if (educationX < 180) {
    edX = -edX
    educationX += edX;
    educationGoRight = true;
  }
  else if (educationY > 510 || educationY < 370) {
    edY = -edY
    educationY+= edY;
  }

  //Move EXPERIENCE Fish
  if (experienceX <= 500 && experienceX >= 315 && experienceY <= 510 && experienceY >= 370){
    experienceX += exX;
    experienceY += exY;
  }
  else if (experienceX > 500) {
    exX = -exX;
    experienceX += exX;
    experienceGoRight = false;
  }
  else if (experienceX < 315) {
    exX = -exX;
    experienceX += exX;
    experienceGoRight = true;
  }
  else if (experienceY > 510 || experienceY < 370) {
    exY = -exY;
    experienceY += exY;
  }

  //Move SUMMARY Fish
  if (summaryX <= 750 && summaryX >= 600 && summaryY <= 510 && summaryY >= 370){
    summaryX += suX;
    summaryY += suY;
  }
  else if (summaryX > 750) {
    suX = -suX;
    summaryX += suX;
    summaryGoRight = false;
  }
  else if (summaryX < 600) {
    suX = -suX;
    summaryX += suX;
    summaryGoRight = true;
  }
  else if (summaryY > 510 || summaryY < 370) {
    suY = -suY;
    summaryY += suY;
  }

  //Move PROJECTS Fish
  if (projectsX <= 900 && projectsX >= 740 && projectsY <= 510 && projectsY >= 370){
    projectsX += prX;
    projectsY += prY;
  }
  else if (projectsX > 900) {
    prX = -prX;
    projectsX += prX;
    projectsGoRight = false;
  }
  else if (projectsX < 740) {
    prX = -prX;
    projectsX += prX;
    projectsGoRight = true;
  }
  else if (projectsY > 510 || projectsY < 370) {
    prY = -prY;
    projectsY += prY;
  }

  //Move LINKS Fish
  if (linksX <= 1100 && linksX >= 890 && linksY <= 510 && linksY >= 370){
    linksX += liX;
    linksY += liY;
  }
  else if (linksX > 1100) {
    liX = -liX
    linksX += liX;
    linksGoRight = false;
  }
  else if (linksX < 890) {
    liX = -liX
    linksX += liX;
    linksGoRight = true;
  }
  else if (linksY > 510 || linksY < 370) {
    liY = -liY
    linksY += liY;
  }

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
    hookX = lineX + 1.14;
  }
  else if (rightPressed && x >= (canvas.width) && lineY < 90){
    x = 0-boat.width;
    lineX = 0-boat.width;
    hookX = lineX + 1.14;
  }
  if (leftPressed && x > (0-boat.width) && lineY < 90){
    rightLast = false;
    lineLeftX = x + 45.5; //stick to the boat
    hookLeftX = lineLeftX + 36.7;
    ctx.clearRect(x, y, boat.width, boat.height);
    drawBoatLeft();
    drawLineLeft();
    x = x - speed;
    lineLeftX = lineLeftX - speed;
    hookLeftX = lineLeftX + 36.7;
  }
  else if (leftPressed && x <= (0-boat.width) && lineY < 90){
    x = canvas.width;
    lineX = canvas.width;
    hookX = lineX + 1.14;
    rightLast = false;
  }
  // When "down" or "up" bring the line down or up and stop it at ceiling and floor
  if (downPressed && rightLast == true && lineY < 303){
    lineY = lineY + speed;
    lineX = lineX + 0.2975;
    hookX = (lineX + 1.14) + 0.2975;
    lineLeftY = lineY;
    hookY = lineY + 263.6
  }
  else if (upPressed && rightLast == true && lineY > 74){
    lineY = lineY - speed;
    lineX = lineX - 0.2975;
    hookX = (lineX + 1.14) - 0.2975;
    lineLeftY = lineY;
    hookY = lineLeftY + 263.6
  }
  if (downPressed && rightLast == false && lineY < 303){
    lineLeftY= lineLeftY + speed;
    lineLeftX = lineLeftX - 0.32;
    hookLeftX = (lineLeftX + 36.7) - 0.32;
    lineY = lineLeftY;
    hookY = lineY + 263.6
  }
  else if (upPressed && rightLast == false && lineY > 74){
    lineLeftY = lineLeftY - speed;
    lineLeftX = lineLeftX + 0.32;
    hookLeftX = (lineLeftX + 36.7) + 0.32;
    lineY = lineLeftY;
    hookY = lineY + 263.6
  }
//HOOK A FISH!
  if (upPressed == true){
    if (upPressed == true && hookX >= skillsX && hookX < skillsX + 230 && hookY >= skillsY && hookY < skillsY + 80
        || hookLeftX >= skillsX && hookLeftX < skillsX + 230 && hookY >= skillsY && hookY < skillsY + 80){
      console.log ("skills fish caught");
      skX = 0;
      skY -= 1;
    }
    else if (upPressed == true && hookX >= educationX && hookX < educationX + 230 && hookY >= educationY && hookY < educationY + 80
        || hookLeftX >= educationX && hookLeftX < educationX + 230 && hookY >= educationY && hookY < educationY + 80){
      console.log ("education fish caught");
      edX = 0;
      edY -= 1;
    }
    else if (upPressed == true && hookX >= linksX && hookX < linksX + 230 && hookY >= linksY && hookY < linksY + 80
        || hookLeftX >= linksX && hookLeftX < linksX + 230 && hookY >= linksY && hookY < linksY + 80){
      console.log ("links fish caught");
      liX = 0;
      liY -= 1;
    }
  }

requestAnimationFrame(draw); //sets the interval frame rate to browser automated value
};


draw();
