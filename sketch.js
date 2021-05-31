var START = 0;
var PLAY = 1;
var END = 2;
var gameState = START;
var count = 2;
var Score = 0;
var movement = [1, -1];
var direction = [0, 90, 180, 270];

var life = 2;
var edge;
var bg,bgImg,bgSound;
var bob,bobImg;
var lady,ladyImg,ladyShout;
var police,policeImg,policeShout;
var dog,dogImg,dogBark;
var opentreasure,opentreasureImg,treasureSound;
var coin,coinImg,coinGroup;
var life1,life1Img;
var life2,life2Img;
var restart,restartImg;
var fight,fightImg,fightSound;
var gameOver,gameOverImg;
var button;
var diamond,diamondImg;
var door;

var wall1,wall2,wall3,wall4,wall5;
var wall6,wall7,wall8,wall9,wall10;
var wall11,wall12,wall13,wall14,wall15;
var wall16,wall17,wall18,wall19,wall20;
var wall21,wall22,wall23,wall24,wall25;
var wall26,wall27,wall28,wall29,wall30;
var wall31,wall32,wall33,wall34,wall35;
var wall36,wall37,wall38,wall39,wall40;
var wall41,wall42,wall43,wall44,wall45;
var wall46,wall47,wall48,wall49,wall50;
var wall51,wall52,wall53;
var wallGroup;
var edge;
var r;

function preload() {
  
bgImg = loadImage("images/bg.png");
ladyImg = loadImage("images/lady.png");
policeImg = loadImage("images/police.png");
dogImg = loadImage("images/dog.png");
coinImg =loadImage("images/gold coin.png"); 
life1Img = loadImage("images/life1.jpg");
life2Img = loadImage("images/life2.jpg");  
restartImg = loadImage("images/restart.png"); 
gameOverImg = loadImage("images/gameover.jpg");
diamondImg = loadImage("images/diamond.png"); 
ladyShout= loadSound("sounds/lady shout.mp3");
bgSound= loadSound("sounds/bg sound.mp3");
dogBark = loadSound("sounds/Dog Barking.mp3");
treasureSound = loadSound("sounds/Treasure sound.mp3");
fightSound = loadSound("sounds/fighting sound.mp3");
fightImg = loadAnimation("images/fighting cloud.png");
bobImg = loadAnimation("images/bob.png");
opentreasureImg = loadAnimation("images/treasure.png");
closetreasureImg=loadAnimation("images/closeTreasure.png");
  
}

