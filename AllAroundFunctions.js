
function getNameOfFile(image)
{	
	var fileName = "";
	var length = 0;
	for(var i = 0; i < image.length-4; i++)
	{
		fileName +=image[i];
	}
	
	return fileName;
	
}

function displayMessage(messageToBeShown)
{
	var message = document.getElementById("messages");
	message.innerHTML = messageToBeShown;
	message.style.display = "block";
}
function removeMessage()
{
	var message = document.getElementById("messages");
	message.style.display = "none";
}

function getInventoryBackgroundFile(divId)
{
		var selected = document.getElementById(divId);
		var backgroundStyle = selected.currentStyle || window.getComputedStyle(selected, false),
		background = backgroundStyle.backgroundImage;
		if (background == "none")
			return "";
		
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
		
		if(fileName[fileName.length-1] == 'n'){
			return fileName + 'g';
			
		}
		
		return fileName;	
}

function getFileName(file)
{
	var dotPos = 0;
	var justName = "";
	for(var i = file.length-1; i >= 0; i--)
	{
		if(file[i] == ".")
			dotPos = i;			
	}
	
	for(var i = 0; i < dotPos; i++)
	{		
		justName += file[i];
	}

	return justName;
}
function stripCursorImage(image)
{
	var end = 0;
	var start = 0;
	for(var i = 0; i < image.length; i++)
	{
		if(image[i] == ")")
			end = i-2;	
	}
	for(var i = 0; i < image.length; i++)
	{
		if(image[i] == "/")
			start = i +1;	
	}
	
	var newImage = "";
	for( var i = start; i <= end; i++)
	{
		newImage += image[i];	
	}
	if(newImage[newImage.length -1] == 'n')
		newImage = newImage + 'g';
	return newImage;
}


function getRandomInt (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(o){ //v1.0
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
}

function checkTheObject(object)
{
	var file = getFileName(object)
	if(objects[file] != null)
		return objects[file];
	if(precipTubes[file] != null)
		return precipTubes[file];
	if(liqTubes[file] != null)
		return liqTubes[file];
	if(theChemicals[file] != null)
		return theChemicals[file];
	
	return ""
}

