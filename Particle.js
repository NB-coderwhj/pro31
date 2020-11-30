class Particle{
    constructor(x,y){
    var options = {
        isStatic : false
    }
    this.body = Bodies.circle(x,y,10,options);
   this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        var angle = this.body.angle
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        fill(this.color);
        stroke(0);
        ellipse(0,0,25,25);
        pop();
    }

}