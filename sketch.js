var page; 
var font;

var githubButton;
var linkedinButton;
var resumeButton;

var fontFile = "assets/Chivo-Regular.ttf"; // font for text
var buttons = new Array(3); 
let x;
let y;

function preload() {
  font = loadFont(fontFile);
}
function setup() {
  createCanvas(windowWidth, windowHeight);
  page = 1;
  

}

function draw() {
  background(193, 215, 174); // light green background

  if (page == 1) {
    homePage();
  }
}

// main pages 

function homePage() {
  // title
  textFont(font);
  textSize(50);
  textSize(height/16);
  textAlign(CENTER, TOP);
  text("Hey, it's Ellie!", 0, windowHeight/8, windowWidth, windowHeight-windowHeight/16); //writes the text 
  fill(63, 108, 81);

  

  // buttons 
  githubButton = createImg('assets/github-logo.gif');
  githubButton.position(0, windowHeight/9, windowWidth, windowHeight-windowHeight/16);
  // githubButton.center();
  if (windowWidth < 500) {
    githubButton.position(10,10);
  }
  githubButton.addClass('github-button');

  linkedinButton = createImg('assets/linkedin-pixel.PNG');
  // linkedinButton.position(0, 0, windowWidth, windowHeight-windowHeight/16);
  linkedinButton.center("horizontal");
  linkedinButton.addClass('linkedin-button');

}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}