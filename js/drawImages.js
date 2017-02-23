
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
