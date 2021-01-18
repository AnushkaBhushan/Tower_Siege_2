

  class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.3,
            'friction':0.2,
            'density':1.0
        }
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.visibility=255;
        //this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        if (this.body.speed<3){
          push();
          translate(this.body.position.x, this.body.position.y);
          rotate(angle);
          rectMode(CENTER);
          rect(0,0, this.width,this.height);
          pop();
          }
         else {World.remove(world,this.body)}
         push();
         this.visibility=this.visibility-5;
         tint(255,this.visibility);
         //rect(0,0, this.width,this.height);
         pop();
        
      }
}