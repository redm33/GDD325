// JavaScript Document
var setOne = 0;

function placeBeakerCass()
{
	var burner = document.getElementById("beakerPlace");
	backgroundStyle = burner.currentStyle || window.getComputedStyle(burner, false),
	currentBackground = backgroundStyle.backgroundImage;
	cursorImage = document.getElementById("game").style.cursor;
	if((currentBackground == "" || currentBackground == "none") && 
	stripCursorImage(cursorImage) == "CasseroleCupLiqClear.png")
	{
		displayMessage(actions["heat"]);
		lockCursor = true;
		lockTurn = true;
		burner.style.backgroundImage = "url(Inventory/" + stripCursorImage(cursorImage) + ")";
		document.getElementById("game").style.cursor = "";
		window.setTimeout(function() {itemClick('CasseroleCupHot.png', 'beakerPlace');
		if(processOne == true){ processStepOne("", 0, true, false);}
		removeMessage();
		lockCursor = false;
		lockTurn = false;}, 5000);			
	}
	if((currentBackground == "" || currentBackground == "none") && 
	(stripCursorImage(cursorImage) == beakerCass[2] || stripCursorImage(cursorImage) == beakerCass[6]))
	{
		displayMessage(actions["heat"]);
		lockCursor = true;
		lockTurn = true;
		burner.style.backgroundImage = "url(Inventory/" + stripCursorImage(cursorImage) + ")";
		document.getElementById("game").style.cursor = "";
		window.setTimeout(function() {burner.style.backgroundImage = "url(Inventory/" + beakerCass[4] + ")";}, 1000);
		window.setTimeout(function() {
		burner.style.backgroundImage = "url(Inventory/" + beakerCass[6] + ")";
		itemGrab('beakerPlace');
		if(processOne == true){ processStepOne("", 0, true, false);}
		if(processTwo == true){ processStepTwo("", 0, true, false);}
		if(processThree == true){ processStepThree("", 0, true, false, false, false, "");}
		if(processFour == true){ processStepFour("", 0, true, false,"");}
		if(processFive){processStepFive("",0, true, false, false, false, false, "");}
		if(processEight){processStepEight("",0, false, true, false, false, "");}
		if(processNine){processStepNine("", 0, false, true, false, false, "");}
		if(processTen) {processStepTen("", 0, false, true, false, false, false, "");}
		if(processEleven) {processStepEleven("", 0, false, true, false, false, "");}
		if(processTwelve){processStepTwelve("", 0, false, true, false, false, "");}
		removeMessage();
		lockCursor = false;
		lockTurn = false;}, 8000);			
	}
	if((currentBackground == "" || currentBackground == "none") && 
	(stripCursorImage(cursorImage) == beakerCass[3] || stripCursorImage(cursorImage) == beakerCass[7]))
	{
		displayMessage(actions["heat"]);
		lockCursor = true;
		lockTurn = true;
		burner.style.backgroundImage = "url(Inventory/" + stripCursorImage(cursorImage) + ")";
		document.getElementById("game").style.cursor = "";
		window.setTimeout(function() {burner.style.backgroundImage = "url(Inventory/" + beakerCass[5] + ")";}, 1000);
		window.setTimeout(function() {
		burner.style.backgroundImage = "url(Inventory/" + beakerCass[1] + ")";
		itemClick('beakerPlace');
		if(processOne == true){ processStepOne("", 0, true, false);}
		if(processTwo == true){ processStepTwo("", 0, true, false);}
		if(processThree == true){ processStepThree("", 0, true, false, false, false, "");}
		if(processFour == true){ processStepFour("", 0, true, false,"");}
		if(processFive){processStepFive("",0, true, false, false, false, false, "");}
		if(processEight){processStepEight("",0, false, true, false, false, "");}
		if(processNine){processStepNine("", 0, false, true, false, false, "");}
		if(processTen) {processStepTen("", 0, false, true, false, false, false, "");}
		if(processEleven) {processStepEleven("", 0, false, true, false, false, "");}
		if(processTwelve){processStepTwelve("", 0, false, true, false, false, "");}
		removeMessage();
		lockCursor = false;
		lockTurn = false;}, 8000);	
		
					
	}
	
}

