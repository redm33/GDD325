var forgeSave = true;
var chemSave = true;
var workdeskSave = true;
var doorwaySave = true;
var RisDown = false;

var fire = new Audio("Rooms/Sounds/fire.wav");
if (typeof fire.loop == 'boolean')
{
    fire.loop = true;
}
else
{
    fire.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
var snore = new Audio("Rooms/Sounds/snore.wav");
snore.volume = ".7";
if (typeof snore.loop == 'boolean')
{
    snore.loop = true;
}
else
{
    snore.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}

var backgroundMusic = new Audio("Rooms/Sounds/medieval.mp3");
backgroundMusic.volume = ".006";
if (typeof backgroundMusic.loop == 'boolean')
{
    backgroundMusic.loop = true;
}
else
{
    backgroundMusic.addEventListener('ended', function() {
        this.currentTime = 0;
        this.play();
    }, false);
}
window.onload = function() {
	localStorage.removeItem("mainMenu")
	localStorage.removeItem("credits");
	localStorage.removeItem("instructions");
	localStorage.removeItem("UIContent");
	localStorage.removeItem("journalOpen");
	localStorage.removeItem("Forge");	
	localStorage.removeItem("Workdesk");	
	localStorage.removeItem("ChemShelf");	
	localStorage.removeItem("Doorway");	
	localStorage.removeItem("LoadPage");
	
	/*
	localStorage.setItem("UI", document.getElementById("userInterface").innerHTML);
	$('#content').load("Rooms/Doorway.html");
	window.setTimeout(
	function(){localStorage.setItem("ProcessDoorway", document.getElementById("content").innerHTML);
	$('#content').load("Rooms/Forge.html");
	window.setTimeout(
	function(){localStorage.setItem("ProcessForge", document.getElementById("content").innerHTML);
	$('#content').load("Rooms/Workdesk.html");
	window.setTimeout(
	function(){localStorage.setItem("ProcessWorkdesk", document.getElementById("content").innerHTML);
	$('#content').load("Rooms/ChemShelf.html");
	window.setTimeout(
	function(){localStorage.setItem("ProcessChemShelf", document.getElementById("content").innerHTML);
	$('#content').load("Menus/mainMenu.html");},100);
	},100);},100);},100);
	*/
	
	preLoadProcessOne();
	
	window.setTimeout(
	function(){
	$('#content').load("Menus/mainMenu.html");},10);
	document.body.onselectstart = function() { return false; }
	

}



function clicky(loc,background) 
{
	
	if(!lockTurn)
	{
		fire.pause();
		snore.pause();
		selectedItem = document.getElementById("content");
		fileName = getInventoryBackgroundFile("content");
		var inventory = document.getElementById("userInterface").style;
		
		if(fileName == "menuBackground.png")
			localStorage.setItem("mainMenu", document.getElementById("content").innerHTML);
		else if(fileName == "creditsBackground.png")
			localStorage.setItem("credits", document.getElementById("content").innerHTML);
		else if(fileName == "instructionBackground.png")
			localStorage.setItem("instructions", document.getElementById("content").innerHTML);
		else if(fileName == "UI.png")
			localStorage.setItem("UIContent", document.getElementById("content").innerHTML);
		else if(fileName == "DoorwayBackground.png")
			localStorage.setItem("Doorway", document.getElementById("content").innerHTML);
		else if(fileName == "ForgeFireAnimation.gif")
			localStorage.setItem("Forge", document.getElementById("content").innerHTML);
		else if(fileName == "WorkdeskRoomBackground.png")
			localStorage.setItem("Workdesk", document.getElementById("content").innerHTML);
		else if(fileName == "ChemShelf.png")
			localStorage.setItem("ChemShelf", document.getElementById("content").innerHTML);	
	
		document.getElementById('content').style.backgroundImage = "url('" + background + "')";
		if(loc == "Menus/mainMenu.html" && localStorage.getItem("mainMenu") != null)
		{
			window.setTimeout( function(){
			selectedItem.innerHTML = localStorage.getItem("mainMenu");
			inventory.display = "none";
			$('#content').load(localStorage.getItem("mainMenu"));
			if(document.getElementById("journal").style.display == "block")
			{
				document.getElementById("journal").style.display = "";
				localStorage.setItem("journalOpen", true);
			}
			backgroundMusic.pause();
			},1);
		}
		else if(loc == "Menus/mainMenu.html")
		{
			backgroundMusic.pause();
			inventory.display = "none";
			$('#content').load(loc);
			if(document.getElementById("journal").style.display == "block")
			{
				document.getElementById("journal").style.display = "";
				localStorage.setItem("journalOpen", true);
			}
		}
		if(loc == "Menus/instructionsMenu.html" && localStorage.getItem("instructions") != null)
		{
			window.setTimeout( function(){
			$('#content').load(localStorage.getItem("instructions"));
			inventory.display = "none";
			selectedItem.innerHTML = localStorage.getItem("instructions");
			if(document.getElementById("journal").style.display == "block")
			{
				document.getElementById("journal").style.display = "";
				localStorage.setItem("journalOpen", true);
			}
			backgroundMusic.pause();
			},1);
		}
		else if(loc == "Menus/instructionsMenu.html")
		{
			$('#content').load(loc);
			inventory.display = "none";
			backgroundMusic.pause();
			if(document.getElementById("journal").style.display == "block")
			{
				document.getElementById("journal").style.display = "";
				localStorage.setItem("journalOpen", true);
			}
		}
		if(loc == "Menus/creditsMenu.html" && localStorage.getItem("credits") != null)
		{
			window.setTimeout( function(){
			$('#content').load(localStorage.getItem("credits"));
			inventory.display = "none";
			selectedItem.innerHTML = localStorage.getItem("credits")
			if(document.getElementById("journal").style.display == "block")
			{
				document.getElementById("journal").style.display = "";
				localStorage.setItem("journalOpen", true);
			}
			backgroundMusic.pause();
			}, 1);
		}
		else if(loc == "Menus/creditsMenu.html")
		{
			$('#content').load(loc);
			inventory.display = "none";
			backgroundMusic.pause();
			if(document.getElementById("journal").style.display == "block")
			{
				document.getElementById("journal").style.display = "";
				localStorage.setItem("journalOpen", true);
			}
		}	
		if(loc == "Rooms/Doorway.html" && localStorage.getItem("Doorway") != null)
		{
			window.setTimeout( function(){
			$('#content').load(localStorage.getItem("Doorway"));
			inventory.display = "block";
			selectedItem.innerHTML = localStorage.getItem("Doorway");
			document.getElementById('content').style.backgroundImage = "url('Rooms/Images/DoorwayBackground.png')";
			if(localStorage.getItem("journalOpen"))
			{
				localStorage.removeItem("journalOpen");
				document.getElementById("journal").style.display = "block";
			}
			localStorage.setItem("LoadPage","Doorway");
			backgroundMusic.play();
		
			}, 1);
		}
		else if(loc == "Rooms/Doorway.html")
		{
			$('#content').load(loc);	
			inventory.display = "block";
			backgroundMusic.play();
			localStorage.setItem("LoadPage","Doorway");
		}
		if(loc == "Rooms/Workdesk.html" && localStorage.getItem("Workdesk") != null)
		{
			window.setTimeout( function(){
			$('#content').load(localStorage.getItem("Workdesk"));
			selectedItem.innerHTML = localStorage.getItem("Workdesk");
			document.getElementById('content').style.backgroundImage = "url('Rooms/Images/WorkdeskRoomBackground.png')";
			inventory.display = "block";
			if(localStorage.getItem("journalOpen"))
			{
				localStorage.removeItem("journalOpen");
				document.getElementById("journal").style.display = "block";
			}
			localStorage.setItem("LoadPage","Workdesk");	
			backgroundMusic.play();
			recoverHovers();
			}, 1);
		}
		else if(loc == "Rooms/Workdesk.html")
		{
			$('#content').load(loc);
			inventory.display = "block";
			document.getElementById('content').style.backgroundImage = "url('Rooms/Images/WorkdeskRoomBackground.png')";
			backgroundMusic.play();
			localStorage.setItem("LoadPage","Workdesk");
		}
		if(loc == "Rooms/Forge.html"  && localStorage.getItem("Forge") != null)
		{
			window.setTimeout( function(){
			$('#content').load(localStorage.getItem("Forge"));
			inventory.display = "block";
			selectedItem.innerHTML = localStorage.getItem("Forge");
			document.getElementById('content').style.backgroundImage = "url('Rooms/Images/ForgeFireAnimation.gif')";
			if(localStorage.getItem("journalOpen"))
			{
				localStorage.removeItem("journalOpen");
				document.getElementById("journal").style.display = "block";
			}
			localStorage.setItem("LoadPage","Forge");
			backgroundMusic.play();
			fire.play();
			snore.play();
			
			}, 1);
		}
		else if(loc == "Rooms/Forge.html")
		{
			$('#content').load(loc);
			inventory.display = "block";
			var thissound=document.getElementById("audio1");
			backgroundMusic.play();
			localStorage.setItem("LoadPage","Forge");
			fire.play();
			snore.play();
		}
		if(loc == "Rooms/ChemShelf.html"  && localStorage.getItem("ChemShelf") != null)
		{
			window.setTimeout( function(){
			$('#content').load(localStorage.getItem("ChemShelf"));
			inventory.display = "block";
			selectedItem.innerHTML = localStorage.getItem("ChemShelf");
			document.getElementById('content').style.backgroundImage = "url('Rooms/ChemShelf.png')";
			if(localStorage.getItem("journalOpen"))
			{
				localStorage.removeItem("journalOpen");
				document.getElementById("journal").style.display = "block";
			}
			localStorage.setItem("LoadPage","ChemShelf");
			backgroundMusic.play();
			}, 1);
		
		}
		else if(loc == "Rooms/ChemShelf.html")
		{
			$('#content').load(loc);
			inventory.display = "block";
			backgroundMusic.play();
			localStorage.setItem("LoadPage","ChemShelf");

	
		}
	}
}
function play()
{
	var loadBack = localStorage.getItem("LoadPage");
	selectedItem = document.getElementById("content");
	if(loadBack != null)
	{
		if(loadBack == "Doorway" && localStorage.getItem("Doorway") != null)
		{
			window.setTimeout( function(){
			$('#content').load(localStorage.getItem("Doorway"));
			document.getElementById("userInterface").style.display = "block";
			selectedItem.innerHTML = localStorage.getItem("Doorway");
			document.getElementById('content').style.backgroundImage = "url('Rooms/Images/DoorwayBackground.png')";
			if(localStorage.getItem("journalOpen"))
			{
				localStorage.removeItem("journalOpen");
				document.getElementById("journal").style.display = "block";
			}
			backgroundMusic.play();
			}, 1);
		}
		else if(loadBack == "Workdesk" && localStorage.getItem("Workdesk") != null)
		{
			window.setTimeout( function(){
			$('#content').load(localStorage.getItem("Workdesk"));
			document.getElementById("userInterface").style.display = "block";
			selectedItem.innerHTML = localStorage.getItem("Workdesk");
			document.getElementById('content').style.backgroundImage = "url('Rooms/Images/WorkdeskRoomBackground.png')";
			if(localStorage.getItem("journalOpen"))
			{
				localStorage.removeItem("journalOpen");
				document.getElementById("journal").style.display = "block";
			}
			backgroundMusic.play();
			}, 1);
		}
		else if(loadBack == "Forge" && localStorage.getItem("Forge") != null)
		{
			window.setTimeout( function(){
			$('#content').load(localStorage.getItem("Forge"));
			document.getElementById("userInterface").style.display = "block";
			selectedItem.innerHTML = localStorage.getItem("Forge");
			document.getElementById('content').style.backgroundImage = "url('Rooms/Images/ForgeFireAnimation.gif')";
			if(localStorage.getItem("journalOpen"))
			{
				localStorage.removeItem("journalOpen");
				document.getElementById("journal").style.display = "block";
			}
			backgroundMusic.play();
			fire.play();
			snore.play();
			}, 1);
		}
		else if(loadBack == "ChemShelf" && localStorage.getItem("ChemShelf") != null)
		{
			window.setTimeout( function(){
			$('#content').load(localStorage.getItem("ChemShelf"));
			document.getElementById("userInterface").style.display = "block";
			selectedItem.innerHTML = localStorage.getItem("ChemShelf");
			document.getElementById('content').style.backgroundImage = "url('Rooms/ChemShelf.png')";
			if(localStorage.getItem("journalOpen"))
			{
				localStorage.removeItem("journalOpen");
				document.getElementById("journal").style.display = "block";
			}
			backgroundMusic.play()
			}, 1);
		}
		else
		{
			$('#content').load("Rooms/Forge.html");
			document.getElementById("userInterface").style.display = "block";
			backgroundMusic.play();
			fire.play();
			snore.play();
			localStorage.setItem("LoadBack", "Forge");
			document.getElementById('content').style.backgroundImage = "url('Rooms/Images/ForgeFireAnimation.gif')";
			}
	}
	else
	{
		document.getElementById('content').style.backgroundImage = "none";
		$('#content').load("Cutscenes/firstCutscene.html");
		processOne = true;


	}
	
	
}

function preLoadProcessOne()
{

	localStorage.setItem("UI", "<div id = \"inventory\" onclick = \"placeInInventory()\"><div id = \"itemOne\" onclick = \"selectItem('itemOne')\"> </div><div id = \"itemTwo\" onclick = \"selectItem('itemTwo')\"> </div><div id = \"itemThree\" onclick = \"selectItem('itemThree')\"> </div><div id = \"itemFour\" onclick = \"selectItem('itemFour')\"> </div><div id = \"itemFive\" onclick = \"selectItem('itemFive')\"> </div><div id = \"itemSix\" onclick = \"selectItem('itemSix')\"> </div><div id = \"itemSeven\" onclick = \"selectItem('itemSeven')\"> </div></div><div id = \"trash\" onclick = \"trash()\"></div><div id = \"washing\" onclick = \"wash()\"> </div><div id = \"journalButton\" onclick = \"showHideJournal()\"></div><div id =\"menuButtons\"><a href = \"#\" onclick = \"clicky('Menus/mainMenu.html','Menus/Images/menuBackground.png')\"><div id = \"menuUIButton\"> Menu </div></a><a href = \"#\" onclick = \"clicky('Menus/instructionsMenu.html','Menus/Images/instructionBackground.png')\"><div id = \"instructionsUIButton\">Help</div></a></div>");
	
	localStorage.setItem("ProcessDoorway", "<a href = \"#\" onclick = \"clicky('Rooms/Workdesk.html','Rooms/Workdesk.png')\"><div id = \"left\"> </div></a><div id = \"chemGame\"> </div><div id = \"picture\" onclick = \"pictureClick()\"> </div><div id = \"eyedropper\" onclick = \"itemClick('EyedropperFinal.png', 'eyedropper')\"> </div><div id = \"stirStick\" onclick = \"itemClick('MixingRodVert.png', 'stirStick')\"> </div> <a href = \"#\" onclick = \"clicky('Rooms/ChemShelf.html','Rooms/ChemShelf.png')\"><div id = \"right\"> </div></a>");
	
	localStorage.setItem("ProcessForge", '<div id = "speechBubble"><div id = "speechText"><div id = "responses"><div id = "open" style = "display: block;">This is the alchemists first statement</div><div id = "first" style = "display: none;"> Ohh, I can\'t quite remember. I thought I kept it on a shelf by the doorway.</div><div id = "two" style = "display: none;">Open your journal! I\'ve outlined all the steps for you in there.</div><div id = "three" style = "display: none;">I keep all my chemicals on the chemical shelf.</div><div id = "four" style = "display: none;">Put the test tube in a beaker of water and place it on the stand by the forge. The forge will heat it automatically.</div><div id = "five" style = "display: none;"> Put the test tube in the tub of ice on the work desk. It should cool the test tube for you.</div><div id = "six" style = "display: none;">Are you blind? The centrifuge is on the work desk!</div><div id = "seven" style = "display: none;">Golly wiz! Just put the bloomin\' test tube in the centrifuge!</div><div id= "eight" style = "display: none;">Fine, fine. What do you think is in the solution?</div><div id = "nine" style = "display: none;">Wow! I’m impressed! You’ll be an alchemist in no time! Here, let me show you my secret project.</div><div id = "ten" style = "display: none;">Leave it to a novice to get the incorrect answer. Please try again. </div></div><br/><div id = "questions"><div class = "questionHover" id = "firstQ" style = "display: block;"><a href = "#" onclick = "talking(\'first\')"> Where do I find an eyedropper? </a></div><div class = "questionHover" id = "secQ" style = "display: block;"><a href = "#" onclick = "talking(\'two\')">I\'m so confused. Where do I start? </a></div><div class = "questionHover" id = "thirdQ" style = "display: block;"><a  href = "#" onclick = "talking(\'three\')">Where do I get a chemical? </a></div><div> <span  onclick = "switchQuestions(2)"id = "leftArrow"><</span><span  onclick = "switchQuestions(1)"id = "rightArrow">></span> </div></div><br/></div></div><div id = "alchemistWrapper" onclick = "alchemistTalk()"><object width="189" height="450" id = "alchemist"><param name="movie" value="Rooms/Images/AlchemistAnimFLASHTest.swf"><param name="wmode" value="transparent" /><embed wmode="transparent"src= "Rooms/Images/AlchemistAnimFLASHTest.swf" width="189" height="450"> </embed></object></div><div id = "nailsStart" onclick = "itemClick(\'Nails.png\', \'nailsStart\')"> </div><div id = "waterBathPlacement" onclick = "placeBeakerCass()"></div><div id = "waterBath" onclick = "placeBeakerCass()"></div><div id = "beakerPlace"> </div><a href = "#" onclick = "clicky(\'Rooms/ChemShelf.html\',\'Rooms/ChemShelf.png\')"><div id = "left"> </div></a><a href = "#" onclick = "clicky(\'Rooms/Workdesk.html\',\'Rooms/Images/WorkdeskRoomBackground.png\')"><div id = "right"> </div></a>');

localStorage.setItem("ProcessWorkdesk", "<a href = \"#\" onclick = \"clicky('Rooms/Forge.html','Rooms/Images/ForgeFireAnimation.gif')\"><div id = \"left\"> </div></a><div id =\"messages\" style = \"display:none\" onclick = \"displayMessage()\"> This is the messsage </div><div id = \"workingArea\"><div id = \"workArea\" onclick = \"interactWithDesk('workArea', 'chemFill1')\"><div class = \"workareaWrapper\"> <div id = \"chemFill1\"> </div> </div></div><div id = \"workArea2\" onclick = \"interactWithDesk('workArea2', 'chemFill2')\"><div class = \"workareaWrapper\"> <div id = \"chemFill2\"> </div></div></div><div id = \"workArea3\" onclick = \"interactWithDesk('workArea3', 'chemFill3')\"><div class = \"workareaWrapper\"> <div id = \"chemFill3\"> </div></div></div><div id = \"workArea4\" onclick = \"interactWithDesk('workArea4', 'chemFill4')\"><div class = \"workareaWrapper\"> <div id = \"chemFill4\"> </div> </div></div><div id = \"workArea5\" onclick = \"interactWithDesk('workArea5', 'chemFill5')\"> <div class = \"workareaWrapper\"> <div id = \"chemFill5\"> </div></div></div><div id = \"workArea6\" onclick = \"interactWithDesk('workArea6', 'chemFill6')\"><div class = \"workareaWrapper\"> <div id = \"chemFill6\"> </div></div></div><div id = \"workArea7\" onclick = \"interactWithDesk('workArea7', 'chemFill7')\"><div class = \"workareaWrapper\"> <div id = \"chemFill7\"> </div> </div></div><div id = \"workArea8\" onclick = \"interactWithDesk('workArea8', 'chemFill8')\"><div class = \"workareaWrapper\"> <div id = \"chemFill8\"> </div></div></div><div id = \"workArea9\" onclick = \"interactWithDesk('workArea9', 'chemFill9')\"><div class = \"workareaWrapper\"> <div id = \"chemFill9\"> </div></div></div><div id = \"workArea10\" onclick = \"interactWithDesk('workArea10', 'chemFill10')\"><div class = \"workareaWrapper\"> <div id = \"chemFill10\"> </div> </div></div><div id = \"workArea11\" onclick = \"interactWithDesk('workArea11', 'chemFill11')\"><div class = \"workareaWrapper\"> <div id = \"chemFill11\"> </div></div></div><div id = \"workArea12\" onclick = \"interactWithDesk('workArea12', 'chemFill12')\"><div class = \"workareaWrapper\"> <div id = \"chemFill12\"> </div></div></div><div id = \"workArea13\" onclick = \"interactWithDesk('workArea13', 'chemFill13')\"><div class = \"workareaWrapper\"> <div id = \"chemFill13\"> </div> </div></div><div id = \"workArea14\" onclick = \"interactWithDesk('workArea14', 'chemFill14')\"> <div class = \"workareaWrapper\"> <div id = \"chemFill14\"> </div></div></div><div id = \"workArea15\" onclick = \"interactWithDesk('workArea15', 'chemFill15')\"><div class = \"workareaWrapper\"> <div id = \"chemFill15\"> </div></div></div></div><div id = \"centrifuge\" onclick = \"interactCentrifuge()\"> </div><div id = \"box\" onclick = \"addItem('url(Inventory/bottleUnlabeled.png)')\"> </div><div id = \"workdesk\"></div><img id = \"testTubes\" src = \"Rooms/Images/rackOfEmptyTubes150pxTEST.png\" onclick = \"addItem('url(Inventory/TestTubeEmpty.png)'); AddEntry('newTube');\" /><div id = \"iceBath\" onclick = \"interactIceBath()\"> </div> <a href = \"#\" onclick = \"clicky('Rooms/Doorway.html','Rooms/Images/DoorwayBackground.png')\"><div id = \"right\"> </div></a>");
	
	localStorage.setItem("ProcessChemShelf", '<a href = "#" onclick = "clicky(\'Rooms/Doorway.html\',\'Rooms/Images/DoorwayBackground.png\')"><div id = "left"> </div></a><div id = "gameTrigger" onclick = "playFindChem()"> </div><div id = "casseroleStart" onclick = "itemClick(\'CasseroleCup.png\', \'casseroleStart\')"> </div><div id = "beakerStart" onclick = "itemClick(\'BeakerEmpty.png\', \'beakerStart\')"> </div><div id = "chemGame"> </div><a href = "#" onclick = "clicky(\'Rooms/Forge.html\',\'Rooms/Images/ForgeFireAnimation.gif\')"><div id = "right"> </div></a>');
}


