class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);

        this.sling1= loadImage("sprites/sling1.png")
        this.sling2=loadImage("sprites/sling2.png")
        this.sling3=loadImage("sprites/sling3.png")
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        // console.log(this.sling2.height)

        image(this.sling1,190,40,38,180);
        image(this.sling2,165,38,38,105);
        


        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(9);
            stroke(48, 22, 8);
            if(pointA.x>180){
                line(pointA.x+20, pointA.y, pointB.x-20, pointB.y-30);
                line(pointA.x+15, pointA.y, pointB.x+20, pointB.y-30);
                image(this.sling3,pointA.x+18,pointA.y-10,10,30)
            }
            else{
                line(pointA.x-15, pointA.y, pointB.x-20, pointB.y-30);
                line(pointA.x-10, pointA.y, pointB.x+20, pointB.y-30);
                image(this.sling3,pointA.x-18,pointA.y-15,10,30)
            }

        }
    }
    
}