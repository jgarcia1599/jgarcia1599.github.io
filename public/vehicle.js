function Vehicle(x,y){
    this.vel = p5.Vector.random2D();
    this.acc = createVector();
    this.target = createVector(x,y);
    this.pos = createVector(random(width),random(height));
    this.r = 8;
    this.maxspeed = 7;
    this.maxforce = 1;
}
Vehicle.prototype.update = function(){
    this.pos.add(this.vel);
    this.vel.add(this.acc);
    this.acc.mult(0);
}
Vehicle.prototype.behaviors = function(){
    var arrive = this.arrive(this.target);
    var mouse = createVector(mouseX,mouseY);
    var flee = this.flee(mouse);

    arrive.mult(0.5);
    flee.mult(5);

    this.applyForce(arrive);
    this.applyForce(flee);

}
Vehicle.prototype.applyForce= function(f){
    this.acc.add(f);


}
Vehicle.prototype.flee = function(target){
    var desired = p5.Vector.sub(target,this.pos);
    var d = desired.mag();
    if (d<50){
        desired.setMag(this.maxspeed);
        desired.mult(-1);
        var steer = p5.Vector.sub(desired,this.vel);
        steer.limit(this.maxforce);
        return steer;

    }else{
        return createVector(0,0);
    }

}
Vehicle.prototype.arrive = function(target){
    var desired = p5.Vector.sub(target,this.pos);
    var distance = desired.mag();
    var speed = this.maxspeed;
    if(distance < 100){
        speed = map(distance,0,100,0,this.maxspeed);
    }
    desired.setMag(speed);
    var steer = p5.Vector.sub(desired,this.vel);
    steer.limit(this.maxforce);
    return steer;
}
Vehicle.prototype.show = function(){
    stroke(0);
    strokeWeight(canvasArea * 0.000025);
    point(this.pos.x,this.pos.y);

}