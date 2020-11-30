class Ground{
    constructor(y){
        var options = {
            isStatic : true
        }
        this.body = Bodies.rectangle(width/2,y,480,25,options);
        this.width = 480;
        this.height = 25;
        World.add(world,this.body);
        
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill(0)
        rect(pos.x,pos.y,this.width,this.height);
    }
}