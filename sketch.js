var Wall, Car;
var speed, weight;

function setup() {
  createCanvas(1100, 400);

  speed = random(55, 90)
  weight = random(400, 1500)

  Car = createSprite(100, 200, 30, 30);
  Car.velocityX = speed;
  wall=createSprite(900,200, 50, height/2);
  wall.shapeColor=color(80,80,80);

}

function draw() {
  background("lightblue");
  if(wall.x-Car.x < (Car.width+wall.width)/2)
  {
  	Car.velocityX=0;
  	var deformation=0.5 * weight * speed* speed/22500;
	if(deformation>180)
	{
		Car.shapeColor=color(255,0,0);
	}

	if(deformation<180 && deformation>100)
	{
		Car.shapeColor=color(230,230,0);
	}

	if(deformation<100)
	{
		Car.shapeColor=color(0,255,0);
	}
  }  
  drawSprites();
}