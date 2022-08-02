var page; 
var font;
var githubButton;
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
  fill(100, 55, 44);

  

  // buttons 
  githubButton = createImg('assets/github-logo.gif');
  githubButton.position(windowWidth/2.8, windowHeight/5);
  githubButton.addClass('github-button');



}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}