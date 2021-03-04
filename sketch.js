// Introduction to Conditional Statements
// Code! Programming with p5.js
// The Coding Train / Daniel Shiffman
// https://thecodingtrain.com/beginners/p5js/3.1-conditional-statements.html
// https://youtu.be/1Osb_iGDdjk
// https://editor.p5js.org/codingtrain/sketches/z_yjYIha

let x = 320;
let y = 180;
let xspeed = 5;
let yspeed = 2;

let r = 25;
let xSlide,ySlider;
function setup() {
    createCanvas(710, 300);
  textSize(15);
  noStroke();
  createCanvas(640, 360);
  xSlider = createSlider(0, 255, 100);
  xSlider.position(20, 20);
  ySlider = createSlider(0, 255, 100);
  ySlider.position(20, 50);
}

function draw() {
  background(x);
  ellipse(x, y, r*2, r*2);
  x = xSlider.value();
  y = ySlider.value();
  x += xspeed;
  y += yspeed;
   text('red', xSlider.x * 2 + xSlider.width, 35);
  text('green', ySlider.x * 2 + ySlider.width, 60);
  if (x > width - r || x < r) {
    xspeed = -xspeed;
  }
  if (y > height - r || y < r) {
    yspeed = -yspeed;


  }


}
