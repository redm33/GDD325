// JavaScript Document
var canvas = document.querySelector("canvas");
var drawingSurface = canvas.getContext("2d");
var img = new Image();
var backgroundImg = new Image();
var mouse = {x:0,y:0};
var startH;
var startW;
var endH;
var endW;
var rads;
var currentPiece;

var pieces = [[]];
var key = [[]];
var key1 = [[]];

var path;

gameSetup();

function gameSetup()
{
	document.getElementById("centrifuge").style.backgroundImage = "url(Rooms/Images/CentrifugeBroken.gif)";
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
		
		img.src = "MiniGames/board001.png";
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
		
		img.src = "MiniGames/board002.png";
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
		
		img.src = "MiniGames/board003.png";
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
		
		img.src = "MiniGames/board004.png";
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
		
		img.src = "MiniGames/board005.png";
	}
	
	backgroundImg.src = "MiniGames/centrifugeGame.png";
	img.addEventListener('load',loadHandler,false);
}

function shuffleBoard()
{
	for(var row = 0; row < pieces.length; row++) 
	{	
		for(var column = 0; column < pieces[row].length; column++) 
		{
			pieces[row][column] = Math.floor(Math.random()*4);
			currentPiece = pieces[row][column];
			
			startW = row*64+32;
			startH = column*64+32;
			
			offsetW = startW+400;
			offsetH = startH+45;
			
			if(currentPiece == 0)
				rads = 0;
			else if(currentPiece == 1)
				rads = 1.57079633;
			else if(currentPiece == 2)
				rads = 1.57079633*2;
			else if(currentPiece == 3)
				rads = 1.57079633*3;
			
			drawingSurface.drawImage(backgroundImg, offsetW, offsetH, 64, 64, offsetW, offsetH, 64, 64);
			drawingSurface.translate(offsetW+32, offsetH+32);
			drawingSurface.rotate(rads);
			drawingSurface.drawImage(img, startW, startH, 64, 64, -32, -32, 64, 64);
			drawingSurface.rotate(-rads);
			drawingSurface.translate(-offsetW-32, -offsetH-32);
		}
	}
}

function loadHandler()
{
	drawingSurface.fillStyle = "rgb(255,255,255)";
    drawingSurface.clearRect (0,0,448,448);
	drawingSurface.drawImage(backgroundImg, 0, 0, 1000, 600);
	drawingSurface.drawImage(img, 400, 45, 448, 448);
	shuffleBoard();
	timer();
	//document.onmousemove = coords;
	document.onmousedown = selectPiece;
}

function timer()
{
	drawingSurface.font = "44px Arial";
	drawingSurface.drawImage(backgroundImg, 170, 147, 134, 72, 170, 126, 134, 62);
	drawingSurface.fillText(displayTime(), 177.5, 170);
}

function coords(e)
{
	if(e.pageX || e.pageX == 0){
		mouse.x = e.pageX - canvas.offsetLeft;
		mouse.y = e.pageY - canvas.offsetTop;
	}
	
	startH = (Math.floor(mouse.y/64))*64;
	startW = (Math.floor(mouse.x/64))*64;
}

function getOffset(elem)
{
    var tempX = 0;
    var tempY = 0;
    while(elem && !isNaN(elem.offsetLeft) && !isNaN(elem.offsetTop))
	{
        tempX += elem.offsetLeft - elem.scrollLeft;
        tempY += elem.offsetTop - elem.scrollTop;
        elem = elem.offsetParent;
    }
    return {top: tempY, left: tempX};
}

function selectPiece(e)
{
	var divW = getOffset( document.getElementById('rotateGame') ).left;
	var divH = getOffset( document.getElementById('rotateGame') ).top;
	
	if(e.layerX || e.layerX == 0){
		mouse.x = e.pageX - divW-406;
		mouse.y = e.pageY - divH-70;
	};
	
	startH = (Math.floor(mouse.y/64)+.5)*64;
	startW = (Math.floor(mouse.x/64)+.5)*64;
			
	offsetW = startW+400;
	offsetH = startH+45;
	
	for(var row = 0; row < pieces.length; row++) 
	{	
		for(var column = 0; column < pieces[row].length; column++) 
		{ 
			if((row*64+32) == startW && (column*64+32) == startH)
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
	
	if(startW >= 32 && startW < 416 && startH >= 32 && startH < 416)
	{
		drawingSurface.drawImage(backgroundImg, offsetW, offsetH, 64, 64, offsetW, offsetH, 64, 64);
		drawingSurface.translate(offsetW+32, offsetH+32);
		drawingSurface.rotate(rads);
		drawingSurface.drawImage(img, startW, startH, 64, 64, -32, -32, 64, 64);
		drawingSurface.rotate(-rads);
		drawingSurface.translate(-offsetW-32, -offsetH-32);
	}
	
	if(checkCentWin() == true)
	{
		document.getElementById("game").style.cursor = cursorImage;
		breakFlag = false;
		breakCounter = Math.floor(Math.random()*3+2);
		gameSetup();
		document.getElementById("rotateGame").style.display = "none";
		document.getElementById("rotateGame").innerHTML = "";
		document.getElementById("centrifuge").style.backgroundImage = "url(Rooms/Images/centrifugeIdle.png)";
		lockTurn = false;
	}
	
	document.onmousedown = selectPiece;
}

function checkCentWin()
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