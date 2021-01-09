const Engine = Matter.Engine;   
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world
var ground_object    
var ball_object, rope_object


function setup(){
  var canvas = createCanvas(3000,800);
  engine = Engine.create();
  world = engine.world;
  ground_object = new Ground ()  
  ball_object = new Ball ()
  rope_object = new Rope (ball_object.body, {x:500, y:100})
  box1 = new Box (900,100)
  box2 = new Box (900,100)
  box3 = new Box (900,100)
  box4 = new Box (900,100)
  box5 = new Box (900,100)
  box6 = new Box (900,100)
  box7 = new Box (800,100)
  box8 = new Box (800,100)
  box9 = new Box (800,100)
  box10 = new Box (800,100)
  box11 = new Box (800,100)
  box12 = new Box (800,100)
  box13 = new Box (700,100)
  box14 = new Box (700,100)
  box15 = new Box (700,100)
  box16 = new Box (700,100)
  box17 = new Box (700,100)
  box18 = new Box (700,100)
  box19 = new Box (700,100)
  box20 = new Box (700,100)
}


function draw(){
  background(0);
  Engine.update(engine);
  ground_object.ground_display();
  ball_object.ball_display();
  rope_object.rope_display();
  box1.box_display();
  box2.box_display();
  box3.box_display();
  box4.box_display();
  box5.box_display();
  box5.box_display();
  box6.box_display();
  box7.box_display();
  box8.box_display();
  box9.box_display();
  box10.box_display();
  box11.box_display();
  box12.box_display();
  box13.box_display();
  box14.box_display();
  box15.box_display();
  box16.box_display();
  box17.box_display();
  box18.box_display();
  box19.box_display();
  box20.box_display();

}
function mouseDragged(){

Matter.Body.setPosition(ball_object.body,{x:mouseX,y:mouseY});
}

function mouseReleased() {
rope_object.fly();
}