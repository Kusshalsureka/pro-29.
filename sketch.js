const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1;
var ground2;
var polygon;

var box1;
var box2;
var box3;
var box4
var box5;
var box6;
var box7;
var box8;
var box9;
var box10;
var box11;
var box12;
var box13;
var box14;
var box15;
var box16;




function setup() {
createCanvas(1300,750);
createSprite(400, 200, 50, 50);
engine = Engine.create();
world = engine.world;

ground1=new Ground(390,300,250,10);
ground2=new Ground(700,200,200,10);

polygon=Bodies.circle(50,200,20);
World.add(world,polygon);

slingShot=new SlingShot(this.polygon,{x:100,y:200});

//1st row
box1 = new Box(300,275,30,40);
  
  box2 = new Box(330,275,30,40);
  box3 = new Box(360,275,30,40);
  box4 = new Box(390,275,30,40);
  box5 = new Box(420,275,30,40);
  box6 = new Box(450,275,30,40);
  box7 = new Box(480,275,30,40);
//2nd row
box8=new Box(330,235,30,40);
box9=new Box(360,235,30,40);
box10=new Box(390,235,30,40);
box11=new Box(420,235,30,40);
box12=new Box(450,235,30,40);
//3rd row
box13=new Box(360,195,30,40);
box14=new Box(390,195,30,40);
box15=new Box(420,195,30,40);
//4rth row
box16=new Box(390,155,30,40);



}

function draw() {
  background("white"); 
  Engine.run(engine);

ground1.display();
ground2.display();

box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();






















  drawSprites();
}
function mouseDragged()
{
	Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
slingShot.fly();
    
}

function keyPressed(){
  if(keyCode===32){
  Matter.Body.setPosition(polygon.body,{x:235,y:420})
  slingShot.attach(polygon.body);
  
  
  }
  
  
  }
  