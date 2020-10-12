class Trash {

    constructor(x,y){
    this.image = loadImage("Images/dustbingreen.png");
    this.x=x
    this.y=y;
    this.trashWidth=122;
    this.trashHeight=100;
    this.wallThickness=20;
    this.angle=0;
    

    this.leftWallBody=Bodies.rectangle(this.x-this.trashWidth/2,this.y-this.trashHeight/2,this.wallThickness,this.trashHeight/2,{isStatic:true});
    Matter.Body.setAngle(this.leftWallBody,this.angle);

  
    World.add(world, this.leftWallBody)
 
    }
    display(){  
        var posLeft=this.leftWallBody.position;
        push()
        translate(posLeft.x, posLeft.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop()
    }
}