function setup() {
  createCanvas(530,520); 
  
  bgSound.play();
  bgSound.playMode('restart');
 
  coinGroup = new Group();
  wallGroup = new Group();
  wallGroup = new Group()

  bob = createSprite(260,460,10,10);
  bob.addAnimation("thief",bobImg);
  bob.addAnimation("cloud",fightImg);
  bob.scale = 0.25;
  
  lady = createSprite(80,190,10,10);
  lady.addImage(ladyImg);
  lady.scale = 0.3;
  
  
  police = createSprite(420,90,10,10);
  police.addImage(policeImg);
  police.scale = 0.3;
  
  
  dog = createSprite(250,230,10,10);
  dog.addImage(dogImg);
  dog.scale = 0.2;
  dog.setCollider("circle",-60,70,90);
  //dog.depth = bob.depth;
  //bob.depth = bob.depth + 1;
  
  closetreasure = createSprite(60,420,10,10);
  closetreasure.addAnimation("close",closetreasureImg);
  closetreasure.addAnimation("open",opentreasureImg);
  closetreasure.scale = 0.4; 
  closetreasure.setCollider("circle",-20,10,60);
  closetreasure.depth = bob.depth;
  bob.depth = bob.depth + 1;
  
  diamond = createSprite(235,30,10,10);
  diamond.addImage(diamondImg);
  diamond.scale = 0.06;
  
  life1 = createSprite(400,480,10,10);
  life1.addImage(life1Img);
  life1.scale = 0.05;
  life2 = createSprite(430,480,10,10);
  life2.addImage(life2Img);
  life2.scale = 0.05;

  restart= createSprite(265,250,10,10);
  restart.addImage(restartImg);
  restart.scale = 0.6;
  restart.visible = false;
  
  gameOver= createSprite(260,260,10,10);
  gameOver.addImage(gameOverImg);
  gameOver.scale = 0.25;
  gameOver.visible = false;

  button = createButton('Start');
  button.position(200,410,20,30);
  
 door= createSprite(180,380,9,50);
 door.shapeColor=("red");
  
 wall1 = createSprite(25,20,20,20);
 wall1.visible = false;
 wall2 = createSprite(92,20,97,18);
 wall2.visible = false;
 wall3 = createSprite(160,20,20,20);
 wall3.visible = false;
 wall4 = createSprite(156,118,20,20);
 wall4.visible = false;
 wall5 = createSprite(158,210,15,15);
 wall5.visible = false;
 wall6 = createSprite(25,210,15,15);
 wall6.visible = false;
 wall7 = createSprite(94,85,80,25);
 wall7.visible = false;
 wall8 = createSprite(94,150,80,25);
 wall8.visible = false;
 wall9 = createSprite(125,425,95,35);
 wall9.visible = false;
 wall10 = createSprite(95,390,85,60);
 wall10.visible = false;
 wall11 = createSprite(205,348,20,20);
 wall11.visible = false;
 wall12 = createSprite(268,328,105,10);
 wall12.visible = false;
 wall13 = createSprite(203,290,25,40);
 wall13.visible = false;
 wall14 = createSprite(265,290,25,40);
 wall14.visible = false;
 wall15 = createSprite(330,290,25,40);
 wall15.visible = false;
 wall16 = createSprite(330,160,25,30);
 wall16.visible = false;
 wall17 = createSprite(270,170,25,40);
 wall17.visible = false;
 wall18 = createSprite(200,170,25,40);
 wall18.visible = false;
 wall19 = createSprite(233,165,27,27);
 wall19.visible = false;
 wall20 = createSprite(302,165,27,27);
 wall20.visible = false;
 wall21 = createSprite(302,297,27,27);
 wall21.visible = false;
 wall22 = createSprite(230,297,27,27);
 wall22.visible = false;
 wall23 = createSprite(330,120,27,27);
 wall23.visible = false;
 wall24 = createSprite(274,126,61,15);
 wall24.visible = false;
 wall25 = createSprite(200,75,35,120);
 wall25.visible = false;
 wall26 = createSprite(375,420,25,25);
 wall26.visible = false;
 wall27 = createSprite(490,425,20,20);
 wall27.visible = false;
 wall28 = createSprite(490,360,50,70);
 wall28.visible = false;
 wall29 = createSprite(465,240,30,20);
 wall29.visible = false;
 wall30 = createSprite(465,290,20,20);
 wall30.visible = false;
 wall31 = createSprite(375,250,30,40);
 wall31.visible = false;
 wall32 = createSprite(506,280,30,60);
 wall32.visible = false;
 wall33 = createSprite(380,30,20,20);
 wall33.visible = false;
 wall34 = createSprite(373,120,29,29);
 wall34.visible = false;
 wall35 = createSprite(506,170,30,90);
 wall35.visible = false;
 wall36 = createSprite(485,165,30,40);
 wall36.visible = false;
 wall37 = createSprite(500,100,20,20);
 wall37.visible = false;
 wall38 = createSprite(480,50,77,77);
 wall38.visible = false;
 wall39 = createSprite(180,120,8,220);
 wall39.visible = false;
 wall40 = createSprite(160,228,50,8);
 wall40.visible = false;
 wall41 = createSprite(30,228,50,8);
 wall41.visible = false;
 wall42 = createSprite(268,138,166,8);
 wall42.visible = false;
 wall43 = createSprite(353,30,8,35);
 wall43.visible = false;
 wall44 = createSprite(353,140,8,60);
 wall44.visible = false;
 wall45 = createSprite(353,295,8,120);
 wall45.visible = false;
 wall46 = createSprite(180,315,8,70);
 wall46.visible = false;
 wall47 = createSprite(280,315,205,8);
 wall47.visible = false;
 wall48 = createSprite(484,315,75,8);
 wall48.visible = false;
 wall49 = createSprite(372,227,45,8);
 wall49.visible = false;
 wall50 = createSprite(180,425,8,40);
 wall50.visible = false;
 wall51 = createSprite(355,425,8,40);
 wall51.visible = false;
 wall52 = createSprite(435,448,150,8);
 wall52.visible = false;
 wall53 = createSprite(90,445,150,8);
 wall53.visible = false;
  
wallGroup.add(wall1);
wallGroup.add(wall2);
wallGroup.add(wall3);
wallGroup.add(wall4);
wallGroup.add(wall5);
wallGroup.add(wall6);
wallGroup.add(wall7);
wallGroup.add(wall8);
wallGroup.add(wall9);
wallGroup.add(wall10);
wallGroup.add(wall11);
wallGroup.add(wall12);
wallGroup.add(wall13);
wallGroup.add(wall14);
wallGroup.add(wall15);
wallGroup.add(wall16);
wallGroup.add(wall17);
wallGroup.add(wall18);
wallGroup.add(wall19);
wallGroup.add(wall20);
wallGroup.add(wall21);
wallGroup.add(wall22);
wallGroup.add(wall23);
wallGroup.add(wall24);
wallGroup.add(wall25);
wallGroup.add(wall26);
wallGroup.add(wall27);
wallGroup.add(wall28);
wallGroup.add(wall29);
wallGroup.add(wall30);
wallGroup.add(wall31);
wallGroup.add(wall32);
wallGroup.add(wall33);
wallGroup.add(wall34);
wallGroup.add(wall35);
wallGroup.add(wall36);
wallGroup.add(wall37);
wallGroup.add(wall38);
wallGroup.add(wall39);
wallGroup.add(wall40);
wallGroup.add(wall41);
wallGroup.add(wall42);
wallGroup.add(wall43);
wallGroup.add(wall44);
wallGroup.add(wall45);
wallGroup.add(wall46);
wallGroup.add(wall47);
wallGroup.add(wall48);
wallGroup.add(wall49);
wallGroup.add(wall50);
wallGroup.add(wall51);
wallGroup.add(wall52);
wallGroup.add(wall53);
  
  Score = 0;
}

