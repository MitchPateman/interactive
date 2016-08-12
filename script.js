//Javascript
// ****** THIS NEEDS MAJOR REFACTORING ******

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
var spacePressed = false;
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
var skX = 0.85; //Use these for movement, increment value
var skY = 0.2;
var skillGoRight = true;
var skHooked = false;
var educationX = 210;
var educationY = 490;
var educationGoRight = false;
var edX = -0.55;
var edY = -0.7;
var edHooked = false;
var experienceX = 380;
var experienceY = 440;
var experienceGoRight = true;
var exX = 0.25;
var exY = 0.4;
var exHooked = false;
var summaryX = 680;
var summaryY = 370;
var summaryGoRight = true;
var suX = 0.275;
var suY = 0.17;
var suHooked = false;
var projectsX = 845;
var projectsY = 510;
var projectsGoRight = true;
var prX = 1.2;
var prY = -0.3;
var prHooked = false;
var linksX = 1010;
var linksY = 450;
var linksGoRight = false;
var liX = -0.6;
var liY = -0.3;
var liHooked = false;


//Load Images
var topBar = document.createElement('img');
topBar.src = 'images/top_bar_fishing.png'

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

var skillsModal = document.createElement('img');
skillsModal.src = 'images/skills_modal.png';

var educationModal = document.createElement('img');
educationModal.src = 'images/education_modal.png';

var experienceModal = document.createElement('img');
experienceModal.src = 'images/experience_modal.png';

var summaryModal = document.createElement('img');
summaryModal.src = 'images/summary_modal.png';

var projectsModal = document.createElement('img');
projectsModal.src = 'images/projects_modal.png';

var linksModal = document.createElement('img');
linksModal.src = 'images/links_modal.png';

//Event Listener for Key Up and Down
window.addEventListener("keydown", keyDownHandler,this.check, false);
window.addEventListener("keyup", keyUpHandler,this.check, false);
canvas.addEventListener("mousedown", mouseDownHandler, false);
canvas.addEventListener("mouseup", mouseUpHandler, false);
canvas.addEventListener("touchstart", touchDownHandler, false);
canvas.addEventListener("touchend", touchUpHandler, false);


