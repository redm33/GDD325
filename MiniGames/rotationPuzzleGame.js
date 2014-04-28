// JavaScript Document
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");
var img = new Image();
var mouse = {x:0,y:0};
var startH;
var startW;
var endH;
var endW;
var rads;
var currentPiece;

<<<<<<< HEAD
var pieces = [[]];
var key = [[]];
var key1 = [[]];

var path;

gameSetup();

function gameSetup()
{
	path = Math.floor(Math.random()*5);
	
	if(path == 0)
	{
		pieces = 
		[ [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0] ];
		
		key = 
		[ [0,4,4,4,4,4],
		  [0,0,0,0,4,4],
		  [4,4,4,0,4,4],
		  [4,0,0,0,4,4],
		  [4,0,4,4,4,4],
		  [4,0,0,0,0,0] ];
		
		key1 = 
		[ [2,4,4,4,4,4],
		  [0,2,2,0,4,4],
		  [4,4,4,2,4,4],
		  [4,0,2,0,4,4],
		  [4,2,4,4,4,4],
		  [4,0,2,2,2,0] ];
		
		img.src = "MiniGames/TestBoard001.png";
	}
	else if(path == 1)
	{
		pieces = 
		[ [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0] ];
		
		key = 
		[ [4,4,4,0,4,4],
		  [4,4,4,0,4,4],
		  [0,0,0,0,4,4],
		  [0,4,4,4,4,4],
		  [0,0,0,4,4,4],
		  [4,4,0,4,4,4] ];
		
		key1 = 
		[ [4,4,4,2,4,4],
		  [4,4,4,2,4,4],
		  [0,2,2,0,4,4],
		  [2,4,4,4,4,4],
		  [0,2,0,4,4,4],
		  [4,4,2,4,4,4] ];
		
		img.src = "MiniGames/TestBoard002.png";
	}
	else if(path == 2)
	{
		pieces = 
		[ [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0] ];
		
		key = 
		[ [4,4,4,4,0,0],
		  [4,4,4,4,0,4],
		  [4,4,4,0,0,4],
		  [4,4,0,0,4,4],
		  [4,4,0,4,4,4],
		  [0,0,0,4,4,4] ];
		
		key1 = 
		[ [4,4,4,4,0,2],
		  [4,4,4,4,2,4],
		  [4,4,4,0,0,4],
		  [4,4,0,0,4,4],
		  [4,4,2,4,4,4],
		  [2,2,0,4,4,4] ];
		
		img.src = "MiniGames/TestBoard003.png";
	}
	else if(path == 3)
	{
		pieces = 
		[ [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0] ];
		
		key = 
		[ [0,4,4,4,4,4],
		  [0,4,0,0,0,4],
		  [0,4,0,4,0,4],
		  [0,0,0,4,0,4],
		  [4,4,4,4,0,4],
		  [4,4,4,4,0,0] ];
		
		key1 = 
		[ [2,4,4,4,4,4],
		  [2,4,0,2,0,4],
		  [2,4,2,4,2,4],
		  [0,2,0,4,2,4],
		  [4,4,4,4,2,4],
		  [4,4,4,4,0,0] ];
		
		img.src = "MiniGames/TestBoard004.png";
	}
	else if(path == 4)
	{
		pieces = 
		[ [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0],
		  [0,0,0,0,0,0] ];
		
		key = 
		[ [4,4,4,4,0,4],
		  [4,4,0,0,0,4],
		  [4,4,0,4,4,4],
		  [4,4,0,0,4,4],
		  [0,0,4,0,4,4],
		  [4,0,0,0,4,4] ];
		
		key1 = 
		[ [4,4,4,4,2,4],
		  [4,4,0,2,0,4],
		  [4,4,2,4,4,4],
		  [4,4,0,0,4,4],
		  [2,0,4,2,4,4],
		  [4,0,2,0,4,4] ];
		
		img.src = "MiniGames/TestBoard005.png";
	}
	
	img.addEventListener('load',loadHandler,false);
}
=======
var pieces = 
[
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0],
  [0,0,0,0,0,0]
];

var key = 
[
  [0,4,4,4,4,4],
  [0,0,0,0,4,4],
  [4,4,4,0,4,4],
  [4,0,0,0,4,4],
  [4,0,4,4,4,4],
  [4,0,0,0,0,0]
];

var key1 = 
[
  [2,4,4,4,4,4],
  [0,2,2,0,4,4],
  [4,4,4,2,4,4],
  [4,0,2,0,4,4],
  [4,2,4,4,4,4],
  [4,0,2,2,2,0]
];

