class Box 
{
    constructor(x,y)
        {   
        
            var options = 
            {
                isStatic: false
            }
            this.body = Bodies.rectangle(x,y,70,70,options);
            this.width = 70
            this.height = 70
            World.add(world, this.body);
        }
    

    box_display()
    {
        var pos =this.body.position;
        rectMode(CENTER);
        fill("green");
        rect(pos.x, pos.y, this.width, this.height);

    }
}