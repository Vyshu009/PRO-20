var thickness,wall;
var speed,weight,bullet;

function setup() {
  createCanvas(1600,400);
  bullet = createSprite(30,200,50,30);
  wall = createSprite(1200,200,thickness,height/2);
  speed = random(223,321);
  weight = random(30,52);
  thickness = random(22,83);
}

function draw() {
  background("black");  
  bullet.velocityX = speed;
  bullet.shapeColorcolor= "white";
   hasCollided(bullet,wall);
  drawSprites();

  if(hasCollided(bullet,wall)){
    bullet.velocityX = 0;
    var damage = 0.5* weight* speed* speed/(thickness *thickness *thickness);
  
if (damage>10){
 wall.shapeColor = 255,0,0;
    }
if (damage<10){
wall.shapeColor = 0,255,0;
  }
   }
}
  
if(wall.x-bullet.x <(bullet.width+wall.width)/2){
  bullet.velocityX= 0;
  var deformation=0.5* weight* speed* speed/22509;
if (deformation>180){
  bullet.shapeColor = (yellow);
}
if (deformation<180 && deformation>100){
  bullet.shapeColor = (green);
if(deformation>100){
  bullet.shapeColor = (yellow);
}
}
}

function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLefttEdge = lwall.x;
  if(bulletRightEdge>=wallLefttEdge){
    return true;
}
return false;
}