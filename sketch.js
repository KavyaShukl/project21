var canvas;
var box1,box2,box3,box4;
var block;
var music;
var edges = edges
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(80,590,180,30);
    box1.shapeColor = "blue";

    box2 = createSprite(290,590,180,30);
    box2.shapeColor = "yellow";

    box3 = createSprite(500,590,180,30);
    box3.shapeColor = "magenta";

    box4 = createSprite(710,590,180,30);
    box4.shapeColor = "green";

//create box sprite and give velocity

    block = createSprite(random(20,750),30,30,30);
    block.shapeColor = "white";
    block.velocityX = 8;
    block.velocityY = 8;

    music.play();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite

  edges = createEdgeSprites();
  block. bounceOff(edges);

  if(box1.isTouching(block)){
      block.shapeColor ="blue";
  }
  if(box2.isTouching(block)){
    block.shapeColor ="yellow";
    block.velocityX = 0;
    block.velocityY = 0;
    music.stop();
}
if(box3.isTouching(block)){
    block.shapeColor ="magenta";
}
if(box4.isTouching(block)){
    block.shapeColor ="green";
}

    drawSprites();
    

    //add condition to check if box touching surface and make it box
   
}