function draw() {
  background("white");
  background(bgImg);
   
  if (gameState === START){
    
  background("black");    
  textSize(20);
  textStyle(BOLD);
  fill("yellow");
  text("*ROBBERY ROB*",150,50);
  textStyle(NORMAL);
  fill("rgb(100,230,10)");
  text(" #*RULES TO PLAY GAME*..",5,95);
  fill("white");
  text("*Use arrowkeys to move bob in all directions.",6,130);
  text("*Help bob to steal the coins and treasure.",6,160);
  text("*You will have only 2 life's in game.",6,190); 
  text("*If bob touches the lady, dog or police for the first time.",6,220);
  text("*The game will restart",5,250);
  text("*And if bob touches the lady, dog or police for the \n second time.",6,280);
  text("*You will Lose!!.",6,330);
  text("*If you collect the diamond, the shortcut door to treasure \n will open.",5,357)
  fill("orange");
  text("*ALL THE BEST*",150,400);

   button.mousePressed(changeState);       
}
 
  else if(gameState === PLAY){
    
     background("white");
     background(bgImg);
     button.hide();  
     drawSprites();
    
      fill("red");
      textStyle(BOLD);
      textSize(20);
      text("Score: "+ Score,90,505);
    
  edge = createEdgeSprites();
  bob.bounceOff(edge);
   
  charMovement(); 
    
  if(bob.isTouching(dog)){
     dogBark.play();
     dogBark.playMode('restart');
    lady.visible = false;
    police.visible=false;
    dog.visible=false;
     life = life-1;
     gameState = END;
 }
   else if(bob.isTouching(lady)){
     fightSound.play();
     fightSound.playMode('restart');
     bob.changeAnimation("cloud");
     lady.visible = false;
     police.visible=false;
      dog.visible=false;
     life = life-1;
     gameState = END;
 }
  else if(bob.isTouching(police)){
     fightSound.play();
     fightSound.playMode('restart');
     bob.changeAnimation("cloud");
     police.visible = false;  
    lady.visible = false;
     dog.visible=false;
     life = life-1;
     gameState = END;
 }  
    
    if(bob.isTouching(diamond)){
      door.visible=false;
      diamond.visible=false;
    }
    
  
 if (keyDown("UP_ARROW")) {
  bob.rotation=0;
  bob.y = bob.y -3;
}

if (keyDown("DOWN_ARROW")){
  bob.rotation=180;
  bob.y = bob.y +3;
}

if (keyDown("RIGHT_ARROW")){
  bob.rotation=90;
  bob.x = bob.x +3;
}

if (keyDown("LEFT_ARROW")){
  bob.rotation=270;
  bob.x = bob.x -3;
  
}  
   spawnCoins();
     
   coinGroup.lifeTime = 10;
  
   if(coinGroup.isTouching(bob)){
   for(var i =0;i<coinGroup.length;i++){
   if(coinGroup[i].isTouching(bob)){      
   coinGroup[i].destroy();   
      Score = Score + 1;
  } }}
  
  if(bob.isTouching(closetreasure)){
    treasureSound.play();
    treasureSound.playMode('restart');
    closetreasure.changeAnimation("open",opentreasureImg);
    gameState = END;
    gameOver.visible = true;
    door.visible = false;
    restart.visible = false;
    coinGroup.destroyEach();
  }

bob.bounce(wallGroup);
bob.bounce(door);

     
} 
 else if(gameState === END){
     
      drawSprites();
      bgSound.stop();
      restart.visible = true;
      fill("red");
      textStyle(BOLD);
      textSize(20);
      text("Score: "+ Score,90,505);
   
   
    if(life === 1){
    if(mousePressedOver(restart)){
      
      reset();
    
  }
  
     life1.visible = false;
     
    } else if (life===0){
     life2.visible = false;
     coinGroup.destroyEach();
      door.visible = false;
     
     restart.visible = false;
     gameOver.visible = true;    
     
   } }
}