img.addEventListener('load',loadHandler,false);
img.src = "MiniGames/TestBoard.png";
>>>>>>> f33a61d176a65011a15dfae018a3deee769b34e4

function shuffle()
{
	for(var row = 0; row < pieces.length; row++) 
	{	
		for(var column = 0; column < pieces[row].length; column++) 
		{
			pieces[row][column] = Math.floor(Math.random()*4);
			currentPiece = pieces[row][column];;
			
			startW = row*64+64;
			startH = column*64+64;
			
			if(currentPiece == 0)
				rads = 0;
			else if(currentPiece == 1)
				rads = 1.57079633;
			else if(currentPiece == 2)
				rads = 1.57079633*2;
			else if(currentPiece == 3)
				rads = 1.57079633*3;
			
			drawingSurface.fillRect(startW, startH, 64, 64);
			drawingSurface.translate(startW+32, startH+32);
			drawingSurface.rotate(rads);
			drawingSurface.drawImage(img, startW, startH, 64, 64, -32, -32, 64, 64);
			drawingSurface.rotate(-rads);
			drawingSurface.translate(-startW-32, -startH-32);
		}
	}
}

function loadHandler()
{
	drawingSurface.fillStyle = "rgb(255,255,255)";
    drawingSurface.fillRect (0,0,512,512);
	drawingSurface.drawImage(img, 0, 0, 512, 512);
	shuffle();
	timer();
	document.onmousemove = coords;
	document.onmousedown = selectPiece;
}

function timer()
{
	drawingSurface.font = "32px Arial";
	drawingSurface.drawImage(img, 192, 0, 128, 64, 192, 0, 128, 64);
	drawingSurface.fillText(displayTime(), 216, 40);
}

function coords(e)
{
	if(e.pageX || e.pageX == 0){
		mouse.x = e.pageX - canvas.offsetLeft;
		mouse.y = e.pageY - canvas.offsetTop;
	}
	
	startH = (Math.floor(mouse.y/64))*64;
	startW = (Math.floor(mouse.x/64))*64;
	
	//console.log(mouse.x + ", " + mouse.y);
	//console.log(startW + ", " + startH);
}

function selectPiece(e)
{
	if(e.layerX || e.layerX == 0){
		mouse.x = e.pageX - canvas.offsetLeft;
		mouse.y = e.pageY - canvas.offsetTop;
	};
	
	startH = (Math.floor(mouse.y/64))*64;
	startW = (Math.floor(mouse.x/64))*64;
	endH = startH+64;
	endW = startW+64;
	
	//console.log(mouse.x + ", " + mouse.y);
	//console.log(startW + ", " + startH);
	
	for(var row = 0; row < pieces.length; row++) 
	{	
		for(var column = 0; column < pieces[row].length; column++) 
		{ 
			if((row*64+64) == startW && (column*64+64) == startH)
			{
				currentPiece = pieces[row][column];
				
				if(currentPiece == 0)
				{
					rads = 1.57079633;
					pieces[row][column] = 1;
				}
				else if(currentPiece == 1)
				{
					rads = 1.57079633*2;
					pieces[row][column] = 2;
				}
				else if(currentPiece == 2)
				{
					rads = 1.57079633*3;
					pieces[row][column] = 3;
				}
				else if(currentPiece == 3)
				{
					rads = 0;
					pieces[row][column] = 0;
				}
			}
		}
	}
	
	if(startW >= 64 && startW < 448 && startH >= 64 && startH < 448)
	{
		drawingSurface.fillRect(startW, startH, 64, 64);
		drawingSurface.translate(startW+32, startH+32);
		drawingSurface.rotate(rads);
		drawingSurface.drawImage(img, startW, startH, 64, 64, -32, -32, 64, 64);
		drawingSurface.rotate(-rads);
		drawingSurface.translate(-startW-32, -startH-32);
	}
	
	if(checkWin() == true)
	{
		console.log("Game won");
		document.getElementById("game").style.cursor = cursorImage;
		breakFlag = false;
		breakCounter = Math.floor(Math.random()*3+3);
<<<<<<< HEAD
		gameSetup();
=======
		loadHandler();
>>>>>>> f33a61d176a65011a15dfae018a3deee769b34e4
		document.getElementById("rotateGame").style.display = "none";
		document.getElementById("rotateGame").innerHTML = "";
	}
	
	document.onmousedown = selectPiece;
}

function checkWin()
{
	for(var row = 0; row < pieces.length; row++) 
	{	
		for(var column = 0; column < pieces[row].length; column++) 
		{
			if(key[row][column] != 4)
			{
				if(pieces[column][row] != key[row][column])
				{
					if(pieces[column][row] != key1[row][column])
						return false;
				}
			}
		}
	}
	return true;
}