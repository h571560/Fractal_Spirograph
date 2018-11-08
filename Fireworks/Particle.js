function Particle(x,y,hu,seed){
  this.lifespan = 255;
  this.hu = hu;

  this.pos = createVector(x,y);
  if(seed){
  this.vel = createVector(random(-2,2),random(-22,-15));
} else{
  this.vel = p5.Vector.random2D();
  this.vel.mult(random(1,9));
}
  this.acc = createVector(0,0);

  this.applyForce = function(force){
    this.vel.add(force);
  }
this.update = function(){
  if(!seed){
    this.vel.mult(0.95);
    this.lifespan -= 6;
  }
  this.pos.add(this.vel);
  this.vel.add(this.acc);
  this.acc.mult(0);
}

this.done = function(){
  return(this.lifespan < 0);
}

this.show = function(){
  colorMode(HSB);
  if(!seed){
    strokeWeight(2);
    stroke(this.hu, 255,255,this.lifespan)
  }else{
    strokeWeight(4);
    stroke(this.hu,255,255);
  }
  point(this.pos.x,this.pos.y);
}


}
