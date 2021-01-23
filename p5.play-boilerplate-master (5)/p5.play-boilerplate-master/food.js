function createFood(){


var randx = random(20,380);
var randy = random(20,380);

foodparticle1 = createSprite(randx,randy,10,10)
foodparticle1.shapeColor = "red"



computerbug.x = foodparticle1.x

if( foodparticle1.y < 200){
   
   computerbug.velocityY = -1
   computerbug.rotation = -90
}

if(foodparticle1.y > 200){

  computerbug.velocityY = 1
  computerbug.rotation = 90
}
}