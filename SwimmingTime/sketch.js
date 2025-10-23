let currentImage;
let rotation = 0;
let myCounter = 0;

let mousePosX = 0;
let mousePosY = 0;

let swim;
let swimH;
let swimW;

let swim2;
let swim2H;
let swim2W;

let swim3;
let swim3H;
let swim3W;

let swim4;
let swim4H;
let swim4W;

let mySound;

/*let mouseX;
let mouseY;

var x = 0;
var y = 0;
var easing = 0.035;

var s; */


//image preloads
function preload(){
  swim = loadImage('img/swimmer1.png');
  swim2 = loadImage('img/swimmer2.png');
  swim3 = loadImage('img/swimmer3.png');
  swim4 = loadImage('img/swimmer4.png');
  mySound = createAudio('audio/swimming.mp3');
  }


function setup() { 
  createCanvas(1540, 870);
  imageMode(CENTER);
  currentImage = swim;

  frameRate(15);

}

function draw() {

  // water
  background('lightblue');
  mySound.play();
  drawingContext.setLineDash([5, 10, 25, 25]); 
  stroke('cornflowerblue');
  strokeWeight(10);
  line (0, 25, 150, 25);
  line (300, 25, 650, 25);
  line (800, 25, 1540, 25);
  line (0, 125, 50, 125);
  line (200, 125, 550, 125);
  line (700, 125, 1440, 125);
  line (100, 225, 250, 225);
  line (400, 225, 650, 225);
  line (900, 225, 1540, 225);
  line (0, 325, 50, 325);
  line (300, 325, 650, 325);
  line (800, 325, 1540, 325);
  line (0, 425, 50, 425);
  line (200, 425, 550, 425);
  line (700, 425, 1440, 425);
  line (100, 525, 250, 525);
  line (400, 525, 650, 525);
  line (900, 525, 1540, 525);
  line (0, 625, 50, 625);
  line (200, 625, 550, 625);
  line (700, 625, 1440, 625);
  line (100, 725, 250, 725);
  line (400, 725, 650, 725);
  line (900, 725, 1540, 725);
  line (0, 825, 50, 825);
  line (200, 825, 550, 825);
  line (700, 825, 1440, 825);

  // pool lanes
  drawingContext.setLineDash([]); 
  stroke('blue');
  strokeWeight(15);
  line (0,0, 0, 900);
  line (200,0, 200, 500);
  line (200,700, 200, 900);
  line (400,220, 400, 900);
  line (600,0, 600, 550);
  line (600,750, 600, 900);
  line (800,0, 800, 700);
  line (1000,0, 1000, 300);
  line (1000,500, 1000, 900);
  line (1200,0, 1200, 750);
  line (1400,150, 1400, 900);

  //pool lane details
  drawingContext.setLineDash([5, 25]); 
  stroke('white');
  strokeWeight(15);
  line (0,0, 0, 900);
  line (200,0, 200, 500);
  line (200,700, 200, 900);
  line (400,220, 400, 900);
  line (600,0, 600, 550);
  line (600,750, 600, 900);
  line (800,0, 800, 700);
  line (1000,0, 1000, 300);
  line (1000,500, 1000, 900);
  line (1200,0, 1200, 750);
  line (1400,150, 1400, 900);

  //flag lines
  drawingContext.setLineDash([]);
  stroke('navy');
  strokeWeight(5);
  line (0,75, 1540, 75);
  line (0,800, 1540, 800);

  //top flags red
  strokeWeight(2);
  fill ('red');
  triangle(0, 75, 50, 75, 25, 110);
  triangle(150, 75, 200, 75, 175, 110);
  triangle(300, 75, 350, 75, 325, 110);
  triangle(450, 75, 500, 75, 475, 110);
  triangle(600, 75, 650, 75, 625, 110);
  triangle(750, 75, 800, 75, 775, 110);
  triangle(900, 75, 950, 75, 925, 110);
  triangle(1050, 75, 1100, 75, 1075, 110);
  triangle(1200, 75, 1250, 75, 1225, 110);
  triangle(1350, 75, 1400, 75, 1375, 110);
  triangle(1500, 75, 1550, 75, 1525, 110);

  //top flags white
  fill ('white');
  triangle(75, 75, 125, 75, 100, 110);
  triangle(225, 75, 275, 75, 250, 110);
  triangle(375, 75, 425, 75, 400, 110);
  triangle(525, 75, 575, 75, 550, 110);
  triangle(675, 75, 725, 75, 700, 110);
  triangle(825, 75, 875, 75, 850, 110);
  triangle(975, 75, 1025, 75, 1000, 110);
  triangle(1125, 75, 1175, 75, 1150, 110);
  triangle(1275, 75, 1325, 75, 1300, 110);
  triangle(1425, 75, 1475, 75, 1450, 110);
  triangle(1575, 75, 1625, 75, 1600, 110);

  //bottom flags white
  fill ('white');
  triangle(0, 800, 50, 800, 25, 835);
  triangle(150, 800, 200, 800, 175,835);
  triangle(300, 800, 350, 800, 325, 835);
  triangle(450, 800, 500, 800, 475, 835);
  triangle(600, 800, 650, 800, 625, 835);
  triangle(750, 800, 800, 800, 775, 835);
  triangle(900, 800, 950, 800, 925, 835);
  triangle(1050, 800, 1100, 800, 1075, 835);
  triangle(1200, 800, 1250, 800, 1225, 835);
  triangle(1350, 800, 1400, 800, 1375, 835);
  triangle(1500, 800, 1550, 800, 1525, 835);

  //bottom flags red
  fill ('red');
  triangle(75, 800, 125, 800, 100, 835);
  triangle(225, 800, 275, 800, 250, 835);
  triangle(375, 800, 425, 800, 400, 835);
  triangle(525, 800, 575, 800, 550, 835);
  triangle(675, 800, 725, 800, 700, 835);
  triangle(825, 800, 875, 800, 850, 835);
  triangle(975, 800, 1025, 800, 1000, 835);
  triangle(1125, 800, 1175, 800, 1150, 835);
  triangle(1275, 800, 1325, 800, 1300, 835);
  triangle(1425, 800, 1475, 800, 1450, 835);
  triangle(1575, 800, 1625, 800, 1600, 835);



    let posX = 0;
    let posY = 0;
    
    let angle = Math.atan2(mouseY/10, mouseX/10);

    translate(mouseX, mouseY);
    //rotate(angle);
    rotate(angle + degrees(-270))
  //image(currentImage, mouseX, mouseY);

  translate(location.x, location.y);
  imageMode(CENTER);
  image(currentImage, 0, 0);
 
  swim.resize (150,310);
  swimH = height;
  swimW = width;
  

  swim2.resize (150,310);
  swim2H = height;
  swim2W = width;

  swim3.resize (150,310);
  swim3H = height;
  swim3W = width;

  swim4.resize (150,310);
  swim4H = height;
  swim4W = width;

  if (myCounter < 4){
    currentImage= swim;
  }
  else if (myCounter < 8){
    currentImage = swim2;
  }
  else if (myCounter < 12) {
    currentImage = swim3;
  }
  else if (myCounter < 16){
    currentImage = swim4;
  }


  myCounter++;
  if (myCounter>=20){
    myCounter = 0;
  }
}





function swimmer(){
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this. yspeed =0;

  this.update = function(){
    this.x = this.x + this.xspeed;
    this.y = this.y + this.yspeed;
  }
  this.show = function(){
    image(this.swim, this.mouseX, this.mouseY);
  }
}
//  if (mouseX < 50 && mouseY < 50) {
 // cursor('/img/swimmer1.png');
//} else if (mouseX > 50 && mouseY < 50) {
//  cursor('/img/swimmer2.png');
//} else if (mouseX > 50 && mouseY > 50) {
  //cursor('/img/swimmer3.png');
//} else {
  //cursor('/img/swimmer4.png');
//}
