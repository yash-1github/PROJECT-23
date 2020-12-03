const Engine = Matter.Engine;//1 name spacing, libraries adding 
const World= Matter.World;
const Bodies = Matter.Bodies;

var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,wall1;	


function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}
	
function setup() {
	createCanvas(800, 700);
	engine = Engine.create();//creating engine 
    world = engine.world;//defining world for engine 

	
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.3, isStatic: true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);


	wall1 = new Wall(370,650,200,20);
	wall2 = new Wall(270,610,20,100);
	wall3 = new Wall(470,610,20,100);
	
  
}


function draw() {
	background(75);
	Engine.update(engine);
  rectMode(CENTER);


  wall1.display();
  wall2.display();
  wall3.display();
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 


  keyPressed();
  drawSprites();
  
 

}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	
	
	Matter.Body.setStatic(packageBody, false);
    
  }
}

