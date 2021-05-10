var bgImg;
var cat;
function preload() {
    //load the images here
    bg=loadImage("images/garden.png")
    catimg1=loadAnimation("images/cat.png")
    mouseimg1=loadAnimation("images/mouse1.png")
    catimg2=loadAnimation("images/cat3.png,cat2.png")
    mouseimg2=loadAnimation("images/mouse2.png,mouse3.png")
}

function setup(){
    createCanvas(1000,800);
 cat = createSprite(50,180,20,50);
  cat.addAnimation(catimg);
 

    //create tom and jerry sprites here

}

function draw() {

    background(255);
    background(bgImg);
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
