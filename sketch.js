const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(320,150,300,20);
	bobObject1 = new Bob(320-80,350,40);
	bobObject2 = new Bob(320-40,350,40);
	bobObject3 = new Bob(320,350,40);
	bobObject4 = new Bob(320+40,350,40);
	bobObject5 = new Bob(320+80,350,40);
	rope1 = new Rope(bobObject1.body,roof.body,-bobObject1.radius*2,0);
	rope2 = new Rope(bobObject2.body,roof.body,-bobObject2.radius*1,0);
	rope3 = new Rope(bobObject3.body,roof.body,0,0);
	rope4 = new Rope(bobObject4.body,roof.body,bobObject4.radius*1,0);
	rope5 = new Rope(bobObject5.body,roof.body,bobObject5.radius*2,0);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgray");
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  if(keyDown("UP_ARROW")){
	Matter.Body.applyForce(bobObject1.body, bobObject1.body.position,{x:-60,y:-55})

  }
  
  drawSprites();
 
}



