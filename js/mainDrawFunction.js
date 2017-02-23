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