function alchemistTalk()
{
	var alchemistTalk = '<object width="189" height="450" id = "alchemist" ><param name="movie" value="Rooms/Images/AlchemistAnimTalk.swf"><param name="wmode" value="transparent" /><embed wmode="transparent"src= "Rooms/Images/AlchemistAnimTalk.swf" width="189" height="450"> </embed></object>';
	document.getElementById("alchemistWrapper").innerHTML = alchemistTalk;
	document.getElementById("speechBubble").style.display = "block";
	var wakeUp = new Audio("Rooms/Sounds/alchemistWakeUp.wav");
	wakeUp.play();
	snore.pause();
	resetDialog();
}

function alchemistGoodbye()
{
	var alchemistIdle = '<object width="189" height="450" id = "alchemist"  onmousedown="alchemistTalk();"><param name="movie" value="Rooms/Images/AlchemistAnimFLASHTest.swf"><param name="wmode" value="transparent" /><embed wmode="transparent"src= "Rooms/Images/AlchemistAnimFLASHTest.swf" width="189" height="450"> </embed></object>';
	document.getElementById("alchemistWrapper").innerHTML = alchemistIdle;
	document.getElementById("speechBubble").style.display = "none";
	snore.play();
}

function switchQuestions(switchTo)
{
	var questionSets = new Array('<div class = "questionHover" id = "firstQ" style = "display: block;"><a href = "#" onclick = "talking(\'first\')"> Where do I find an eyedropper? </a></div><div class = "questionHover" id = "secQ" style = "display: block;"><a href = "#" onclick = "talking(\'two\')"> I\'m so confused. Where do I start? </a></div><div class = "questionHover" id = "thirdQ" style = "display: block;"><a  href = "#" onclick = "talking(\'three\')">Where do I get a chemical? </a></div><div> <span  onclick = "switchQuestions(2)" id = "leftArrow"><</span><span id = "rightArrow" onclick = "switchQuestions(1)">></span> </div>','<div class = "questionHover" id = "fourthQ" style = "display: block;"><a href = "#" onclick = "talking(\'four\')"> How do I heat my solution?</a></div><div class = "questionHover" id = "fifthQ" style = "display: block;"><a href = "#" onclick = "talking(\'five\')"> How do I cool my solution? </a></div><div class = "questionHover" id = "sixthQ" style = "display: block;"><a href = "#" onclick = "talking(\'six\')">  Where is the centrifuge? </a></div><div > <span onclick = "switchQuestions(0)"  id = "leftArrow"><</span><span onclick = "switchQuestions(2)"id = "rightArrow">></span> </div>', '<div class = "questionHover" id = "seventhQ" style = "display: block;"><a  href = "#" onclick = "talking(\'seven\')">  How do I use the centrifuge? </a></div><div class = "questionHover" id = "eightQ" style = "display: none;"><a  href = "#" onclick = "talking(\'eight\')"> I think I know what\'s in the solution! Can you check this for me? </a></div><div class = "questionHover" id = "goodbyeQ" style = "display: block;"><a href = "#"  onclick = "alchemistGoodbye()"> Goodbye </a></div> <div> <span onclick = "switchQuestions(1)" id = "leftArrow"><</span><span  onclick = "switchQuestions(0)"id = "rightArrow">></span> </div>');
	
	switch (switchTo)
	{
		case 0:
			document.getElementById('questions').innerHTML = questionSets[0];
			break;
		case 1:
			document.getElementById('questions').innerHTML = questionSets[1];
			break;
		case 2:
			document.getElementById('questions').innerHTML = questionSets[2];
			if(checkIt)
				document.getElementById('eightQ').style.display = "block";
			break;
			
	}
}