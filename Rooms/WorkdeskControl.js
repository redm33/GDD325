// JavaScript Document
var droppers = new Array("EyedropperFinal.png", "EyedropperWater.png","EyedropperWater.png","EyedropperWater.png","EyedropperWater.png","EyedropperWater.png","EyedropperWater.png","EyedropperWater.png","EyedropperWater.png","EyedropperWater.png","EyedropperWater.png","EyedropperWater.png","EyedropperWater.png","EyedropperWater.png","EyedropperWater.png", "EyedropperCloudy.png", "EyedropperCloudy.png","EyedropperCloudy.png","EyedropperCloudy.png","EyedropperCloudy.png","EyedropperCloudy.png","EyedropperCloudy.png","EyedropperCloudy.png","EyedropperCloudy.png","EyedropperCloudy.png","EyedropperCloudy.png","EyedropperYellowLiq.png","EyedropperYellowLiq.png","EyedropperYellowLiq.png", "EyeDropperBlueLiq.png");
var dropAmount = new Array(0, 2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2);
var colors = new Array("#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000", "#000");
var chemicals = new Array("","1MHCL.png","6MHCL.png", "6MHNO3.png", "6MNH3.png", "12MHCL.png", "15MNH3.png", "18MH2SO4.png", "C2H4O2.png", "C2H5NS.png", "H2O.png", "H2O2.png", "HC2H3O2.png", "NH3.png", "bottleUnlabeled.png" ,
"AgNO3.png", "C2H2O4.png", "HgCl2.png", "KOH1MKNO3.png", "MgNO32.png", "Na2S2O4.png", "NaOH.png", "NH4C2H3O2.png", "NH4CL.png", "NH4NO3.png", "SNCl2.png", 
"NH42S.png", "FeK4C6N6.png", "K2CrO4.png"); 


var testTubes = new Array("TestTubeEmpty.png", "TTLiqClear.png","TTLiqClear.png","TTLiqClear.png","TTLiqClear.png","TTLiqClear.png","TTLiqClear.png","TTLiqClear.png","TTLiqClear.png","TTLiqClear.png","TTLiqClear.png","TTLiqClear.png","TTLiqClear.png","TTLiqClear.png", "TTLiqCloudy.png","TTLiqCloudy.png","TTLiqCloudy.png","TTLiqCloudy.png","TTLiqCloudy.png","TTLiqCloudy.png","TTLiqCloudy.png","TTLiqCloudy.png","TTLiqCloudy.png","TTLiqCloudy.png","TTLiqCloudy.png", "TTLiqYellow.png","TTLiqYellow.png","TTLiqYellow.png", "TTLiqRedBrwn.png", "TTLiqBlue.png", "TTLiqCloudyNails.png"); 
var precips = new Array("TTPrecBlack.png", "TTPrecBlue.png", "TTPrecGray.png", "TTPrecOrange.png", "TTPrecPink.png", "TTPrecRedBrwn.png", "TTPrecWhite.png", "TTPrecYellow.png", "TTPrecWhite.png");
var precipsLiq = new Array("TTPrecBlackLiqClear.png", "TTPrecBlueLiqClear.png", "TTPrecGrayLiqClear.png", "TTPrecOrangeLiqClear.png", "TTPrecPinkLiqClear.png", "TTPrecRedBrwnLiqClear.png", "TTPrecWhiteLiqClear.png", "TTPrecYellowLiqClear.png", "TTPrecWhiteLiqCloudy.png", "TTPrecWhiteLiqPurple.png");
var beakerCass = new Array("BeakerEmpty.png", "BeakerLiqClear.png", "BeakerTT01.png", "BeakerTT02.png", "BeakerHotAnimTT01.gif", "BeakerHotAnimTT02.gif", "BeakerHotTT01Still.png", "BeakerHotTT02Still.png", "BeakerHotStill.png", "CasseroleCup.png", "CasseroleCupLiqClear.png", "CasseroleCupCool.png", "CasseroleCupHot.png");

	var workareaText = new Array("workArea", "workArea2", "workArea3", "workArea4", "workArea5", "workArea6", "workArea7", "workArea8", "workArea9", "workArea10", "workArea11", "workArea12", "workArea13", "workArea14", "workArea15");

