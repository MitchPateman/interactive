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
}
