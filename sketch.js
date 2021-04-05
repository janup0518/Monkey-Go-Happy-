
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var survivalTime

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
 monkey= createSprite(30,200,10,10)
 monkey.addAnimation("running", monkey_running)
 monkey.scale=0.1

 ground= createSprite(400,350,900,10)
 ground.velocityX=-5
  
 bananaGroup=createGroup();
 obstacleGroup=createGroup();
}


function draw() {
background("white")

if(keyDown("space")&& monkey.y >=100) {
  monkey.velocityY=-10
}
monkey.velocityY= monkey.velocityY + 0.8 
monkey.collide(ground)
  
ground.x= ground.width/2  

survivalTime=0
 
survivalTime=Math.ceil(frameCount/frameRate())  
text("Survival Time:"+ survivalTime, 100, 50)
  
spawnFood();  
spawnObstacles();
drawSprites();
}

function spawnFood(){
  if(frameCount% 80===0){
    banana= createSprite(400,200,10,10)
    banana.velocityX=-7
    banana.y=Math.round(random(120,200))
    banana.setLifetime=100
    banana.addImage(bananaImage)
    banana.scale=0.1
    bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  if(frameCount% 300===0){
    obstacle=createSprite(400,325,10,10)
    obstacle.velocityX=-7
    obstacle.setLifetime=100
    obstacle.addImage(obstacleImage)
    obstacle.scale=0.1
    obstacleGroup.add(obstacle)
  }
}