var dropCount = 0;
var height = 2;
var margin = 56;
var RisDown = false;
var chemInBeaker = "";
var chem2InBeaker = "";
var previousClickedDiv = "";
var thePrecip = "";

var lockCursor = false;
var lockTurn = false;

var clickedPub = "";
var cursorPub = "";

var workareaHover = "";
var workareaHover2 = "";
var workareaHover3 = "";
var workareaHover4 = "";
var workareaHover5 = "";
var workareaHover6 = "";
var workareaHover7 = "";
var workareaHover8 = "";
var workareaHover9 = "";
var workareaHover10 = "";
var workareaHover11 = "";
var workareaHover12 = "";
var workareaHover13 = "";
var workareaHover14 = "";
var workareaHover15 = "";

var droplet = new Audio("Rooms/Sounds/droplet.wav");

function placeItemOnDesk(divId)
{
	var switchSound = new Audio("Rooms/Sounds/pickUpShort.wav");
	switchSound.volume = ".1";
	switchSound.play();
	workarea = document.getElementById(divId);
	backgroundStyle = workarea.currentStyle || window.getComputedStyle(workarea, false),
	currentBackground = backgroundStyle.backgroundImage;
	cursorImage = document.getElementById("game").style.cursor;
	workarea.style.backgroundImage = "url(Inventory/" + stripCursorImage(cursorImage) + ")";
	document.getElementById("game").style.cursor = "";
	
	var text = checkTheObject(stripCursorImage(cursorImage));
	var index = chemicals.indexOf(stripCursorImage(cursorImage));
	if(index != -1)
		chemHover(stripCursorImage(cursorImage), divId, false)
	else
	{
		workarea.onmouseover = function() {displayMessage(text);}
		workarea.onmouseout = function() {removeMessage();}
	}
	
	var index = droppers.indexOf(stripCursorImage(cursorImage),1);
	if(index != -1 && dropCount != 0) 
	{
		if(processOne){processStepOne(chemInDropper, dropCount, false, false);}
		if(processTwo){processStepTwo(chemInDropper, dropCount, false, false, false, false);}
		if(processThree){processStepThree(chemInDropper, dropCount, false, false, false, false, "");}
		if(processFour){processStepFour(chemInDropper, dropCount, false, false, previousClickedDiv);}
		if(processFive){processStepFive(chemInDropper, dropCount, false, false, false, false, false, previousClickedDiv);}
		if(processSix){processStepSix(chemInDropper, dropCount, false, false, false, previousClickedDiv);}
		if(processSeven) {processStepSeven(chemInDropper, dropCount, previousClickedDiv);}
		if(processEight){processStepEight(chemInDropper,dropCount, false, false, false, false, previousClickedDiv);}
		if(processNine){processStepNine(chemInDropper, dropCount, false, false, false, false, previousClickedDiv);}
		if(processTen) {processStepTen(chemInDropper, dropCount, false, false, false, false, false, previousClickedDiv);}
		if(processEleven) {processStepEleven(chemInDropper, dropCount, false, false, false, false, previousClickedDiv);}
		if(processTwelve){processStepTwelve(chemInDropper, dropCount, false, false, false, false, previousClickedDiv);}
		dropCount = 0;
	}
	
	var index = droppers.indexOf(stripCursorImage(cursorImage));
	if(index != -1)
	{
		if(index == 0)
		{
			workarea.onmouseover = function() {displayMessage("Empty Dropper");}
			workarea.onmouseout = function() {removeMessage();}
		}
		else
		{
			workarea.onmouseover = function() {displayMessage("Dropper with " + chemInDropper);}
			workarea.onmouseout = function() {removeMessage();}
		}
	}
}

