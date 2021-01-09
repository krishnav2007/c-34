class Ball 
{
    constructor()
        {   
        
            var options = 
            {
                isStatic: false
            }
            this.body = Bodies.circle(200,200,80,options);
            this.r = 80
            World.add(world, this.body);
        }
    

    ball_display()
    {
        var pos =this.body.position;
        ellipseMode(RADIUS);
        fill("blue");
        ellipse(pos.x, pos.y,this.r, this.r);

    }
}