
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(100,490,4000,15)
	tree=new Tree(700,285,50,400)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background('lightgrey');
  
  drawSprites();

  ground.display();
  tree.display();
}



