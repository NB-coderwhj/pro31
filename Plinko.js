class Plinko{
    constructor(x,y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.circle(x,y,12,options);
        this.diameter = 12;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(5,125,123)
        stroke(0,94,60)
        ellipse(pos.x,pos.y,this.diameter)
    }
}