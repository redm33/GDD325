var countMoves = 3;
var onePrompt = false;
var theChem = "";

var chemsOnShelf = new Array("url(MiniGames/chemicalBottles/1MHCL.png)","url(MiniGames/chemicalBottles/6MHCL.png)", "url(MiniGames/chemicalBottles/6MHNO3.png)", "url(MiniGames/chemicalBottles/6MNH3.png)", "url(MiniGames/chemicalBottles/12MHCL.png)", "url(MiniGames/chemicalBottles/15MNH3.png)", "url(MiniGames/chemicalBottles/18MH2SO4.png)", "url(MiniGames/chemicalBottles/C2H4O2.png)", "url(MiniGames/chemicalBottles/C2H5NS.png)", "url(MiniGames/chemicalBottles/H2O.png)", "url(MiniGames/chemicalBottles/H2O2.png)", "url(MiniGames/chemicalBottles/HC2H3O2.png)",
"url(MiniGames/chemicalBottles/AgNO3.png)", "url(MiniGames/chemicalBottles/C2H2O4.png)", "url(MiniGames/chemicalBottles/HgCl2.png)", "url(MiniGames/chemicalBottles/KOH1MKNO3.png)", "url(MiniGames/chemicalBottles/MgNO32.png)", "url(MiniGames/chemicalBottles/Na2S2O4.png)", "url(MiniGames/chemicalBottles/NaOH.png)", "url(MiniGames/chemicalBottles/NH4C2H3O2.png)", "url(MiniGames/chemicalBottles/NH4CL.png)", "url(MiniGames/chemicalBottles/NH4NO3.png)", "url(MiniGames/chemicalBottles/SNCl2.png)", 
"url(MiniGames/chemicalBottles/NH42S.png)", "url(MiniGames/chemicalBottles/FeK4C6N6.png)", "url(MiniGames/chemicalBottles/K2CrO4.png)"); 

var chemsOnShelfHover = new Array("url(MiniGames/chemicalBottlesHover/1MHCL.png)","url(MiniGames/chemicalBottlesHover/6MHCL.png)", "url(MiniGames/chemicalBottlesHover/6MHNO3.png)", "url(MiniGames/chemicalBottlesHover/6MNH3.png)", "url(MiniGames/chemicalBottlesHover/12MHCL.png)", "url(MiniGames/chemicalBottlesHover/15MNH3.png)", "url(MiniGames/chemicalBottlesHover/18MH2SO4.png)", "url(MiniGames/chemicalBottlesHover/C2H4O2.png)", "url(MiniGames/chemicalBottlesHover/C2H5NS.png)", "url(MiniGames/chemicalBottlesHover/H2O.png)", "url(MiniGames/chemicalBottlesHover/H2O2.png)", "url(MiniGames/chemicalBottlesHover/HC2H3O2.png)",
"url(MiniGames/chemicalBottlesHover/AgNO3.png)", "url(MiniGames/chemicalBottlesHover/C2H2O4.png)", "url(MiniGames/chemicalBottlesHover/HgCl2.png)", "url(MiniGames/chemicalBottlesHover/KOH1MKNO3.png)", "url(MiniGames/chemicalBottlesHover/MgNO32.png)", "url(MiniGames/chemicalBottlesHover/Na2S2O4.png)", "url(MiniGames/chemicalBottlesHover/NaOH.png)", "url(MiniGames/chemicalBottlesHover/NH4C2H3O2.png)", "url(MiniGames/chemicalBottlesHover/NH4CL.png)", "url(MiniGames/chemicalBottlesHover/NH4NO3.png)", "url(MiniGames/chemicalBottlesHover/SNCl2.png)", 
"url(MiniGames/chemicalBottlesHover/NH42S.png)", "url(MiniGames/chemicalBottlesHover/FeK4C6N6.png)", "url(MiniGames/chemicalBottlesHover/K2CrO4.png)"); 

var idSlots=[["zeroZero", "zeroOne", "zeroTwo", "zeroThree", "zeroFour", "zeroFive", "zeroSix"],
	["oneZero", "oneOne", "oneTwo", "oneThree", "oneFour", "oneFive", "oneSix"],
	["twoZero", "twoOne", "twoTwo", "twoThree", "twoFour", "twoFive", "twoSix"],
	["threeZero", "threeOne", "threeTwo", "threeThree", "threeFour", "threeFive", "threeSix"],
	["fourZero", "fourOne", "fourTwo", "fourThree", "fourFour", "fourFive", "fourSix"],
	["fiveZero", "fiveOne", "fiveTwo", "fiveThree", "fiveFour", "fiveFive", "fiveSix"]];
	
