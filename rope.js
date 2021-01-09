class Rope{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.sling = Constraint.create(options);
        this.pointB=pointB
        World.add(world, this.sling);
    }
    fly() {
    this.sling.bodyA=null
    }


    rope_display(){
        if (this.sling.bodyA){
        var pointA = this.sling.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        stroke("white")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
}   
}
