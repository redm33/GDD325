// JavaScript Document

var normBackground = ["url('chemAqua.png')", "url('chemOrange.png')",
"url('chemBlue.png')", "url('chemLime.png')", "url('chemRed.png')",
"url('chemPink.png')"];
var highlightBackground = ["url('chemAquaSelect.png')", "url('chemOrangeSelect.png')", 
"url('chemBlueSelect.png')", "url('chemLimeSelect.png')", "url('ChemRedSelect.png')",
"url('chemPinkSelect.png')"];

var optionList = ["option1", "option2", "option3", "option4", "option5", "option6"];

function selectOption(theSelected)
{
	for (var i = 0; i < optionList.length; i++)
	{
		for(var j = 0; j < highlightBackground.length; j++)
		{
			var current = getBackgroundFile(optionList[i]);
			if(current == highlightBackground[j])
			{
				document.getElementById(optionList[i]).style.backgroundImage = normBackground[j];	
			}
		}
	}
	for (var i = 0; i < optionList.length; i++)
	{
		for(var j = 0; j < normBackground.length; j++)
		{
			var current = getBackgroundFile(theSelected);
			if(current == normBackground[j])
			{
				document.getElementById(theSelected).style.backgroundImage = highlightBackground[j];	
			}
		}
	}	
	
}

function checkWin(filename)
{
	var theGuess;	
	for (var i = 0; i < optionList.length; i++)
	{
		for(var j = 0; j < highlightBackground.length; j++)
		{
			var current = getBackgroundFile(optionList[i]);
			if(current == highlightBackground[j])
			{
				theGuess = getBackgroundFile(optionList[i]);
			}
		}
	}
	if(theGuess == "url('" + filename + "')")
	{
		alert("You got it right!")	
	}
	else
	{
		alert("That is wrong...");
	}
	
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
		return "url('" + fileName + "')";	
}