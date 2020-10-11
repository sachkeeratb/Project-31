var Engine = Matter.Engine;
var World = Matter.World, Bodies = Matter.Bodies, Events = Matter.Events, Constraint = Matter.Constraint;

var engine, world;
var ground;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300;

function setup() {
  createCanvas(800,800);

  engine = Engine.create();
  world = engine.world;

  
  ground = new Ground(400, 790, 800, 10);

  for (var k = 0; k <=width; k = k + 80) {
    divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
  }

  for (var j = 75; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,75,10));
  }

  for (var j = 50; j <=width - 10; j=j+50) {
    plinkos.push(new Plinko(j,175,10));
  }

  for (var j = 75; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275,10));
  }

  for (var j = 50; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375,10));
  }
}

function draw() {
  background(0);  

  Engine.update(engine);
  ground.display();

  for (var l = 0; l < plinkos.length; l++) {
    plinkos[l].display();
  }

  if (frameCount%60===0) {
    particles.push(new Particle(random(width/2-30,width/2+30),10,10));
  }

  for(var m = 0; m < particles.length; m++){
    particles[m].display();
  }

  for(var n = 0; n < divisions.length; n++){
    divisions[n].display();
  }
  
  drawSprites();
}