function interactWithDesk(workareaDiv, chemDiv)
{
	
	var workarea = document.getElementById(workareaDiv);
	var selection = document.getElementById(chemDiv);
	backgroundStyle = workarea.currentStyle || window.getComputedStyle(workarea, false),
	currentBackground = backgroundStyle.backgroundImage;
	backgroundStyle =selection.currentStyle || window.getComputedStyle(selection, false),
	selectionBackground = backgroundStyle.backgroundImage;
	cursorImage = document.getElementById("game").style.cursor;

	var dropperOn = false;
	var chemOn = false;
	var precipLiq = false;
	var precip = false;
	var beakerCassor = false;
	var mixing = false;
	
	var cursorStrip = stripCursorImage(cursorImage);
	var index = testTubes.indexOf(cursorStrip,1);
	var indexClicked = testTubes.indexOf(getInventoryBackgroundFile(workareaDiv));

	if(cursorImage != "" && (currentBackground == "" || currentBackground == "none") && !RisDown)
		placeItemOnDesk(workareaDiv);
		
	else if((cursorImage == "" || cursorImage == "none") && currentBackground != "" && !RisDown && !lockCursor)
	{
		var switchSound = new Audio("Rooms/Sounds/pickUpShort.wav");
		switchSound.volume = ".1";
		switchSound.play();
		itemGrab(workareaDiv);
		workarea.onmouseover = "";
		workarea.onmouseout = "";	
	}
	else if(index != -1 && indexClicked != -1)
	{
		if(indexClicked == 0)
			workarea.style.backgroundImage = "url(Inventory/" + cursorStrip + ")";
		document.getElementById("game").style.cursor = "url(Inventory/TestTubeEmpty.png) 32 32, auto";
		if(processFive){processStepFive(chemInDropper, dropCount, false, false, false, false, true, "");}
		if(processEleven) {processStepEleven(chemInDropper, dropCount, false, false, false, true, "");}
		if(processTwelve) {processStepTwelve(chemInDropper, dropCount, false, false, false, true, "");}
	}
	
	else
	{	
		previousClickedDiv = workareaDiv;

		var indexCur = droppers.indexOf(cursorStrip,1)
		var indexBack = chemicals.indexOf(getInventoryBackgroundFile(workareaDiv))
		
		if(indexCur != -1)
			dropperOn = true;			
		if(indexBack != -1 && cursorStrip == droppers[0])
			chemOn = true;	
		var index = precipsLiq.indexOf(getInventoryBackgroundFile(workareaDiv))
		if(index != -1)
			precipLiq = true;
		var index = precips.indexOf(getInventoryBackgroundFile(workareaDiv))
		if(index != -1)
			precip = true;		
		var index = beakerCass.indexOf(getInventoryBackgroundFile(workareaDiv))
		if (index != -1)
			beakerCassor = true;	
		if(cursorStrip == "MixingRodVert.png")
			mixing = true;
			
		var imageSwitch = getResultingChem(stripCursorImage(cursorImage), getInventoryBackgroundFile
		(workareaDiv), workareaDiv, dropperOn, chemOn, precipLiq, precip, beakerCassor, mixing);
		
		if(imageSwitch != null)
		{
			if (imageSwitch.length == 1)
				document.getElementById("game").style.cursor = "url(Inventory/" + imageSwitch[0] + ") 64 64, auto";
			
			else if(imageSwitch.length == 2)
			{
				cursorPub = imageSwitch[0];
				if(cursorStrip != droppers[0])
				{
					workarea.style.backgroundImage = "url(Inventory/" + imageSwitch[1] + ")";
					dropCount++;
					droplet.play();
					if(chemInDropper != "")
						displayMessage("You've added " + dropCount + " drops of " + chemInDropper + ".");
				}
				else
					workarea.style.backgroundImage = "url(Inventory/" + imageSwitch[1] + ")";
				var text = checkTheObject(imageSwitch[1]);
				workarea.onmouseover = function() {displayMessage(text);}
				workarea.onmouseout = function() {removeMessage();}

			}
			else if(imageSwitch.length == 3)
			{
				if(cursorStrip != droppers[0])
				{
					workarea.style.backgroundImage = "url(Inventory/" + imageSwitch[0] + ")";
					dropCount++;
					droplet.play();
					if(chemInDropper != "")
						displayMessage("You've added " + dropCount + " drops of " + chemInDropper + ".");
				}
				else
				{
					workarea.style.backgroundImage = "url(Inventory/" + imageSwitch[0] + ")";
					document.getElementById("game").style.cursor = "url(Inventory/" + imageSwitch[1] + ") 64 64, auto";	
				}
				var text = checkTheObject(imageSwitch[0]);
				workarea.onmouseover = function() {displayMessage(text);}
				workarea.onmouseout = function() {removeMessage();}
			}
			else if(imageSwitch.length == 4 )
			{
				if(cursorStrip != droppers[0])
				{
					workarea.style.backgroundImage = "url(Inventory/" + imageSwitch[0] + ")";
					dropCount++;
					droplet.play();
					if(chemInDropper != "")
						displayMessage("You've added " + dropCount + " drops of " + chemInDropper + ".");
				}
				else
				{
					workarea.style.backgroundImage = "url(Inventory/" + imageSwitch[0] + ")";
					document.getElementById("game").style.cursor = "url(Inventory/" + imageSwitch[1] + ") 64 64, auto";	
				}	
				var text = checkTheObject(imageSwitch[0]);
				workarea.onmouseover = function() {displayMessage(text);}
				workarea.onmouseout = function() {removeMessage();}
			}
		}
	}
}

