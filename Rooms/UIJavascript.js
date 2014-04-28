function itemClick(image, divId)
{
	var itemSlots=new Array("itemOne", "itemTwo", "itemThree", "itemFour", "itemFive", "itemSix", "itemSeven");
	
	var entered = false;
	cursorImage = document.getElementById("userInterface").style.cursor;

	if(cursorImage == "")
	{
		for(var i = 0; i < itemSlots.length; i++)
		{
			selectedItem = document.getElementById(itemSlots[i]);
			selectedFrom = document.getElementById(divId);
			backgroundStyle = selectedItem.currentStyle || window.getComputedStyle(selectedItem, false),
			currentBackground = backgroundStyle.backgroundImage;
			if(currentBackground == "none" && !entered)
			{	
				
				selectedItem.style.background = "";		
				selectedFrom.style.backgroundImage = "none";
				selectedItem.style.backgroundImage = "url(UISourceImages/PNGFiles/" + image+")";
				entered = true;
			}
		}
		
		if(!entered)
		{
			alert("your inventory is full!");	
		}
	}
	
}

function useItem(requiredImage,divId)
{
	staticItem = document.getElementById(divId);
	cursorImage = document.getElementById("userInterface").style.cursor;
	
	if(cursorImage == 'url("UISourceImages/PNGFiles/' + requiredImage + '"), auto')
	{
		document.getElementById("userInterface").style.cursor = "";
		alert("You used the item!")
	}

	
}
function selectItem(divId)
{
	
	selectedItem = document.getElementById(divId);
	backgroundStyle = selectedItem.currentStyle || window.getComputedStyle(selectedItem, false),
	currentBackground = backgroundStyle.backgroundImage;
	cursorImage = document.getElementById("userInterface").style.cursor;
	
	if(currentBackground != "none" && cursorImage == "")
	{
		selectedItem.style.background = "transparent";		
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
				
		document.getElementById("userInterface").style.cursor = 'url("UISourceImages/PNGFiles/' + fileName + '"), auto';
	}
	else if(currentBackground == "none" && cursorImage != "")
	{
		cursorImage = document.getElementById("userInterface").style.cursor;
		var stop = false;
		var fileName = "";
		for(var i = 0; i <cursorImage.length; i++)
		{
			if(cursorImage[i] != "," && !stop)
			{
				fileName += cursorImage[i]
			}
			else
				stop = true;
		}
		selectedItem.style.background = "";		
		selectedItem.style.backgroundImage = fileName;
		document.getElementById("userInterface").style.cursor = "";
	
	}
		
}

function showHideJournal()
{
	if(document.getElementById("journal").style.display == "")
	{
		document.getElementById("journal").style.display = "block";
	}
	else
	{
		document.getElementById("journal").style.display = "";
	}
}

