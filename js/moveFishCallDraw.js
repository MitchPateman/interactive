
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
  if (suHooked == false && summaryX <= 680 && summaryX >= 580 && summaryY <= 510 && summaryY >= 370){
    summaryX += suX;
    summaryY += suY;
  }
  else if (suHooked == false && summaryX > 680) {
    suX = -suX;
    summaryX += suX;
    summaryGoRight = false;
  }
  else if (suHooked == false && summaryX < 580) {
    suX = -suX;
    summaryX += suX;
    summaryGoRight = true;
  }
  else if (suHooked == false && summaryY > 510 || summaryY < 370) {
    suY = -suY;
    summaryY += suY;
  };

  //Move PROJECTS Fish
  if (prHooked == false && projectsX <= 860 && projectsX >= 750 && projectsY <= 510 && projectsY >= 370){
    projectsX += prX;
    projectsY += prY;
  }
  else if (prHooked == false && projectsX > 860) {
    prX = -prX;
    projectsX += prX;
    projectsGoRight = false;
  }
  else if (prHooked == false && projectsX < 750) {
    prX = -prX;
    projectsX += prX;
    projectsGoRight = true;
  }
  else if (prHooked == false && projectsY > 510 || projectsY < 370) {
    prY = -prY;
    projectsY += prY;
  };

  //Move LINKS Fish
  if (liHooked == false && linksX <= 1100 && linksX >= 990 && linksY <= 510 && linksY >= 370){
    linksX += liX;
    linksY += liY;
  }
  else if (liHooked == false && linksX > 1100) {
    liX = -liX
    linksX += liX;
    linksGoRight = false;
  }
  else if (liHooked == false && linksX < 990) {
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