function getResultingChem(cursor, clicked, clickedDiv, dropper, chem, precipLiq, precip, beakerCassor, mix)
{

	if(cursor == droppers[0] && clicked == "TTLiqCloudy.png")
	{
		chemInDropper = "Solution";		
		return new Array(clicked, "EyedropperCloudy.png", dropAmount[index], colors[index]);
	}
	
	if(cursor == "Nails.png" && clicked == "TTLiqCloudy.png")
	{
		document.getElementById("game").style.cursor = "";
		document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTLiqCloudyNails.png)";
		var text = checkTheObject("TTLiqCloudyNails");
		workarea.onmouseover = function() {displayMessage(text);}
		workarea.onmouseout = function() {removeMessage();}
		if(processTwelve){processStepTwelve("", 0, false, false, true, false, "");}
		return null;
	}
	if(clicked == "TTLiqCloudyNails.png" && RisDown)
	{
		document.getElementById("game").style.cursor = "url(Inventory/Nails.png) 32 32, auto";
		if(processTwelve){processStepTwelve("", 0, false, false, true, false, "");}
		return new Array("TTLiqCloudy.png", "Nails.png", 0, "");	
	}
	if(dropper && !precip && !chem && !beakerCassor)
	{
		var index = droppers.indexOf(cursor);
		var index2 = beakerCass.indexOf(clicked);
		var index3 = testTubes.indexOf(clicked);
		if(index != -1 && clicked != "" && (index2 != -1 || index3 != -1))
		{
			if(processSeven){return new Array("TTLiqCloudy.png", droppers[0], dropAmount[index], colors[index]);}	
			
			if(index < 13 && index3 > 13)
				return new Array(testTubes[index3], droppers[0], dropAmount[index], colors[index]);	
			if(index < 24 && index3 > 24)
				return new Array(testTubes[index3], droppers[0], dropAmount[index], colors[index]);
			else
				return new Array(testTubes[index], droppers[0], dropAmount[index], colors[index]);
		}
	}
	if(beakerCassor && dropper || beakerCassor && chem || beakerCassor && cursor == droppers[0])
	{
		if(cursor != droppers[0] && clicked == beakerCass[0] && chemInDropper == "H2O")
			return new Array(beakerCass[1], droppers[0], 0);
		else if(cursor == droppers[0] && (clicked == beakerCass[1] || clicked == beakerCass[8]))
		{
			if(clicked == beakerCass[1])
				chemInDropper = "H2O";
			if(clicked == beakerCass[8])
				chemInDropper = "Hot H2O";
			return new Array(beakerCass[0], droppers[1], 0);
		}
		else if(clicked == beakerCass[1])
			return new Array(beakerCass[1], droppers[1], 0);
		
		if(cursor != droppers[0] && clicked == beakerCass[9])
			return new Array(beakerCass[10], droppers[1], 0);
		else if(cursor == droppers[0] && clicked == beakerCass[10])
		{
			chemInDropper = "Solution";
			return new Array(beakerCass[9], droppers[1], 0);
		}
		else if(clicked == beakerCass[10])
			return new Array(beakerCass[10], droppers[1], 0);		
	}
	
	if(mix)
	{
		displayMessage("Solution has been mixed.");
		if (processOne){processStepOne("", 0, false, true);}
		if (processTwo){processStepTwo("", 0, false, true, false, false);}
		if (processThree){processStepThree("", 0, false, true, false, false, clickedDiv);}
		if (processFour){processStepFour("", 0, false, true, clickedDiv);}
		if(processSix){processStepSix("", 0, true, false, false, clickedDiv);}
		if(processEight){processStepEight("", 0, true, false, false, false,clickedDiv);}
		if(processNine){processStepNine("", 0, true, false, false, false, previousClickedDiv);}
		if(processTen) {processStepTen("", 0, true, false, false, false, false, previousClickedDiv);}
		if(processEleven) {processStepEleven("", 0, true, false, false, false, previousClickedDiv);}
		if(processTwelve){processStepTwelve("", 0, true, false, false, false, previousClickedDiv);}

	}
	var index = testTubes.indexOf(cursor);
	var index2 = precipsLiq.indexOf(cursor);
	if(beakerCassor && (index != -1 || index2 != -1))
	{
		if(beakerCass[1] == clicked)
		{
			setCursorSetBackground("", beakerCass[2], clickedDiv, 32);
			chemInBeaker = cursor;
		}
		else if(beakerCass[2] == clicked)
		{
			setCursorSetBackground("", beakerCass[3], clickedDiv, 32);
			chem2InBeaker = cursor;
		}
		else if(beakerCass[8] == clicked)
		{
			setCursorSetBackground("", beakerCass[6], clickedDiv, 32);
			chemInBeaker = cursor;	
		}
		else if(beakerCass[6] == clicked)
		{
			setCursorSetBackground("", beakerCass[7], clickedDiv, 32);
			chem2InBeaker = cursor;
		}
	}
	if(beakerCassor && (cursor == "undefined" || cursor == "none" || cursor == ""))
	{
		if(beakerCass[2] == clicked && RisDown)
			setCursorSetBackground(chemInBeaker, beakerCass[1], clickedDiv, 32);
		else if(beakerCass[3] == clicked && RisDown)
			setCursorSetBackground(chem2InBeaker, beakerCass[2], clickedDiv, 32);
		else if(beakerCass[6] == clicked && RisDown)
			setCursorSetBackground(chemInBeaker, beakerCass[8], clickedDiv, 32);
		else if(beakerCass[7] == clicked && RisDown)
			setCursorSetBackground(chem2InBeaker, beakerCass[6], clickedDiv, 32);			
	}
	if(chem && !beakerCassor)
	{
		var index = chemicals.indexOf(clicked);
		if(index != -1 && cursor == droppers[0])
		{
			if(chemInDropper != "")
			{
				chemInDropper = getFileName(chemicals[index]);
				return new Array(droppers[index]);
			}
			else
			{
				chemInDropper = getFileName(chemicals[index]);
				return new Array(droppers[index]);	
			}		
		}
	}
	if(precipLiq || precip)
	{
		var index = precips.indexOf(clicked);
		var index2 = precipsLiq.indexOf(clicked);
		var index3 = droppers.indexOf(cursor);
		if(cursor == droppers[0])
		{
			 if(index2 != -1)
			 	playPrecipGame(precipsLiq[index2]);
			
			 document.onkeypress=function(e){
			  var evtobj=window.event? event : e
			  var code=evtobj.charCode? evtobj.charCode : evtobj.keyCode
			  var asciiStr=String.fromCharCode(code);
			  if(asciiStr == 'r')
				RisDown = true;
			 }
			document.onkeyup=function(e){
			  var evtobj=window.event? event : e
			  var code=evtobj.charCode? evtobj.charCode : evtobj.keyCode
			  var asciiStr=String.fromCharCode(code);
			  if(asciiStr == 'r')
				RisDown = false;
			}
			chemInDropper = "Solution";
			if (processTwo){processStepTwo("", 0, false, false, false, true);}
			if (processThree){processStepThree("", 0, false, false, false, true, "");}
			if(processFive){processStepFive(chemInDropper, dropCount, false, false, false, true, false, "");}
			if(processSix) {processStepSix(chemInDropper, dropCount, false, false, true, "");
			if(index2 == precipsLiq.length-1)
				return new Array(droppers[droppers.length-1], "TTPrecWhite.png");
			else
				return new Array("EyedropperCloudy.png", "TTPrecWhite.png");}
			if(processEight){processStepEight(chemInDropper, dropCount, false, false, false, true, "");}
			if(processNine){processStepNine("", 0, false,false, false, true, "");}
			if(processTen) {processStepTen("", 0, false, false, false, true, false, "");}
			
			
			if(index2 == precips.length-1)
				return new Array(droppers[droppers.length-5], precips[index2]);
			else
				return new Array(droppers[1], precips[index2]);	
			
		}
		else if(index != -1 && index3 != -1)
			return new Array(droppers[1], precipsLiq[index]);			
		else if(index2 != -1 && index3 != -1)
			return new Array(droppers[1], precipsLiq[index2]);
	}
	return null;
}

