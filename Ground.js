class Ground
{
    constructor()
    {
        var option={
            isStatic : true
        }
        this.body=Bodies.rectangle(450,395,900,5,option);
        World.add(world,this.body);
        
    }

    display()
    {
        strokeWeight(2);
        fill("brown");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,900,20); 
    }
}