const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload() {
    img=loadImage('polygon.png');
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground(600,390,1200,20);
  stand1 = new Ground(380,300,270,10);
  stand2 = new Ground(700,200,200,10);
 
  //level one
  block1 = new Block(280,275,30,40);  
  block2 = new Block(310,275,30,40);
  block3 = new Block(340,275,30,40);
  block4 = new Block(370,275,30,40);
  block5 = new Block(400,275,30,40);
  block6 = new Block(430,275,30,40);
  block7 = new Block(460,275,30,40);
  block8 = new Block(490,275,30,40);
  //level two
  block9 = new Block(310,235,30,40);
  block10 = new Block(340,235,30,40);
  block11 = new Block(370,235,30,40);
  block12 = new Block(400,235,30,40);
  block13 = new Block(430,235,30,40);
  block14 = new Block(460,235,30,40);
  //level three
  block15 = new Block(340,195,30,40);
  block16 = new Block(370,195,30,40);
  block17 = new Block(400,195,30,40);
  block18 = new Block(430,195,30,40);
  //level four
  block19 = new Block(370,155,30,40);
  block20 = new Block(400,155,30,40);
  //level five
  block21 = new Block(385,115,30,40);

  blocks1 = new Block(640,175,30,40);
  blocks2 = new Block(670,175,30,40);
  blocks3 = new Block(700,175,30,40);
  blocks4 = new Block(730,175,30,40);
  blocks5 = new Block(760,175,30,40);
  //level two
  blocks6 = new Block(670,135,30,40);
  blocks7 = new Block(700,135,30,40);
  blocks8 = new Block(730,135,30,40);
  //level three
  blocks9 = new Block(700,95,30,40);

  polygon = new Polygon(50,200,20)

  slingshot = new SlingShot(polygon.body,{x:100,y:200});
    
}

function draw(){
    background('OrangeRed');
    Engine.update(engine);
    
    ground.display();
    stand1.display();
    stand2.display();

    stroke(0);
    fill("DarkTurquoise")
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    stroke(0)
    fill("DeepPink")
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
   stroke(0)
   fill("SpringGreen")
    block15.display();
    block16.display();
    block17.display();
    block18.display();
    stroke(0)
      fill("Purple")
    block19.display();
    block20.display();
   stroke(0)
   fill("SteelBlue")
   block21.display();

   stroke(0)
  fill('DodgerBlue')
  blocks1.display();
  blocks2.display();
  blocks3.display();
  blocks4.display();
  blocks5.display();
  stroke(0)
  fill("PaleVioletRed")
  blocks6.display();
  blocks7.display();
  blocks8.display();
  stroke(0)
  fill("LightCyan")
  blocks9.display();

  slingshot.display();
  polygon.display();

  textSize(30);
  fill('white')
  textFont('papyrus');
  text("Drag and release the hexagon collapse the tower!!",20,30);
  text("Press Space to try again!!",20,75);
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
  }
  
  function mouseReleased(){
    slingshot.fly();
  }

  function keyPressed(){
	if (keyCode === 32){
	  Matter.Body.setPosition(polygon.body,{x:50, y:200})
	  slingshot.attach(polygon.body)
	}
  }