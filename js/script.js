//Javascript
// ****** THIS NEEDS MAJOR REFACTORING ******

//canvas Variables
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
document.getElementById('myCanvas').focus();


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
var prX = 1;
var prY = -0.3;
var prHooked = false;
var linksX = 1010;
var linksY = 450;
var linksGoRight = false;
var liX = -0.6;
var liY = -0.3;
var liHooked = false;
