class Ground { //your house
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(600,600,1200,20,options);
      this.width = 3200;
      this.height = 20  ;
      World.add(world, this.body);
    }
    ground_display(){   //Krishnav's mobile
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
