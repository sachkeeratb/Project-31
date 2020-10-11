class Particle{
  constructor(x, y, r) {
    var options={
      restitution:0.4
    }
    this.r = r;
    this.y = y;
    this.x = x;
    this.body = Matter.Bodies.circle(x, y, r, options);
    this.color=color(random(0,255),random(0,255),random(0,255));
    Matter.World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    noStroke();
    fill(this.color);
    ellipseMode(RADIUS);
    ellipse(0, 0, this.r, this.r);
    pop();
  }
}