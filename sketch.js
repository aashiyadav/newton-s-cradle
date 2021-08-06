const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;
var bobObject1,bobObject2,bobObject3, bobObject4,bobObject5, roofObject
var rope1,rope2,rope3, rope4,rope5;
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;

	roofObject=new roof(width/2,height/4,width/8,20);

	bobDiameter=40;

	startBobPositionX=width/2;
	startBobPositionY=width/4;
	bobObject1=new bob(startBobPositionX-bobDiameter*2,startBobPositionY,bobDiameter);
	bobObject2=new bob(startBobPositionX-bobDiameter,startBobPositionY,bobDiameter);
	bobObject3=new bob(startBobPositionX,startBobPositionY,bobDiameter);
	bobObject4=new bob(startBobPositionX+bobDiameter,startBobPositionY,bobDiameter);
	bobObject5=new bob(startBobPositionX+bobDiameter*2,startBobPositionY,bobDiameter);
	
	
	
	



	rope1=new rope(bobObject1.body,roofObject.body,-bobDiameter*2, 0)

	rope2=new rope(bobObject2.body,roofObject.body,-bobDiameter*1, 0)
	rope3=new rope(bobObject3.body,roofObject.body,0, 0)
	rope4=new rope(bobObject4.body,roofObject.body,bobDiameter*1, 0)
	rope5=new rope(bobObject5.body,roofObject.body,bobDiameter*2, 0)

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(23);
  roofObject.display();

  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()	
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
textSize(15)
  strokeWeight(8);
  stroke("blue");
  fill("red");
  text("for 1st ball press up arrow key ",700,100);
  
  fill("red");
  text("for 1st and 2nd  ball press enter key",700,80);
 
  fill("red");
  text("for 1st,2nd and 3rd ball press down arrow key ",700,60);
  
  fill("red");
  text("for 1st,2nd 3rd and 4th ball press space key",700,40);

  fill("red");
  text("for 1st,2nd 3rd 4th and 5th ball press shift key",700,20);
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});

	  }
	  
	  if (keyCode === DOWN_ARROW) {

		Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	  }
	   if (keyCode === ENTER) {

		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	  }

	  if (keyCode ===32) {

		Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	  }

	  if (keyCode ===SHIFT) {

		Matter.Body.applyForce(bobObject5.body,bobObject5.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject3.body,bobObject3.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject2.body,bobObject2.body.position,{x:-50,y:-45});
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-50,y:-45});
	  }


}


function drawLine(constraint)
{
	bobBodyPosition=constraint.bodyA.position
	roofBodyPosition=constraint.bodyB.position

	roofBodyOffset=constraint.pointB;
	
	roofBodyX=roofBodyPosition.x+roofBodyOffset.x
	roofBodyY=roofBodyPosition.y+roofBodyOffset.y
	line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}