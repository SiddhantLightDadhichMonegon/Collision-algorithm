var fixedRect,movingRect

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 200, 50, 30);
  movingRect = createSprite(300,400,30,80);
  fixedRect.shapeColor = "magenta";
  movingRect.shapeColor = "magenta";
}

function draw() {
  background(255,255,255);  

  movingRect.x = mouseX;
  movingRect.y = mouseY;


  if(movingRect.x-fixedRect.x<movingRect.width/2+fixedRect.width/2 &&
    fixedRect.x-movingRect.x<movingRect.width/2+fixedRect.width/2 &&
    movingRect.y-fixedRect.y<movingRect.height/2+fixedRect.height/2 &&
    fixedRect.y-movingRect.y<movingRect.height/2+fixedRect.height/2){
    fixedRect.shapeColor = "cyan";
    movingRect.shapeColor = "cyan";
  }

  else{
    fixedRect.shapeColor = "magenta";
    movingRect.shapeColor = "magenta";
  }

  drawSprites();
}