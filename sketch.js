var seaImg,shipImg1,spriteName,ship;

function preload(){
seaImg = loadImage("sea.png");
shipImg1=loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
};
function setup(){
  createCanvas(600,400);
  spriteName = createSprite(300,200,600,400);
  spriteName.addImage(seaImg);
  spriteName.scale = 0.3;
  
  
ship = createSprite(200,200,20,20);
ship.addAnimation("moving",shipImg1);
ship.scale=0.2;

}


function draw() {

  background("blue");
  if(spriteName<0){
    spriteName.x = spriteName.width/2;
  }
 drawSprites();
}