function setCursorSetBackground(cursor, background, clickedDiv, diff)
{
	document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/" + background + ")";
	var text = checkTheObject(background);
	document.getElementById(clickedDiv).onmouseover = function() {displayMessage(text);}
	document.getElementById(clickedDiv).onmouseout = function() {removeMessage();}
	if(cursor != "" || RisDown)
		document.getElementById("game").style.cursor = "url(Inventory/" + cursor + ")" + diff + " " + diff + ",auto";
	else
		document.getElementById("game").style.cursor = "";
}

function interactCentrifuge()
{
<<<<<<< HEAD
	cursorImage = document.getElementById("game").style.cursor;
	for(var i=0; i<testTubes.length; i++)
	{
		if(i!=0)
		{
			if(testTubes[i] == stripCursorImage(cursorImage))
			{			
				if(breakCounter == 0)
					breakFlag = true;
						
				if(breakFlag == true)
				{
					document.getElementById("rotateGame").style.display = "block";
					playRotateGame();
					document.getElementById("game").style.cursor = "";	
				}
				else
				{	
					var burner = document.getElementById("burner");
					var index = testTubes.indexOf(stripCursorImage(cursorImage));
					if(index != -1)
					{
						thePrecip = "TTPrecWhiteLiqClear.png";
						if(processTwo) {thePrecip = "TTPrecWhiteLiqClear.png";
						processStepTwo("", 0, false, false, true, false);};
						if(processThree) {thePrecip = "TTLiqCloudy.png";
						processStepThree("", 0, false, false, true, false, "");};
						if(processFour) {thePrecip = "TTLiqCloudy.png";
						processStepFour("", 0, false, true, "");};
						if(processFive){thePrecip = "TTPrecWhiteLiqCloudy.png";
						processStepFive("", 0, false, false, true, false, false, "");}
						if(processSix){
							if(Bi3 && !Cu2)
								thePrecip = "TTPrecWhiteLiqClear.png";
							else if(Cu2 && !Bi3)
								thePrecip = "TTLiqBlue.png";
							else if(Cu2 && Bi3)
								thePrecip = "TTPrecWhiteLiqPurple.png";
						processStepSix("", 0, false, true, false, "");}
						if(processEight) {thePrecip = "TTPrecWhiteLiqClear.png"; 
							processStepEight("", 0, false, false, true, false, "");}
						if(processNine){thePrecip = "TTPrecWhiteLiqClear.png";
							processStepNine("", 0, false, false, true, false, "");}
						if(processTen){processStepTen("", 0, false, false, true, false, "");}
						
						displayMessage(actions["centrifuge"]);
						document.getElementById("game").style.cursor = "";
						lockCursor = true;
						lockTurn = true;
						window.setTimeout(function(){
							document.getElementById("game").style.cursor = "url(Inventory/" + thePrecip + ") 32 32, auto";
							lockCursor = false;
							lockTurn = false;
							removeMessage();
							if(breakCounter <= 0)
								breakCounter--;
						}, 5000);
					}
				}
			}
=======
	if(breakCounter == 0)
	{
		breakFlag = true;
	}
	else
		breakCounter--;
	if(breakFlag == true)
	{
		document.getElementById("rotateGame").style.display = "block";
		playRotateGame();
		cursorImage = document.getElementById("game").style.cursor;
		document.getElementById("game").style.cursor = "";	
	}
	else
	{
		cursorImage = document.getElementById("game").style.cursor;
		var burner = document.getElementById("burner");
		var index = testTubes.indexOf(stripCursorImage(cursorImage));
		if(index != -1)
		{
			thePrecip = "TTPrecWhiteLiqClear.png";
			if(processTwo) {thePrecip = "TTPrecWhiteLiqClear.png";
			processStepTwo("", 0, false, false, true, false);};
			if(processThree) {thePrecip = "TTLiqCloudy.png";
			processStepThree("", 0, false, false, true, false, "");};
			if(processFour) {thePrecip = "TTLiqCloudy.png";
			processStepFour("", 0, false, true, "");};
			if(processFive){thePrecip = "TTPrecWhiteLiqCloudy.png";
			processStepFive("", 0, false, false, true, false, false, "");}
			if(processSix){
				if(Bi3 && !Cu2)
					thePrecip = "TTPrecWhiteLiqClear.png";
				else if(Cu2 && !Bi3)
					thePrecip = "TTLiqBlue.png";
				else if(Cu2 && Bi3)
					thePrecip = "TTPrecWhiteLiqPurple.png";
			processStepSix("", 0, false, true, false, "");}
			if(processEight) {thePrecip = "TTPrecWhiteLiqClear.png"; 
				processStepEight("", 0, false, false, true, false, "");}
			if(processNine){thePrecip = "TTPrecWhiteLiqClear.png";
				processStepNine("", 0, false, false, true, false, "");}
			if(processTen){processStepTen("", 0, false, false, true, false, "");}
			
			displayMessage(actions["centrifuge"]);
			document.getElementById("game").style.cursor = "";
			lockCursor = true;
			lockTurn = true;
			window.setTimeout(function(){
				document.getElementById("game").style.cursor = "url(Inventory/" + thePrecip + ") 32 32, auto";
				lockCursor = false;
				lockTurn = false;
				removeMessage();
			}, 5000);
>>>>>>> f33a61d176a65011a15dfae018a3deee769b34e4
		}
	}
}

function interactIceBath()
{

	cursorImage = document.getElementById("game").style.cursor;
	var icebath = document.getElementById("iceBath");
	var cursor = cursorImage;
	
	var index = testTubes.indexOf(stripCursorImage(cursorImage));
	if(index != -1)
	{
		displayMessage(actions["cool"]);
		if(processFive) {processStepFive(chemInDropper, dropCount, false, true, false, false, false, "");}
		if(processTen) {processStepTen("", 0, false, false, false, false, true, "");}
		if(processEleven) {processStepEleven("", 0, false, false, true, false, "");}
		document.getElementById("game").style.cursor = "";
		icebath.style.backgroundImage = "url('Rooms/Images/IceBathTT.png')";
		lockCursor = true;
		lockTurn = true;
		window.setTimeout(function(){
			document.getElementById("game").style.cursor = "url(Inventory/TTLiqClear.png) 32 32, auto";
			icebath.style.backgroundImage = "url(Rooms/Images/IceBath.png)";
			lockCursor = false;
			lockTurn = false;
			removeMessage();
		}, 5000);
	}
}

function chemHover(image, div, remove)
{
	var text = checkTheObject(image);
	if(!remove)
	{
		var hover = document.getElementById(div).onmouseover = 
		function() {displayMessage(text);
		   document.getElementById(div).style.backgroundImage = "url(Inventory/chemicalBottlesHover/" + image + ")";}
		var hover = document.getElementById(div).onmouseout = 
		function(){
		   removeMessage();
		   document.getElementById(div).style.backgroundImage = "url(Inventory/" + image + ")";}
	}
	else{
		document.getElementById(div).onmouseover = "";
		document.getElementById(div).onmouseout = "";
	}
}


function recoverHovers()
{
	var workareas = new Array("workArea", "workArea2", "workArea3", "workArea4", "workArea5", "workArea6", "workArea7", "workArea8", "workArea9", "workArea10", "workArea11", "workArea12", "workArea13", "workArea14", "workArea15");
	
	workareaHover = checkTheObject(getInventoryBackgroundFile(workareas[0])); 
	workareaHover2 = checkTheObject(getInventoryBackgroundFile(workareas[1])); 
	workareaHover3 = checkTheObject(getInventoryBackgroundFile(workareas[2])); 
	workareaHover4 = checkTheObject(getInventoryBackgroundFile(workareas[3])); 
	workareaHover5 = checkTheObject(getInventoryBackgroundFile(workareas[4])); 
	workareaHover6 = checkTheObject(getInventoryBackgroundFile(workareas[5])); 
	workareaHover7 = checkTheObject(getInventoryBackgroundFile(workareas[6])); 
	workareaHover8 = checkTheObject(getInventoryBackgroundFile(workareas[7])); 
	workareaHover9 = checkTheObject(getInventoryBackgroundFile(workareas[8])); 
	workareaHover10 = checkTheObject(getInventoryBackgroundFile(workareas[9])); 
	workareaHover11 = checkTheObject(getInventoryBackgroundFile(workareas[10])); 
	workareaHover12 = checkTheObject(getInventoryBackgroundFile(workareas[11])); 
	workareaHover13 = checkTheObject(getInventoryBackgroundFile(workareas[12])); 
	workareaHover14 = checkTheObject(getInventoryBackgroundFile(workareas[13])); 
	workareaHover15 = checkTheObject(getInventoryBackgroundFile(workareas[14])); 

	document.getElementById(workareas[0]).onmouseover = function() {displayMessage(workareaHover); }
	document.getElementById(workareas[1]).onmouseover = function() {displayMessage(workareaHover2); }
	document.getElementById(workareas[2]).onmouseover = function() {displayMessage(workareaHover3); }
	document.getElementById(workareas[3]).onmouseover = function() {displayMessage(workareaHover4); }
	document.getElementById(workareas[4]).onmouseover = function() {displayMessage(workareaHover5); }
	document.getElementById(workareas[5]).onmouseover = function() {displayMessage(workareaHover6); }
	document.getElementById(workareas[6]).onmouseover = function() {displayMessage(workareaHover7); }
	document.getElementById(workareas[7]).onmouseover = function() {displayMessage(workareaHover8); }
	document.getElementById(workareas[8]).onmouseover = function() {displayMessage(workareaHover9); }
	document.getElementById(workareas[9]).onmouseover = function() {displayMessage(workareaHover10); }
	document.getElementById(workareas[10]).onmouseover = function() {displayMessage(workareaHover11); }
	document.getElementById(workareas[11]).onmouseover = function() {displayMessage(workareaHover12); }
	document.getElementById(workareas[12]).onmouseover = function() {displayMessage(workareaHover13); }
	document.getElementById(workareas[13]).onmouseover = function() {displayMessage(workareaHover14); }
	document.getElementById(workareas[14]).onmouseover = function() {displayMessage(workareaHover15); }

	for (var k = 0; k < workareas.length; k++)
	{
		workarea = document.getElementById(workareas[k]);
		workarea.onmouseout = function(){removeMessage();}
	}
}


