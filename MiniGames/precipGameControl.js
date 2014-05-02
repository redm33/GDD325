// JavaScript Document


var canvas = document.getElementById("precipCanvas"); 
var drawingSurface = canvas.getContext("2d");

var particles = [];
var sprites = [];
var tick = 0; 

var basket = Object.create(spriteObject2);
basket.x = 0;
basket.y = canvas.height - 128;
sprites.push(basket);
var image = new Image();
image.src = "MiniGames/testTubeLarge.png";

var percip = new Image();
percip.src = "MiniGames/precRedBrwn.png";

//Directions
var moveRight = false;
var moveLeft = false;

//Key codes
var RIGHT = 39;
var LEFT = 37;
var R = 82;

var precipCollected = 7;
var droppedParticles = 0;
//temp variable to stop the alerts from repeating constantly
var endGame = false;  
var finish = false;

function createParticles() {     
	//check on every 10th tick check     
	if(tick % 100 == 0 && droppedParticles <= 10) {         
	//add particle if fewer than 100         
		if(particles.length < 100) {             
			particles.push({ 
				part: Object.create(spriteObject),
				x: (Math.random() * canvas.width-96)+32,
				y: 0,          
				speed: 2+Math.random()*3       
			});
			particles[particles.length-1].part.x =  particles[particles.length-1].x;
			droppedParticles++;
     	} 	
	}
	tick++;
}

function updateParticles() {     
	for(var i in particles) {         
		var part = particles[i];         
		part.y += part.speed;  
		part.part.y = part.y   
	} 
}  

function killParticles() { 
    var stillVisible = false;   
	for(var i in particles) {         
		var part = particles[i];         
		if(part.y > canvas.height-115)           
			part.part.visible = false;        
		else
			stillVisible = true;	
	}
	if(stillVisible == false && droppedParticles >= 10)
	{
		if(precipCollected == 0)
			endGame = true;
		else
			finish = true;
	} 
} 
function drawParticles() {  
	//to make transparent
    drawingSurface.clearRect(0,0,canvas.width,canvas.height); 
	
	//drawingSurface.fillStyle = "black";     
	//drawingSurface.fillRect(0,0,canvas.width,canvas.height);     
	for(var i in particles) { 
		if(particles[i].part.visible)
		{
			drawingSurface.drawImage
			(
				  percip, 
				  particles[i].x, particles[i].y, 
				  32,32
			 ); 
		}
	} 
}

window.addEventListener("keyup", function(event)
{
  switch(event.keyCode)
  {   
    case LEFT:
      moveLeft = false;
      break;  
	    
    case RIGHT:
      moveRight = false;
      break;  
	case R:
      RisDown = false;
      break;
  }
}, false);

//Add keyboard listeners
window.addEventListener("keydown", function(event)
{
  switch(event.keyCode)
  {   
    case LEFT:
      moveLeft = true;
      break;  
	    
    case RIGHT:
      moveRight = true;
      break; 
	case R:
      RisDown = true;
      break;
  }

  event.preventDefault();
}, false);


function playGame()
{ 
  //Left
  if(moveLeft && !moveRight)
  {
    basket.accelerationX = -0.2;
    basket.friction = 1;
  }
  //Right
  if(moveRight && !moveLeft)
  {
    basket.accelerationX = 0.2;
    basket.friction = 1;
  }

  //Set the basket's acceleration, friction and gravity 
  //to zero if none of the arrow keys are being pressed
  if(!moveLeft && !moveRight)
  {
    basket.accelerationX = 0; 
    basket.friction = 0.90; 
    basket.gravity = 0.3;
  }

  //Apply the acceleration
  basket.vx += basket.accelerationX; 
  //basket.vy += basket.accelerationY;
  
  //Apply friction
  if(basket.isOnGround)
    basket.vx *= basket.friction; 

  //Limit the speed
  //Don't limit the upward speed because it will choke the jump effect
  
  if (basket.vx > basket.speedLimit)
    basket.vx = basket.speedLimit;
  if (basket.vx < -basket.speedLimit)
    basket.vx = -basket.speedLimit;
  
  //Move the basket
  basket.x += basket.vx;
  basket.y = canvas.height - 100;
  
  for(var i = 0; i < particles.length; i++)
  {
    if(particles[i].part.visible)
	{
		var collisionSide = blockRectangle(basket, particles[i].part, false);
	
		if(collisionSide === "top" && basket.vy <= 0)
		{
		  particles[i].part.visible = false;
		  var catchPrecip = new Audio("Rooms/Sounds/precipCatch.wav");
		  catchPrecip.play();
		  if(precipCollected > 0)
		  	precipCollected--;
		}
	}
  }
}
function update()
{ 
  	//The animation loop
	if(!endGame)
	{
		requestAnimationFrame(update, canvas);     
		createParticles();     
		updateParticles();     
		killParticles();     
		drawParticles();
	
		playGame();
		//Render the game
		render();
		
		if(finish)
		{
			precipCollected = 7;
			droppedParticles = 0;
			finish = false;
		}
	}
	else
		backoutPrecip();
}

requestAnimationFrame(update, canvas);     

function render()
{
  //drawingSurface.clearRect(0, 0, canvas.width, canvas.height);  
  //Display the sprites
  if(sprites.length !== 0)
  {
    for(var i = 0; i < sprites.length; i++)
    {
      var sprite = sprites[i];
      if(sprite.visible)
      {
        drawingSurface.drawImage
        (
          image, 
          sprite.sourceX, sprite.sourceY, 
          sprite.sourceWidth, sprite.sourceHeight,
          Math.floor(sprite.x), Math.floor(sprite.y) ,
          150, 267
        ); 
      }
    }
  }
  
  document.getElementById("collected").innerHTML = "Precipitate Needed: " + precipCollected;
	
}

function setEndGame(set)
{
	endGame = set;	
}

function backoutPrecip()
{
	setEndGame(true);
	document.getElementById("precipGame").innerHTML = "";
	document.getElementById("precipGame").style.display = "none";
	document.getElementById("game").style.cursor = "url(Inventory/"+cursorPub + ") 63 63, auto";
	lockTurn = false;
}