var Ball, JumpPad, Lava1, Lava2, Lava3, Lava4, PurplePad, Poison, PushPad, YellowPad, whitehat1;

var BallImage, JumpPadImage, LavaImage, PurplePadImage, PoisonImage, PushPadImage, YellowPadImage, whitehat1Image;
var bg;
var pngTempelate1, pngTempelate2, pngTempelate3;
var pngTempelate1Img, pngTempelate2Img, pngTempelate3Img;
var gameState=1;
var L1;


function preload(){
  BallImage=loadImage("BallWhitehat.jpg");
  JumpPadImage=loadImage("JumpPadWhitehat.jpg");
  LavaImage=loadImage("LavaWhitehat.jpg");
  PurplePadImage=loadImage("PurplePadWhitehat.jpg");
  PoisonImage=loadImage("PoisonWhitehat.jpg");
  PushPadImage=loadImage("PushPadWhitehat.jpg");
  YellowPadImage=loadImage("YellowSquareWhitehat.jpg");
  whitehat1Image=loadImage("whitehat1.jpg");
  bg=loadImage("background_santa.png");
  pngTempelate1Img=loadAnimation("PngTempelate(2).png","PngTempelate(3).png", "PngTempelate(4).png", "PngTempelate(3).png");
  pngTempelate2Img=loadImage("PngTempelate(3).png");
  //pngTempelate3Img=loadImage("PngTempelate(4).png");
  

}

function setup() {
  createCanvas(650, 550);
  
  for(i=35;i<650;i=i+140){
    L1=createSprite(i,110,70,70);
    L1.shapeColor="red"
    L1.velocityY=2;
   }
  
  for(i=105;i<650;i=i+140){
    L1=createSprite(i,180,70,70);
    L1.shapeColor="red"
    L1.velocityY=2;

   }
   for(i=35;i<650;i=i+140){
   L1=createSprite(i,250,70,70);
   L1.shapeColor="red"
   L1.velocityY=2;
   }
   
   for(i=105;i<650;i=i+140){
    L1=createSprite(i,320,70,70);
    L1.shapeColor="red"
    L1.velocityY=2;

   }
 

     pngTempelate2=createSprite(273,400);
     pngTempelate2.addAnimation("pngTempelate",pngTempelate1Img);
     pngTempelate2.scale=0.7;

     /*pngTempelate3=createSprite(320,400);
     pngTempelate3.addImage(pngTempelate3Img);
     pngTempelate3.scale=10;*/
           
}


function draw() {
  background("black");

if(keyDown("left")){
  pngTempelate2.x= pngTempelate2.x-4;
}

if(keyDown("right")){
  pngTempelate2.x= pngTempelate2.x+4;
}

if(keyDown("space")){
  pngTempelate2.velocityY=-8;
}

pngTempelate2.velocityY=0;


  drawSprites();
}
