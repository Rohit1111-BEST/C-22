const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, gameworld;
var ground,ball;


function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    gameworld = engine.world;

//json format
    var ground_options ={
        isStatic: true
    }
var ball_options={
    restitution:0.8
}
    ground = Bodies.rectangle(200,390,200,20,ground_options);
    World.add(gameworld, ground);
    ball=Bodies.circle(12,32,20,ball_options);
    World.add(gameworld,ball);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,400,20);
    ellipseMode(RADIUS);
    ellipse(ball.position.x,ball.position.y,20,20);
}