function spawnCoins(){
  
  if(frameCount%100===0){    
  coin = createSprite(20,30,10,10);
  coin.x = Math.round(random(0,500));
  coin.y = Math.round(random(0,430));
  coin.addImage(coinImg);
  coin.scale = 0.03;
  coinGroup.add(coin);
  }  
}
  
  function changeState(){ 
  gameState = PLAY;
  lady.velocityY=1;
  police.velocityY=1;
}

function charMovement(){
  
  if(lady.collide(wallGroup) || lady.bounceOff(edge) || lady.bounceOff(dog) || lady.bounceOff(door)) {
    rotateCharacter(lady);
  }
  
  if(police.collide(wallGroup) || police.bounceOff(edge) || police.bounceOff(dog) || police.bounceOff(door)) {
    rotateCharacter(police);
  }
  
 // lady.bounce(police);
  
}

function rotateCharacter(char) {
  char.rotation = random(direction);
  moveCharacter(char);  
}

function moveCharacter(char) {
  if(char.rotation == 0) char.velocityX = 1;
  if(char.rotation == 90) char.velocityY = 1;
  if(char.rotation == 180) char.velocityX = -1;
  if(char.rotation == 270) char.velocityY = -1;
}

function reset(){
  
  restart.visible=false;
  lady.visible = true;
  police.visible = true;
  dog.visible=true;
  diamond.visible=true;
  door.visible = true;
  bob.x=260;
  bob.y=460;
  police.x=420;
  police.y=90;
  lady.x=80;
  lady.y=190;
  Score = 0;
  coinGroup.destroyEach();
  
  
  bob.changeAnimation("thief",bobImg);
  
  bgSound.play();
  bgSound.playMode('restart');
   gameState = PLAY;
}


