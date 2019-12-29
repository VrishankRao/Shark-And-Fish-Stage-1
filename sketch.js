var platform;
var bg;
var shark;
var ground;

function preload() {
  bg = loadImage("ocean.jpg");
}

function setup() {
  createCanvas(800,400);

  shark = createSprite(400,350,20,50);

  ground = createSprite(400,390,800,20);
  ground.visible = false;

}

function draw() {
  background(bg);  

  if(frameCount % 40 === 0){
    platform = createSprite(random(200,600),0,60,10);
    platform.velocityX = 0;
    platform.velocityY = 3;

    platform.shapeColor = "red";

  }

  if(keyDown("space")){
    shark.velocityY = -12;
  }
    shark.velocityY = shark.velocityY + 0.4;
    
    shark.collide(ground);

  if(keyWentDown("RIGHT_ARROW")){
    shark.velocityX = 4;

  }

  if(keyWentUp("RIGHT_ARROW")){
    shark.velocityX = 0;

  }

  if(keyWentDown("LEFT_ARROW")){
    shark.velocityX = -4;

  }

  if(keyWentUp("LEFT_ARROW")){
    shark.velocityX = 0;

  }



  drawSprites();
  

  
}


