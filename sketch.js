
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	boxsideSprite1=createSprite(300,height-90,20,100)
	boxsideSprite1.shapeColor=color("white")

	boxsideSprite2=createSprite(500,height-90,20,100)
	boxsideSprite2.shapeColor=color("white")

	boxbottomSprite=createSprite(400,height-50,200,20)
	boxbottomSprite.shapeColor=color("white")

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("yellow")

	paper = new Paper(50,100,20,20)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}

function keyPressed(){
	if(keyCode===UP_ARROW) {
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}



