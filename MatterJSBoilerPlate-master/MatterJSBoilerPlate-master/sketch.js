
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	box1 = new Box(200,0,50,10);
	box2 = new Box(250,10,10,50);
	box3 = new Box(150,10,10,50);

	paper1 = new paper(50,50,5);

	dustbin1 = new dustbin(200,0,100,50);
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	Engine.run(engine);
    Engine.update(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 box1.display();
 
 box2.display();
 box3.display();
 dustbin1.display();
 paper1.display();
}

function keypressed(){
if(keycode === UP_ARROW){
Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});


}
}

