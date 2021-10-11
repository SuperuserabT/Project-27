var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
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
	bobObject1 = new Bob(420,200,10);
	bobObject2 = new Bob(410,200,10);
	bobObject3 = new Bob(400,200,10);
	bobObject4 = new Bob(390,200,10);
	bobObject5 = new Bob(380,200,10);

	constructor(body1,body2, offsetX, offsetY)
	{
		this.offsetX=this.offsetX
		this.offsetY=this.offsetY
		var oprions={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.offsetX, y:this.offsetY}
		}
		this.rope=Constraint.create(options)
		World.add(world,this.rope)
	}

	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)
	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*2, 0)
	rope3=new rope(bobObject3.body,roofObject.body,-bobDiameter*2, 0)
	rope4=new rope(bobObject4.body,roofObject.body,-bobDiameter*2, 0)
	rope5=new rope(bobObject5.body,roofObject.body,-bobDiameter*2, 0)

	Engine.run(engine);

	if(keyIsDown(UP_ARROW)){
		bobObject1.velocityX = -5
		bobObject1.velocityY = -5
	}
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

 drawSprites();
}



