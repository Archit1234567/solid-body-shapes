const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,ground,box;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
     box = new Box (160,300,50,100);
    box1 = new Box(200,100,50,50);
   ground = new Ground (200,height,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box.display();
   console.log (mouseX,mouseY);
}