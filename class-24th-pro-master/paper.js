class Paper {  
    constructor(x, y, radius){
        var options = {
            isStatic:false,
            restitution:0.2,
            friction:0.3,
            density:1.0
        }
         this.radius = radius
        this.body = Bodies.circle(x, y, radius, options);
        World.add(world, this.body);
        this.image = loadImage('paper.png');

       
        
   }
   display(){
    fill("yellow");
    imageMode(RADIUS);
    image(this.image,this.body.position.x, this.body.position.y, this.radius, this.radius);
   }
}
