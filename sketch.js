
var backGround, backGroundI;

var mouse, mouse_run;

var  cat ,  cat_running ;

function  preload ( )  {

    backGroundI = loadImage("garden.png");

    mouseI  =  loadAnimation ("mouse1.png");

    mouseImage4 = loadAnimation("mouse4.png");

    mouse_run = loadAnimation("mouse2.png", "mouse3.png");

    catI1 = loadAnimation("cat1.png");

    catI4 = loadAnimation("cat4.png");

    cat_running = loadAnimation("cat2.png","cat3.png");

}

function setup(){
    createCanvas(680,400);
    
    backGround = createSprite(340, 200);
    backGround.addImage("backGroundI", backGroundI);
    backGround.scale = 0.7;

    cat = createSprite(500, 340, 20, 100);
    cat.addAnimation("catI1", catI1);
    cat . scale  =  0.1 ;

    mouse = createSprite(200, 340, 10, 40);
    mouse.addAnimation("mouseI", mouseI);
    mouse.scale = 0.1;

}

function draw() {


if (cat.x - mouse.x < cat.width / 2 - mouse.width / 2) {
       cat.velocityX = 0;
       cat.addAnimation("catI4", catI4);
       cat.changeAnimation("catI4");
       cat.x = 300;

       mouse.addAnimation("mouseImage4", mouseImage4);
       mouse.changeAnimation("mouseImage4");
    }

    drawSprites();
}

function keyPressed() {
    
    if (keyCode === LEFT_ARROW) {

        cat.velocityX = -5;
        cat.addAnimation("cat_running", cat_running);
        cat.changeAnimation("cat_running");

        mouse.addAnimation("mouse_run", mouse_run);
        mouse.changeAnimation("mouse_run");
    }
    
}