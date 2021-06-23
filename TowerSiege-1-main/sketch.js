const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
 var ground,stand;
 var slingShot,polygon,polygonImg;
 var gameState = "onSling";

 function preload(){
     polygonImg = loadImage("polygon.png");
 }

function setup(){
    var canvas = createCanvas(900,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(450,390,900,20);
    stand = new Stand(390,300,250,10);
    fill("blue");
    box1 = new Box(300,275,30,40);
    box2 = new Box(330,275,30,40);
    box3 = new Box(360,275,30,40);
    box4 = new Box(390,275,30,40);
    box5 = new Box(420,275,30,40);
    box6 = new Box(450,275,30,40);
    box7 = new Box(480,275,30,40);
fill("pink");
    box8 = new Box(330,235,30,40);
    box9 = new Box(360,235,30,40);
    box10 = new Box(390,235,30,40);
    box11 = new Box(420,235,30,40);
    box12 = new Box(450,235,30,40);
fill("turquoise");
    box13 = new Box(360,195,30,40);
    box14 = new Box(390,195,30,40);
    box15 = new Box(420,195,30,40);
    box16 = new Box(390,155,30,40);

    polygon = Bodies.circle(50,200,20);
    World.add(world,polygon);
    slingShot = new SlingShot(this.polygon,{x:100,y:200});
    
}

function draw(){
    background(0);
    ground.display();
    stand.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();
    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    imageMode(CENTER);
    image(polygonImg,polygon.position.x,polygon.position.y,40,40);
    slingShot.display();
}

function mouseDragged(){
   if (gameState!=="launched"){
        Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
   }
}

function mouseReleased(){
    console.log("hi");
    slingShot.fly();
    gameState = "launched";
}