class Divisions {
    constructor(x, y, w, h) {
        var options = {
            isStatic: true
        }
        this.width = w;
        this.height = h;
        this.y = y;
        this.x = x;
        this.body = Matter.Bodies.rectangle(x, y, w, h, options);
        Matter.World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER);
        fill("white");
        rect(pos.x, pos.y, this.w, this.h);
    }
}