function switchChem(divId)
{
	var isOneSelected = false;

	var selectedI = 0;
	var selectedJ = 0;
	for(var i = 0; i < idSlots.length; i++)
	{
		for(var k = 0; k < idSlots[i].length; k++)
		{
			for(var j = 0; j< chemsOnShelf.length; j++)
			{
				background =getFile(idSlots[i][k]);

				if(background == chemsOnShelf[j])
				{
					isOneSelected = true;
					selectedI = i;
					selectedJ = k;
				}
			}
		}		
	}
	
	if(isOneSelected)
	{
		var currentI = 0;
		var currentJ = 0;
		var selected = document.getElementById(divId);
	
		for(var i = 0; i < idSlots.length; i++)
		{
			for(var j = 0; j<idSlots[i].length; j++)
			{
				if(idSlots[i][j] == divId)
				{
					currentI = i;
					currentJ = j;
				}
			}			
		}
		if(currentI != 0)
			var checkOne = getFile(idSlots[currentI-1][currentJ]);
		else
			var checkOne = null;
		if(currentJ != 0)
			var checkTwo = getFile(idSlots[currentI][currentJ-1]);
		else
			var checkTwo = null;
		if(currentI != idSlots.length-1)
			var checkThree = getFile(idSlots[currentI+1][currentJ]);
		else
			checkThree = null;
		if(currentJ != idSlots[0].length-1)
			var checkFour = getFile(idSlots[currentI][currentJ+1]);
		else
			var checkFour = null;
		
		var checkOneNormal = false;
		var checkTwoNormal = false;
		var checkThreeNormal = false;
		var checkFourNormal = false;
	
		for(var k = 0; k < chemsOnShelf.length; k++)
		{
			if(checkOne == chemsOnShelfHover[k]){checkOneNormal = true;}
			if(checkTwo == chemsOnShelfHover[k]){checkTwoNormal = true;}
			if(checkThree == chemsOnShelfHover[k]){checkThreeNormal = true;}
			if(checkFour == chemsOnShelfHover[k]){checkFourNormal = true;}
		}
		
		if(!checkOneNormal || !checkTwoNormal || !checkThreeNormal || !checkFourNormal)
		{
			theSelected = document.getElementById(idSlots[selectedI][selectedJ]);
			theSelectedBackground = getFile(idSlots[selectedI][selectedJ]);
			thePressed = document.getElementById(divId);
			thePressedBackground = getFile(divId);
			
			var backgroundIndex = 0;
			for(var k = 0; k < chemsOnShelf.length; k++)
			{
				if(theSelectedBackground == chemsOnShelf[k])
					backgroundIndex = k;	
			}
			theSelected.style.backgroundImage= thePressedBackground;
			thePressed.style.backgroundImage = chemsOnShelfHover[backgroundIndex];
			var switchSound = new Audio("Rooms/Sounds/chemsOnShelfwitch.wav");
			switchSound.play();
			window.setTimeout( function() {
			decrementMoves();}, 10);
		}
		else
		{
			theSelected = getFile(idSlots[selectedI][selectedJ]);

			var backgroundIndex = 0;
			for(var k = 0; k < chemsOnShelf.length; k++)
			{
				if(theSelected == chemsOnShelfHover[k])
					backgroundIndex = k;	
			}
			theSelected.style.backgroundImage = chemsOnShelf[backgroundIndex];
		}	
		
		
	}
	else
	{
		backgroundFile = getFile(divId);	
		for(var i = 0; i < chemsOnShelf.length; i++)
		{
			if(backgroundFile == chemsOnShelfHover[i])
				document.getElementById(divId).style.backgroundImage = chemsOnShelf[i];
		}
	}
	
	
	
}
function setupWin()
{
	
	var count = 0;
	var curBackground = null;
	for(var i = 0; i < idSlots.length; i++)
	{
		for(var j = 0; j<idSlots[i].length; j++)
		{
			if(count == 0){curBackground = getFile(idSlots[i][j]);}
			if(curBackground == getFile(idSlots[i][j]))
			{
				count++;
				if(count == 3){return true;}
			}
			else{count = 0;}			
		}		
	}
	
	var transIdSlots = invertArray(idSlots, idSlots[0].length, idSlots.length);
	for(var i = 0; i < transIdSlots.length; i++)
	{
		for(var j = 0; j< transIdSlots[i].length; j++)
		{
			if(count == 0){curBackground = getFile(transIdSlots[i][j]);}
			if(curBackground == getFile(transIdSlots[i][j]))
			{
				count++;
				if(count == 3){return true;}
			}
			else{count = 0;}	
		}
	}
}
function checkWin()
{
	var count = 0;
	var curBackground = getFile(idSlots[0][0]);
	for(var i = 0; i < idSlots.length; i++)
	{
		for(var j = 0; j < idSlots[i].length; j++)
		{
			if(curBackground == getFile(idSlots[i][j]))
			{
				count++;
				if(count == 4){retrieveChemical("url(Inventory/"+getBackgroundFile(idSlots[i][j])+")");
				return true; break;}
			}
			else{count = 1; curBackground = getFile(idSlots[i][j]);}			
		}		
	}
	
	var transIdSlots = invertArray(idSlots, idSlots[0].length, idSlots.length);
	count = 0;
	curBackground = getFile(transIdSlots[0][0]);
	for(var i = 0; i < transIdSlots.length; i++)
	{
		for(var j = 0; j< transIdSlots[i].length; j++)
		{
			if(curBackground == getFile(transIdSlots[i][j]))
			{
				count++;
				if(count == 4){retrieveChemical("url(Inventory/"+getBackgroundFile(transIdSlots[i][j])+")");
				return true;break;}
			}
			else{count = 1; curBackground = getFile(transIdSlots[i][j]);}	
		}
	}
	return false;
		
}

