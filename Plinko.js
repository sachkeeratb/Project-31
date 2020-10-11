class Plinko{
    constructor(x, y, r) { 
        var options = 
        { 
            restitution: 1, friction: 0, isStatic:true 
        } 
        this.r = 10; 
        this.x = x;
        this.y = y;
        this.body = Bodies.circle(x, y, this.r, options); 
        Matter.World.add(world, this.body); 
    }
    display(){
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      fill(255, 255, 255);
      ellipse(0, 0, this.r, this.r);
      pop();
    }
}
      
