const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world,dustbin,paper;
var dustbinimage;
 
function preload(){
  dustbinimage= loadImage('dustbingreen.png');
}
function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);

  dustbin1= new DustBin(720, 390, 100, 10);
  dustbin2= new DustBin(680, 350, 10, 100);
  dustbin3= new DustBin(760, 350, 10, 100);
  paper = new Paper(350, 300, 40);
  ground = Bodies.rectangle(width / 2, 400, width, 10,
  {
    isStatic: true
  });
  World.add(world, ground);
}

function draw() {
     background(255);
      
    dustbin1.display();
    paper.display();
    dustbin2.display();
    dustbin3.display();
    image(dustbinimage,670,300,100,100);

  }



function keyPressed(){
  if (keyCode === UP_ARROW) {
    Matter.Body.applyForce(paper.body, paper.body.position, {
      x: 170,
      y: -170
    });
  }
}