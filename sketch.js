var fishes = [];
var catchCount = 0;

function setup() {
  createCanvas(900,windowHeight);
  for (var i = 0; i < 12; i++){
    fishes.push(new Fish());
  }
  textFont('Helvetica');
}
class Fish{
  constructor(){
    this.img = fishImg;
    this.x = random(width);
    this.y = random(120, height);  
    this.xSpeed = random(1, 2);
    this.ySpeed = random(-1,1);
    this.pileX = -400;
    this.pileY= -400;
  }
  move() {
    this.x += this.xSpeed;
    this.y += this.ySpeed;
    if(this.y<130||this.y>420){
      if(this.y<130){console.log("over");}
      this.ySpeed = random(-1,1);
       }
    if(this.x>700){
      this.x = random(-300, -200);
      this.y = random(120, 500);
    }
  
  }
  display(){
    image(fishImg, this.x, this.y, 100, 100);
    image(fishImg, this.pileX, this.pileY, 110, 46);
    
    
  }
  addToPile(){
    this.pileX =550+random(70);
    this.pileY = random(-10,20);
    image(fishImg, this.pileX, this.pileY, 110, 46);
    
  }

}
function draw() {
  background(0,200,255);
  noStroke();
  fill(0,176,255);
  
  noFill();
  strokeWeight(1);
  textSize(32);
  noStroke();
  fill(0);
  text('Fish:'+catchCount, 420, 30);
  noFill();  
  strokeWeight(3);
  stroke(0);
  //line(0, 300, 100, 75);
  arc(mouseX, mouseY+95, 30, 60, 0, HALF_PI);
  stroke(255, 255, 0);
  line(mouseX, mouseY-700, mouseX, mouseY+125);
  noFill();
  image(bucketImg, 600, 40, bucketImg.width/18, bucketImg.height/18);
  for(var i = 0; i < 12; i++){
    fishes[i].move();
    fishes[i].display();
    if(mouseX>fishes[i].x && mouseX < fishes[i].x+110 && mouseY+125 > fishes[i].y && mouseY+125 < fishes[i].y+46){
      fishes[i].x=-300;
      catchCount++;
      fishes[i].addToPile();
    }
  }

  
}

function preload(){
  fishImg = loadImage('fish2.png')
  bucketImg = loadImage('bucket.png');
}