
function itemClick(image, divId)
{
	var itemSlots=new Array("itemOne", "itemTwo", "itemThree", "itemFour", "itemFive", "itemSix", "itemSeven");
	var theSelected = "";
	var entered = false;
	cursorImage = document.getElementById("game").style.cursor;
	
	selectedFrom = document.getElementById(divId);
	backgroundStyle2 = selectedFrom.currentStyle || window.getComputedStyle(selectedFrom, false),
	currentBackground2 = backgroundStyle2.backgroundImage;

	if(cursorImage == "" )
	{
		for(var i = 0; i < itemSlots.length; i++)
		{
			selectedItem = document.getElementById(itemSlots[i]);
			backgroundStyle = selectedItem.currentStyle || window.getComputedStyle(selectedItem, false),
			currentBackground = backgroundStyle.backgroundImage;
			
			
			if(currentBackground == "none" && currentBackground2 != "none" && !entered)
			{	
				selectedItem.style.background = "";		
				selectedFrom.style.backgroundImage = "none";
				var text = checkTheObject(image);
				var index = chemicals.indexOf(stripCursorImage(cursorImage));
				if(index != -1)
					chemHover(stripCursorImage(cursorImage), divId, false)
				else
				{
					selectedItem.onmouseover = function() {displayMessage(text);}
					selectedItem.onmouseout = function() {removeMessage();}
				}
				theSelected = selectedItem;
				if(image[0] == "u" && image[1] == "r" && image[2] == "l")
				{
					selectedItem.style.backgroundImage = image;
					entered = true;
					break;
				}
				else
				{
					selectedItem.style.backgroundImage = "url(Inventory/" + image+")";
					entered = true;
					break;
				}
			}
			
		}
		if(image == "CasseroleCupHot.png")
		{
			//This code is when the test tube is hot, the user must wait for it to cool before continuing
			
			window.setTimeout(function() {
				theSelected.style.backgroundImage = "url(Inventory/CasseroleCupLiqClear.png)";
			}, 5000);	
		}
	
		if(!entered && currentBackground != "none")
		{
			alert("your inventory is full!");	
		}
	}
	
}

function itemGrab(divId)
{	
	selectedItem = document.getElementById(divId);
	backgroundStyle = selectedItem.currentStyle || window.getComputedStyle(selectedItem, false),
	currentBackground = backgroundStyle.backgroundImage;
	cursorImage = document.getElementById("game").style.cursor;
	fileName = getInventoryBackgroundFile(divId);
	
	if(currentBackground != "none" && cursorImage == "" && !RisDown)
	{
		selectedItem.style.backgroundImage = "none";
		if(fileName != "" && fileName[0] != 'E')
			document.getElementById("game").style.cursor = 'url("Inventory/' + fileName + '") 32 32, auto';
		else
			document.getElementById("game").style.cursor = 'url("Inventory/' + fileName + '") 64 64, auto';
		
	}
}

function addItem(image)
{
	var itemSlots=new Array("itemOne", "itemTwo", "itemThree", "itemFour", "itemFive", "itemSix", "itemSeven");
	
	var entered = false;
	for(var i = 0; i < itemSlots.length; i++)
	{
		selectedItem = document.getElementById(itemSlots[i]);
		backgroundStyle = selectedItem.currentStyle || window.getComputedStyle(selectedItem, false),
		currentBackground = backgroundStyle.backgroundImage;
		if((currentBackground == "none" || currentBackground == "" )&& !entered)
		{	
			selectedItem.style.backgroundImage = image;
			var text = checkTheObject(stripCursorImage(image));
			var index = chemicals.indexOf(getInventoryBackgroundFile(itemSlots[i]));
			if(index != -1)
			{
				chemHover(chemicals[index], itemSlots[i], false);
			}
			else
			{
				selectedItem.onmouseover = function() {displayMessage(text);}
				selectedItem.onmouseout = function() {removeMessage();}
			}
			entered = true;	
		}
	}
	
	
	if(!entered)
	{
		alert("your inventory is full!");	
	}
	
}

function useItem(requiredImage,divId)
{
	staticItem = document.getElementById(divId);
	cursorImage = document.getElementById("game").style.cursor;
	
	if(cursorImage == 'url("Inventory/' + requiredImage + '"), auto')
	{
		document.getElementById("game").style.cursor = "";
		alert("You used the item!")
	}

	
}

function selectItem(divId)
{
	
	var switchSound = new Audio("Rooms/Sounds/pickUpShort.wav");
	switchSound.volume = ".1";
	switchSound.play();
	selectedItem = document.getElementById(divId);
	backgroundStyle = selectedItem.currentStyle || window.getComputedStyle(selectedItem, false),
	currentBackground = backgroundStyle.backgroundImage;
	cursorImage = document.getElementById("game").style.cursor;
	
	if(currentBackground != "none" && cursorImage == "" && !lockCursor)
	{
				
		currentBackgroundString = String(currentBackground);
		var firstSlash = 0;
		var found = false;
		for(var i = currentBackgroundString.length-1; i > 0; i--)
		{
			if(currentBackgroundString[i] == "/" && !found)
			{
				firstSlash = i;
				found = true;
			}
		}
			
		var fileName = "";
		
		for(var i = firstSlash+1; i < currentBackgroundString.length-2; i++)
		{
			fileName += currentBackgroundString[i];
		}
		if(fileName != "CasseroleCupHot.png"){selectedItem.style.background = "transparent"};
		var chemOff = chemicals.indexOf(getInventoryBackgroundFile(divId));
		if(chemOff != -1)
				chemHover("", divId, true);
		window.setTimeout(function() {	
		for(var i = 0; i < droppers.length; i++)
		{
			if(fileName == droppers[i])
			{
				document.getElementById("game").style.cursor = 'url("Inventory/' + fileName + '") 64 64, auto';
				break;
			}
			else if(fileName != "CasseroleCupHot.png")
			{
				document.getElementById("game").style.cursor = 'url("Inventory/' + fileName + '") 32 32, auto';
			}
			
			

		}
		}, 10);
			
	}
	
}