//Event Handler = is the key held down or not?
function keyDownHandler(e) {
  if(e.keyCode == 39) {  //right arrow key
      rightPressed = true;
      console.log("keypressed");
  }
  else if(e.keyCode == 37) {  //left arrow key
      leftPressed = true;
      console.log("keypressed");
  }
  else if(e.keyCode == 40) {  //down arrow key
      downPressed = true;
      console.log("keypressed");
  }
  else if(e.keyCode == 38) {  //up arrow key
      upPressed = true;
      console.log("keypressed");
  }
  else if(e.keyCode == 32){
      spacePressed = true;
      console.log("spacePressed");
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
      }
      else if (clickX > 950 && clickX < 1120 && clickY < 380 && clickY > 260) {
        spacePressed = true;
      }

      //ELSE IF LINKS FISH IS CAUGHT AND LINK IS PRESSED x 5
      else if (liHooked == true && linksY < 287.13) {
        if (clickX > 533 && clickX < 602 && clickY > 308 && clickY < 378) {
          window.open('http://linkedin.com/in/MitchellPateman', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("linkedInPressed");
        }
        else if (clickX > 533 && clickX < 602 && clickY > 390 && clickY < 456) {
          window.open('http://twitter.com/MitchPateman', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("twitterPressed");
        }
        else if (clickX > 533 && clickX < 602 && clickY > 468 && clickY < 533) {
          window.open('http://www.github.com/MitchPateman', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("githubPressed");
        }
        else if (clickX > 533 && clickX < 602 && clickY > 543 && clickY < 611) {
          window.open('mailto:mitchell.pateman@gmail.com', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("emailPressed");
        }
        else if (clickX > 533 && clickX < 602 && clickY > 619 && clickY < 692) {
          window.open('https://bitmakerhq.s3.amazonaws.com/alexa/production/student/resume/1077/mitch_pateman_resume_FINAL.pdf', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("pdfPressed");
        };
      }
      else if (prHooked == true && projectsY < 287.13) {
        if (clickX > 462 && clickX < 692 && clickY > 402 && clickY < 606) {
          window.open('http://hitchr.ca/', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("hitchrPressed");
        }
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
        spacePressed = false;
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
      }
      else if (touchX > 950 && touchX < 1120 && touchY < 380 && touchY > 260) {
        spacePressed = true;
      };

      //ELSE IF(LINKS FISH CAUGHT AND LINKS PRESSED x 5)
      //else if (liHooked == true && linksY < 287.13) {

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
};
function drawBoatLeft() {
  ctx.drawImage(boatLeft,x,y);
};
function drawtopBar() {
  ctx.drawImage(topBar,540,-110,800,210);
};
function drawBottomBar() {
  ctx.drawImage(bottomBar,300,630,800,100);
};
//drawLine functions (x, y are relative to boat)
function drawLine() {
  ctx.drawImage(fishingLine,lineX,lineY);
};
function drawLineLeft() {
  ctx.drawImage(fishingLineLeft,lineLeftX,lineLeftY);
};
//drawArrow functions
function drawLeftArrow() {
  ctx.drawImage(leftArrow,leftArrowX,leftRightArrowY,widthHeight,widthHeight);
};
function drawRightArrow() {
  ctx.drawImage(rightArrow,rightArrowX,leftRightArrowY,widthHeight,widthHeight);
};
function drawUpArrow() {
  ctx.drawImage(upArrow,upDownArrowX,upArrowY,widthHeight,widthHeight);
};
function drawDownArrow() {
  ctx.drawImage(downArrow,upDownArrowX,downArrowY,widthHeight,widthHeight);
};
//drawFish fuctions
function drawSummaryFish() {
  ctx.drawImage(summaryRight,summaryX,summaryY, 210, 110);
};
function drawSummaryFishLeft() {
  ctx.drawImage(summaryLeft,summaryX,summaryY, 210, 110);
};
function drawEducationFish() {
  ctx.drawImage(educationRight,educationX,educationY, 210, 110);
};
function drawEducationFishLeft() {
  ctx.drawImage(educationLeft,educationX,educationY, 210, 110);
};
function drawExperienceFish() {
  ctx.drawImage(experienceRight,experienceX,experienceY, 210, 110);
};
function drawExperienceFishLeft() {
  ctx.drawImage(experienceLeft,experienceX,experienceY, 210, 110);
};
function drawSkillsFish() {
  ctx.drawImage(skillsRight,skillsX,skillsY, 210, 110);
};
function drawSkillsFishLeft() {
  ctx.drawImage(skillsLeft,skillsX,skillsY, 210, 110);
};
function drawProjectsFish() {
  ctx.drawImage(projectsRight,projectsX,projectsY, 210, 110);
};
function drawProjectsFishLeft() {
  ctx.drawImage(projectsLeft,projectsX,projectsY, 210, 110);
};
function drawLinksFish() {
  ctx.drawImage(linksRight,linksX,linksY, 210, 110);
};
function drawLinksFishLeft() {
  ctx.drawImage(linksLeft,linksX,linksY, 210, 110);
};
function drawSkillsModal() {
  ctx.drawImage(skillsModal,canvas.width/4, canvas.height/2.83, skillsModal.width/9.8, skillsModal.height/9.8)
};
function drawEducationModal() {
  ctx.drawImage(educationModal,canvas.width/4, canvas.height/2.83, educationModal.width/9.8, educationModal.height/9.8)
};
function drawExperienceModal() {
  ctx.drawImage(experienceModal,canvas.width/4, canvas.height/2.83, educationModal.width/9.8, educationModal.height/9.8)
};
function drawSummaryModal() {
  ctx.drawImage(summaryModal,canvas.width/4, canvas.height/2.83, educationModal.width/9.8, educationModal.height/9.8)
};
function drawProjectsModal() {
  ctx.drawImage(projectsModal,canvas.width/4, canvas.height/2.83, educationModal.width/9.8, educationModal.height/9.8)
};
function drawLinksModal() {
  ctx.drawImage(linksModal,canvas.width/4, canvas.height/2.83, educationModal.width/9.8, educationModal.height/9.8)
};



//MAIN DRAW FUNCTION
function draw() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawLeftArrow();
  drawRightArrow();
  drawUpArrow();
  drawDownArrow();
  drawtopBar();
  drawBottomBar();


  //DRAW FISH
  if (skillGoRight == true){
    drawSkillsFish();
  }
  else {
    drawSkillsFishLeft();
  };
  if (educationGoRight == true){
    drawEducationFish();
  }
  else {
    drawEducationFishLeft();
  };
  if (experienceGoRight == true){
    drawExperienceFish();
  }
  else {
    drawExperienceFishLeft();
  };
  if (summaryGoRight == true){
    drawSummaryFish();
  }
  else {
    drawSummaryFishLeft();
  };
  if (projectsGoRight == true){
    drawProjectsFish();
  }
  else {
    drawProjectsFishLeft();
  };
  if (linksGoRight == true){
    drawLinksFish();
  }
  else {
    drawLinksFishLeft();
  };

  //HOOK A FISH!
    if (upPressed == true && skHooked == false && edHooked ==false && exHooked == false && suHooked == false && prHooked == false && liHooked == false){
      if (rightLast == true && hookX >= skillsX && hookX < skillsX + 200 && hookY >= skillsY && hookY < skillsY + 100
          || rightLast == false && upPressed == true && hookLeftX >= skillsX && hookLeftX < skillsX + 200 && hookY >= skillsY && hookY < skillsY + 100){
        console.log ("skills fish hooked");
        skHooked = true;
      }
      else if (rightLast == true && upPressed == true && hookX >= educationX && hookX < educationX + 200 && hookY >= educationY && hookY < educationY + 100
          || rightLast == false && upPressed == true && hookLeftX >= educationX && hookLeftX < educationX + 200 && hookY >= educationY && hookY < educationY + 100){
        console.log ("education fish hooked");
        edHooked = true;
      }
      else if (rightLast == true && upPressed == true && hookX >= experienceX && hookX < experienceX + 200 && hookY >= experienceY && hookY < experienceY + 100
          || rightLast == false && upPressed == true && hookLeftX >= experienceX && hookLeftX < experienceX + 200 && hookY >= experienceY && hookY < experienceY + 100){
        console.log ("experience fish hooked");
        exHooked = true;
      }
      else if (rightLast == true && upPressed == true && hookX >= summaryX && hookX < summaryX + 200 && hookY >= summaryY && hookY < summaryY + 100
          || rightLast == false && upPressed == true && hookLeftX >= summaryX && hookLeftX < summaryX + 200 && hookY >= summaryY && hookY < summaryY + 100){
        console.log ("summary fish hooked");
        suHooked = true;
      }
      else if (rightLast == true && upPressed == true && hookX >= projectsX && hookX < projectsX + 200 && hookY >= projectsY && hookY < projectsY + 100
          || rightLast == false && upPressed == true && hookLeftX >= projectsX && hookLeftX < projectsX + 200 && hookY >= projectsY && hookY < projectsY + 100){
        console.log ("projects fish hooked");
        prHooked = true;
      }
      else if (rightLast == true && upPressed == true && hookX >= linksX && hookX < linksX + 200 && hookY >= linksY && hookY < linksY + 100
          || rightLast == false && upPressed == true && hookLeftX >= linksX && hookLeftX < linksX + 200 && hookY >= linksY && hookY < linksY + 100){
        console.log ("links fish hooked");
        liHooked = true;
      };
    };


  //CHECK IF HOOKED or Move the fish (below)
  if (skHooked == true){
    skX = 0;
    skY = 0;
    edHooked = false;
    liHooked = false;
    exHooked = false;
    suHooked = false;
    prHooked = false;
    if (skillsY > 287.13){
      skillsY = hookY - 50;
    }
    else if (skillsY < 287.13){
      if (skHooked == true && skillsY < 287.13) {
        drawSkillsModal();
        if (spacePressed || leftPressed || rightPressed || downPressed){
          upPressed = false;
          skillsX = -30;
          skillsY = 400;
          if (skillGoRight == true){
            skX = 0.85;
            skY = 0.2;
          }
          else {
            skX = -0.85;
            skY = -0.2;
          };
          spacePressed = false;
          skHooked = false;
        };
      };
    };
  }
  else if (edHooked == true){
    edX = 0;
    edY = 0;
    skHooked = false;
    exHooked = false;
    liHooked = false;
    suHooked = false;
    prHooked = false;
    if (educationY > 287.13){
      educationY = hookY - 50;
    }
    else if (educationX < 287.13){
      if (edHooked == true && educationY < 287.13) {
        drawEducationModal();
        if (spacePressed || leftPressed || rightPressed || downPressed){
          upPressed = false;
          educationX = 210;
          educationY = 490;
          if (educationGoRight == true){
            edX = 0.55;
            edY = 0.7;
          }
          else {
            edX = -0.55;
            edY = -0.7;
          };
          spacePressed = false;
          edHooked = false;
        };
      };
    };
  }
  else if (exHooked == true){
    exX = 0;
    exY = 0;
    edHooked = false;
    liHooked = false;
    skHooked = false;
    suHooked = false;
    prHooked = false;
    if (experienceY > 287.13){
      experienceY = hookY - 50;
    }
    else if (experienceY < 287.13){
      if (exHooked == true && experienceY < 287.13) {
        drawExperienceModal();
        if (spacePressed || leftPressed || rightPressed || downPressed){
          upPressed = false;
          experienceX = 380;
          experienceY = 440;
          if (experienceGoRight == true){
            exX = 0.25;
            exY = 0.4;
          }
          else {
            exX = -0.5;
            exY = -0.4;
          };
          spacePressed = false;
          exHooked = false;
        };
      };
    };
  }
  else if (suHooked == true){
    suX = 0;
    suY = 0;
    edHooked = false;
    skHooked = false;
    exHooked = false;
    liHooked = false;
    prHooked = false;
    if (summaryY > 287.13){
      summaryY = hookY - 50;
    }
    else if (summaryY < 287.13){
      if (suHooked == true && summaryY < 287.13) {
        drawSummaryModal();
        if (spacePressed || leftPressed || rightPressed || downPressed){
          upPressed = false;
          summaryX = 680;
          summaryY = 370;
          if (summaryGoRight == true){
            suX = 0.275;
            suY = 0.17;
          }
          else {
            suX = -0.275;
            suY = -0.17;
          };
          spacePressed = false;
          suHooked = false;
        };
      };
    };
  }
  else if (prHooked == true){
    prX = 0;
    prY = 0;
    edHooked = false;
    skHooked = false;
    exHooked = false;
    liHooked = false;
    suHooked = false;
    if (projectsY > 287.13){
      projectsY = hookY - 50;
    }
    else if (projectsY < 287.13){
      if (prHooked == true && projectsY < 287.13) {
        drawProjectsModal();
        if (spacePressed || leftPressed || rightPressed || downPressed){
          upPressed = false;
          projectsX = 845;
          projectsY = 510;
          if (projectsGoRight == true){
            prX = 1.2;
            prY = -0.3;
          }
          else {
            prX = -1.2;
            prY = 0.3;
          };
          spacePressed = false;
          prHooked = false;
        };
      };
    };
  }
  else if (liHooked == true) {
    liX = 0;
    liY = 0;
    edHooked = false;
    skHooked = false;
    exHooked = false;
    suHooked = false;
    prHooked = false;
    if (linksY > 287.13){
      linksY = hookY - 50;
    }
    else if (linksY < 287.13){

      //if linksPressed linkTo webpage!

      if (liHooked == true && linksY < 287.13) {
        drawLinksModal();
        if (spacePressed || leftPressed || rightPressed || downPressed){
          upPressed = false;
          linksX = 1010;
          linksY = 450;
          if (linksGoRight == true){
            liX = 0.6;
            liY = 0.3;
          }
          else {
            liX = -0.6;
            liY = -0.3;
          };
          spacePressed = false;
          liHooked = false;
        };
      };
    };
  }

  // MOVE FISH AND SWITCH DIRECTION
  //Skills FISH
  if (skHooked == false && skillsX <= 50 && skillsX >= -40 && skillsY <= 510 && skillsY >= 370){
    skillsX += skX;
    skillsY += skY;
  }
  else if (skHooked == false && skillsX > 50) {
    skX = -skX;
    skillsX += skX;
    skillGoRight = false;
  }
  else if (skHooked == false && skillsX < -40) {
    skX = -skX;
    skillsX += skX;
    skillGoRight = true;
  }
  else if (skHooked == false && skillsY > 510 || skillsY < 370) {
    skY = -skY;
    skillsY += skY;
  };

  //Move EDUCATION Fish
  if (edHooked == false && educationX <= 250 && educationX >= 180 && educationY <= 510 && educationY >= 370){
    educationX += edX;
    educationY += edY;
  }
  else if (edHooked == false && educationX > 250) {
    edX = -edX
    educationX += edX;
    educationGoRight = false;
  }
  else if (edHooked == false && educationX < 180) {
    edX = -edX
    educationX += edX;
    educationGoRight = true;
  }
  else if (edHooked == false && educationY > 510 || educationY < 370) {
    edY = -edY
    educationY+= edY;
  };

  //Move EXPERIENCE Fish
  if (exHooked == false && experienceX <= 500 && experienceX >= 375 && experienceY <= 510 && experienceY >= 370){
    experienceX += exX;
    experienceY += exY;
  }
  else if (exHooked == false && experienceX > 500) {
    exX = -exX;
    experienceX += exX;
    experienceGoRight = false;
  }
  else if (exHooked == false && experienceX < 375) {
    exX = -exX;
    experienceX += exX;
    experienceGoRight = true;
  }
  else if (exHooked == false && experienceY > 510 || experienceY < 370) {
    exY = -exY;
    experienceY += exY;
  };

  //Move SUMMARY Fish
  if (suHooked == false && summaryX <= 750 && summaryX >= 550 && summaryY <= 510 && summaryY >= 370){
    summaryX += suX;
    summaryY += suY;
  }
  else if (suHooked == false && summaryX > 750) {
    suX = -suX;
    summaryX += suX;
    summaryGoRight = false;
  }
  else if (suHooked == false && summaryX < 550) {
    suX = -suX;
    summaryX += suX;
    summaryGoRight = true;
  }
  else if (suHooked == false && summaryY > 510 || summaryY < 370) {
    suY = -suY;
    summaryY += suY;
  };

  //Move PROJECTS Fish
  if (prHooked == false && projectsX <= 900 && projectsX >= 740 && projectsY <= 510 && projectsY >= 370){
    projectsX += prX;
    projectsY += prY;
  }
  else if (prHooked == false && projectsX > 900) {
    prX = -prX;
    projectsX += prX;
    projectsGoRight = false;
  }
  else if (prHooked == false && projectsX < 740) {
    prX = -prX;
    projectsX += prX;
    projectsGoRight = true;
  }
  else if (prHooked == false && projectsY > 510 || projectsY < 370) {
    prY = -prY;
    projectsY += prY;
  };

  //Move LINKS Fish
  if (liHooked == false && linksX <= 1100 && linksX >= 890 && linksY <= 510 && linksY >= 370){
    linksX += liX;
    linksY += liY;
  }
  else if (liHooked == false && linksX > 1100) {
    liX = -liX
    linksX += liX;
    linksGoRight = false;
  }
  else if (liHooked == false && linksX < 890) {
    liX = -liX
    linksX += liX;
    linksGoRight = true;
  }
  else if (liHooked == false && linksY > 510 || linksY < 370) {
    liY = -liY
    linksY += liY;
  };

//left or right last pressed?
  if(rightLast == true){
    drawBoat();
    drawLine();
  }
  else{ //left was pressed last
    drawBoatLeft();
    drawLineLeft();
  };
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
  };
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
  };
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
  };
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
  };

requestAnimationFrame(draw); //sets the interval frame rate to browser automated value
};


draw();
