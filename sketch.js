var score = 5;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;
var goal1  
var goal2
function preload(){

}

function setup() {
    
  goal1 = createSprite(370,190,52,140) 
  goal1.shapeColor = "yellow"

  goal2 = createSprite(10,190,52,140)
  goal2.shapeColor = "green"

    sam = createSprite(20,190,13,13);
  sam.shapeColor = "black";
  boundary1 = createSprite(190,120,420,3)
  boundary2 = createSprite(190,260,420,3)

 
   
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red"; 

  car1.velocityY =  8 
 car2.velocityY = 8
 car3.velocityY = -8 
 car4.velocityY = -8
}
  
function draw() {
   background("white");
  text("Score: " + score,200,100);
  
  
  car1.bounceOff(boundary1);
    car1.bounceOff(boundary2);
  car2.bounceOff(boundary1);
    car2.bounceOff(boundary2);
      car3.bounceOff(boundary1);
    car3.bounceOff(boundary2);
      car4.bounceOff(boundary1);
    car4.bounceOff(boundary2);
  
// create bounceoff function to make the car bounceoff the boundaries
//Add the condition to make the sam move left and right
if (keyDown("RIGHT_ARROW")){
    sam.x=sam.x+8
  }
if (keyDown("LEFT_ARROW")){
    sam.x=sam.x-8
  }
//Add the condition to reduce the life of sam if it touches the car.
  if (sam.isTouching(car1)||sam.isTouching(car2)|| sam.isTouching(car3)||sam.isTouching(car4)){
    sam.x=20
    score= score-1
    
  }
  
  if(sam.isTouching(goal1)){
    score = score+1
    sam.velocityX = velocityX+5
    text("Nice",150,200)
    car1.velocityY = velocityY+2
    car2.velocityY = velocityY+2
    car3.velocityY = velocityY+2
    car4.velocityY = velocityY+2
}

  
  if (score===0){
    text("You Lose",150,200)
    sam.velocityX = 0
    car1.velocityY = 0
    car2.velocityY = 0
    car3.velocityY = 0
    car4.velocityY = 0

    
  }
  
 
  
 drawSprites();
}