function placeInInventory()
{
	var itemSlots=new Array("itemOne", "itemTwo", "itemThree", "itemFour", "itemFive", "itemSix", "itemSeven");
	var entered = false;
	for(var i = 0; i < itemSlots.length; i++)
	{
		selectedItem = document.getElementById(itemSlots[i]);
		backgroundStyle = selectedItem.currentStyle || window.getComputedStyle(selectedItem, false),
		currentBackground = backgroundStyle.backgroundImage;
		cursorImage = document.getElementById("game").style.cursor;
		if(currentBackground == "none" && (cursorImage != "" || cursorImage != "none") && !entered)
		{	
			if(stripCursorImage(cursorImage) != "undefined")
			{
				selectedItem.style.backgroundImage = "url(Inventory/" + stripCursorImage(cursorImage)+")";
				var text = checkTheObject(stripCursorImage(cursorImage));
				var index = chemicals.indexOf(stripCursorImage(cursorImage));
				if(index != -1)
					chemHover(stripCursorImage(cursorImage), itemSlots[i], false);
				else
				{
					selectedItem.onmouseover = function() {displayMessage(text);}
					selectedItem.onmouseout = function() {removeMessage();}
				}
				document.getElementById("game").style.cursor = "";
				entered = true;
				
				var index = droppers.indexOf(stripCursorImage(cursorImage),1);
				if(index != -1 && dropCount != 0)
				{
					if(processOne){processStepOne(chemInDropper, dropCount, false, false);}
					if(processTwo){processStepTwo(chemInDropper, dropCount, false, false);}
					dropCount = 0;	
				}
				var index = droppers.indexOf(stripCursorImage(cursorImage));
				if(index != -1)
				{
					if(index == 0)
					{
						selectedItem.onmouseover = function() {displayMessage("Empty Dropper");}
						selectedItem.onmouseout = function() {removeMessage();}
					}
					else
					{
						selectedItem.onmouseover = function() {displayMessage("Dropper with " + chemInDropper);}
						selectedItem.onmouseout = function() {removeMessage();}
					}
				}
				entered = true;
			}
			
		}
		
	}	
}

function showHideJournal()
{
	if(document.getElementById("journal").style.display == "")
		document.getElementById("journal").style.display = "block";
	else
		document.getElementById("journal").style.display = "";
}

function trash()
{
	var index = droppers.indexOf(stripCursorImage(document.getElementById("game").style.cursor));
	var index5 = beakerCass.indexOf(stripCursorImage(document.getElementById("game").style.cursor));

	if(index == -1 && index5 == -1)
		document.getElementById("game").style.cursor = "";
	else
		alert("You cannot throw this away!");
}

function wash()
{
	var index = droppers.indexOf(stripCursorImage(document.getElementById("game").style.cursor));
	var index2 = testTubes.indexOf(stripCursorImage(document.getElementById("game").style.cursor));
	var index3 = precips.indexOf(stripCursorImage(document.getElementById("game").style.cursor));
	var index4 = precipsLiq.indexOf(stripCursorImage(document.getElementById("game").style.cursor));
	var index5 = beakerCass.indexOf(stripCursorImage(document.getElementById("game").style.cursor));

	if(index != -1)
		document.getElementById("game").style.cursor ="url(Inventory/" + droppers[0] + ") 64 64, auto";	
	if(index2 != -1)
		document.getElementById("game").style.cursor ="url(Inventory/" + testTubes[0] + ") 32 32, auto";
	if(index3 != -1)
		document.getElementById("game").style.cursor ="url(Inventory/" + testTubes[0] + ") 32 32, auto";
	if(index4 != -1)
		document.getElementById("game").style.cursor ="url(Inventory/" + testTubes[0] + ") 32 32, auto";
	if(index5 != -1 && index5 < 9)
		document.getElementById("game").style.cursor ="url(Inventory/" + beakerCass[0] + ") 32 32, auto";
	if(index5 != -1 && index5 > 8)
		document.getElementById("game").style.cursor ="url(Inventory/" + beakerCass[9] + ") 32 32, auto";					
	
	if(dropCount != 0)
	{
		if(processOne){processStepOne(chemInDropper, dropCount, false, false);}
		if(processTwo){processStepTwo(chemInDropper, dropCount, false, false, false, false);}
		if(processThree){processStepThree(chemInDropper, dropCount, false, false, false, false, "")};
		if(processFour){processStepFour(chemInDropper, dropCount, false, false, previousClickedDiv);}
		if(processFive){processStepFive(chemInDropper, dropCount, false, false, false, false, false, previousClickedDiv);}
		if(processSix){processStepSix(chemInDropper, dropCount, false, false, false, previousClickedDiv);}
		if(processSeven) {processStepSeven(chemInDropper, dropCount, previousClickedDiv);}
		if(processEight){processStepEight(chemInDropper,dropCount, false, false, false, false, previousClickedDiv);}
		if(processNine){processStepNine(chemInDropper, dropCount, false, false, false, false, previousClickedDiv);}
		if(processTen) {processStepTen(chemInDropper, dropCount, false, false, false, false, false, previousClickedDiv);}
		if(processEleven) {processStepEleven(chemInDropper, dropCount, false, false, false, false, previousClickedDiv);}
		if(processTwelve){processStepTwelve(chemInDropper, dropCount, false, false, false, false, previousClickedDiv);}

	}
	dropCount = 0;
	chemInDropper = "";
	
	
}
