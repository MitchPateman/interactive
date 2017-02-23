//MAIN DRAW FUNCTION
function draw() {
  canvas.tabIndex = 0;
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
            prX = 1;
            prY = -0.3;
          }
          else {
            prX = -1;
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
  };


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
