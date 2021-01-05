class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");

    //1. add smoke image with trajectory array
    this.smokeImage = loadImage("sprites/smoke.png");
    this.trajectory =[];


  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();

    //4. TO AVOID TOO MUCH SMOKE.. ADD IF CONDITION
    if(this.body.velocity.x > 10 && this.body.position.x > 200){

      //2. PUSH THE PATH IN THE TRAJECTORY
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);

    }
   
    //3. DISPLAY SMOKE USING ARRAY LOOP 
    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}
