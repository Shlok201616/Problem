class BaseClass{
    constructor(x,y,width,height,angle){
    var this_options = {
        restitution:0.8,
        friction : 1.0,
        density : 1.0
    }
    
    this.body = Bodies.rectangle(x,y,width,height,this_options);
    this.color="red";
    this.width = width;
    this.height = height;
    this.image = loadImage("sprites/base.png");
    World.add(world,this.body);
    }
    display(){
        
        var angle = this.body.angle;
       // fill(this.color);
        //strokeWeight(3);
        //stroke("navyblue")
        var pos = this.body.position
        
        push();
               translate(pos.x,pos.y);
        rotate(angle);
        imageMode(CENTER);
        //rect(0,0,this.width,this.height);
        image(this.image, 0,0,this.width, this.height);
        pop();
    }
    
}