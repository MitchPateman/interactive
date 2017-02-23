//Event Listener for Key Up and Down
window.addEventListener("keydown", keyDownHandler, false);
window.addEventListener("keyup", keyUpHandler, false);
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
      else if (clickX > 993 && clickX < 1304 && clickY > 10 && clickY < 71) {
        window.open('https://bitmakerhq.s3.amazonaws.com/alexa/production/student/resume/1077/mitch_pateman_resume_NEW1.pdf', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
        console.log("pdfPressed");
      }

      //ELSE IF LINKS FISH IS CAUGHT AND LINK IS PRESSED x 5
      else if (liHooked == true && linksY < 287.13) {
        if (clickX > 533 && clickX < 820 && clickY > 308 && clickY < 378) {
          window.open('http://linkedin.com/in/MitchellPateman', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("linkedInPressed");
        }
        else if (clickX > 533 && clickX < 793 && clickY > 390 && clickY < 456) {
          window.open('http://twitter.com/MitchPateman', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("twitterPressed");
        }
        else if (clickX > 533 && clickX < 881 && clickY > 468 && clickY < 533) {
          window.open('http://www.github.com/MitchPateman', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("githubPressed");
        }
        else if (clickX > 533 && clickX < 911 && clickY > 543 && clickY < 611) {
          window.open('mailto:mitchell.pateman@gmail.com', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("emailPressed");
        }
        else if (clickX > 533 && clickX < 778 && clickY > 619 && clickY < 692) {
          window.open('https://bitmakerhq.s3.amazonaws.com/alexa/production/student/resume/1077/mitch_pateman_resume_NEW1.pdf', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("pdfPressed");
        };
      }
      else if (prHooked == true && projectsY < 287.13) {
        if (clickX > 462&& clickX < 692 && clickY > 402 && clickY < 606) {
          window.open('http://hitchr.ca/', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("hitchrPressed");
        }
        else if (clickX > 743 && clickX < 974 && clickY > 376 && clickY < 504) {
          window.open('https://ancient-waters-89438.herokuapp.com/', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("crowdFunderPressed");
        }
        else if (clickX > 743 && clickX < 974 && clickY > 524 && clickY < 625) {
          window.open('http://tranquil-reaches-49678.herokuapp.com/', '_blank', 'toolbar=yes, location=yes, status=yes, menubar=yes, scrollbars=yes');
          console.log("seatYourselfPressed");
        };
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
