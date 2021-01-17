var playerbug
var computerbug
var wall1
var wall2
var wall3
var wall4
var enemybugimg
var playerbugimg
var foodparticle1;


var gameState = "Start"

var score = 0

function preload(){

  enemybugimg = loadImage('enemybug.png')
  playerbugimg = loadImage('playerbug.png')


}

function setup() {
  createCanvas(500,400);
  playerbug = createSprite(100, 200, 10, 10);
  computerbug = createSprite(400,200,10,10);

  playerbug.addImage(playerbugimg)
  computerbug.addImage(enemybugimg)

  playerbug.scale = 0.11
  computerbug.scale = 0.11

  playerbug.rotation = -90
  computerbug.rotation = -90

  wall1 = createSprite(0,395,1000,10);
  wall2 = createSprite(0,5,1000,10);
  wall3 = createSprite(495,200,10,1000);
  wall4 = createSprite(5,200,10,1000);

  createFood()
}

function draw() {
  background("yellow");  
  wall1.shapeColor = "orange";
  wall2.shapeColor = "orange";
  wall3.shapeColor = "orange";
  wall4.shapeColor = "orange";

  playerbug.shapeColor = "lime";
  computerbug.shapeColor = "red";

  if(gameState == "Start"){
    stroke("red")
    textSize(15)
    text("Defeat The Enemy Bug -->",160,205);
    text("Press Spacebar to start",160,220);
    text("Avoid Touching The Walls",160,235);

    if(keyDown("space")){
      gameState = "play";

    }
  
  }

  if(gameState == "play"){
     
    if(keyDown (UP_ARROW)){
      playerbug.velocityY = -3
      playerbug.velocityX = 0

      playerbug.rotation = 270;
    }
    
    
    if(keyDown (DOWN_ARROW)){
      playerbug.velocityY = 3
      playerbug.velocityX = 0

      playerbug.rotation = 90;
    }
    
    if(keyDown (LEFT_ARROW)){
      playerbug.velocityX = -3
      playerbug.velocityY = 0

      playerbug.rotation = 180
    }
    
    if(keyDown (RIGHT_ARROW)){
      playerbug.velocityX = 3
      playerbug.velocityY = 0

      playerbug.rotation = 0
    }
    
 

    if(playerbug.isTouching(foodparticle1)){
      foodparticle1.destroy()
      score = score + 2;
      createFood()

    }

    if(computerbug.isTouching(foodparticle1)){
      foodparticle1.destroy()
      createFood()

    }

    
     
    drawSprites();    
    
    stroke("red")
    textSize(15)
    text("Score:"+ score,200,30)
  }
    if(playerbug.isTouching(wall1)|| playerbug.isTouching(wall2) || playerbug.isTouching(wall3)|| playerbug.isTouching(wall4)){
      gameState = "end"
     
   }
   if(gameState == "end"){
     textSize(15)
      text("GameOver",200,200)

   }
  
   if(score == 20){
     gameState = "finished"
     stroke("orange")
     textSize(20)
     text("You Win!",200,200)


   }
 

  
}