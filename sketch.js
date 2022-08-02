var page; 
var font;
var fontFile = "assets/Chivo-Regular.ttf"; // font for text

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
  textFont(font);
  textSize(50);
  textSize(height/16);
  textAlign(CENTER, TOP);
  text("Hey, it's Ellie!", 0, windowHeight/8, windowWidth, windowHeight-windowHeight/16); //writes the text 
  fill(63, 108, 81);

}