
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var player,golf_ball,golf_hole,golfHole
var player_still,golf_course
var person,ball
var hole
var vx=0
var vy=0




let engine;
let world;

function preload(){
  player = loadAnimation("golf1.png","golf2.png","golf3.png")
  player_still= loadAnimation('golf3.png')
  golf_hole=loadImage('golf_hole.png')
  golf_ball = loadImage('golf_ball.png')
  golf_course = loadImage('golf_course.png')
}



function setup()
{
  createCanvas(1500,400);
  engine=Engine.create()
  world=engine.world
person = createSprite(80,200)
person.addAnimation('person',player_still)
person.scale = 4

golfHole = createSprite(1200,200)
golfHole.addAnimation('hole',golf_hole)
golfHole.scale = 1

ball = new Ball(120,260)
hole = new Hole(1200,300)
}

function draw() 
{
  Engine.update(engine)
  background("skyblue");
  image(golf_course,0,0,1500,400)
  if(keyIsDown(32)){
    console.log("spacebar")
    vx +=0.00001
    vy -=0.00002
    Body.setStatic(ball.body,false)
    Body.applyForce(ball.body,ball.body.position,{x:vx,y:vy})
  }
 drawSprites()
 ball.display()
 hole.display()
}