function invertArray(array,arrayWidth,arrayHeight) 
{
  var newArray = [];
  for (x=0;x<arrayWidth;x++) {
    newArray[x] = [];
    for (y=0;y<arrayHeight;y++) {
        newArray[x][y] = array[y][x];
    }
  }
  return newArray;
}

function getBackgroundFile(divId)
{
		var selected = document.getElementById(divId);
		var backgroundStyle = selected.currentStyle || window.getComputedStyle(selected, false),
		background = backgroundStyle.backgroundImage;
		
		var firstSlash = 0;
		var found = false;
		for(var i = background.length-1; i > 0; i--)
		{
			if(background[i] == "/" && !found)
			{
				firstSlash = i;
				found = true;
			}
		}
			
		var fileName = "";
		var length = 0;
		if(background[background.length-3] == "n"){
			length = background.length -1;}
		else{
			length = background.length -2;}
			
		for(var i = firstSlash+1; i < length; i++)
		{
			fileName += background[i];
		}	
		return fileName
}

function getFile(divId)
{
	var background = document.getElementById(divId).style.backgroundImage;
	var newBackground = background.replace("\"", "");
	var newBackground = newBackground.replace("\"", "");
	return newBackground;
}

function getFlatFileName(chemName)
{
	for(var k = 0; k < chemsOnShelf.length; k++)
	{
		var firstSlash = 0;
		var found = false;
		background = chemsOnShelfHover[k];
		for(var i = background.length-1; i > 0; i--)
		{
			if(background[i] == "/" && !found)
			{
				firstSlash = i;
				found = true;
			}
		}
			
		var fileName = "";
		var length = 0;
		if(background[background.length-3] == "n"){
			length = background.length -1;}
		else{
			length = background.length -2;}
			
		for(var i = firstSlash+1; i < length-4; i++)
		{
			fileName += background[i];
		}
		
		if(chemName == fileName)
			return chemsOnShelfHover[k];
	}
	return "";
}
function setup(chem)
{			
	document.getElementById("directions").innerHTML = "DIRECTIONS: <br/><br/>Switch two chemicals and get four in a row to collect the chemical. You only have so many moves!";
	
	if(!onePrompt)
	{
		theChem = getFlatFileName(chem);
		onePrompt = true;
	}
	var chemArray = new Array();
	if(theChem != "")
	{
		countMoves = 3;
		var desiredChem = 0;
		var switchIt = false;
		var picIndex = 0;
		for(var i = 0; i < idSlots.length; i++)
		{
			for(var j = 0; j<idSlots[i].length; j++)
			{
				var div = document.getElementById(idSlots[i][j]);
				div.style.width = "64px";
				div.style.height = "64px";
				if(desiredChem < 10)
				{
					chemArray.push(theChem);
					desiredChem++;
				}
				else
				{
					var randomInt = getRandomInt(0,chemsOnShelf.length-1);
					chemArray.push(chemsOnShelfHover[randomInt]);
				}
			}	
		}
		
		var newArray = shuffle(chemArray);
		var index = 0;
		for(var i = 0; i < idSlots.length; i++)
		{
			for(var j = 0; j<idSlots[i].length; j++)
			{
				var div = document.getElementById(idSlots[i][j]).style.backgroundImage = newArray[index];
				index++;
			}
		}
		if(setupWin())
			setup();
		document.getElementById("wanted").style.backgroundImage = "url(MiniGames/chemicalBottlesHover/"+chem+".png)";
		document.getElementById("moves").innerHTML = "3";

	}
	else if(wantedChem != null)
	{
		onePrompt = false;
		alert("I'm sorry that chemical doesn't not exist.");
		setup();
	}
	else
	{
		backOut();
	}
}

function backOut()
{
	document.getElementById("chemGame").innerHTML = "";
	onePrompt = false;
}

function retrieveChemical(chemImage)
{
	addItem(chemImage);
}

function decrementMoves()
{
	countMoves--;
	document.getElementById("moves").innerHTML = countMoves;
	var win = checkWin();
	if(countMoves == 0 || win)
	{
		if(!win)
		{
			setup();
			alert("Try again...");
		}
		else
			backOut();
	}
}

