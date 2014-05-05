// JavaScript Document
function saveGame(){
	if(localStorage.getItem("Doorway") != null && localStorage.getItem("Workdesk") != null && localStorage.getItem("Forge") != null && localStorage.getItem("ChemShelf") != null){
		displayMessage("Your game has been saved.");
		$.jStorage.flush()
		var background = getFileName(getInventoryBackgroundFile("content"));
		if(background == "DoorwayBackground"){
			$.jStorage.set("doorway", document.getElementById('content').innerHTML);
			$.jStorage.set("workdesk", localStorage.getItem("Workdesk"));
			$.jStorage.set("forge", localStorage.getItem("Forge"));
			$.jStorage.set("chemshelf", localStorage.getItem("ChemShelf"));
		}
		if(background == "ChemShelf"){
			$.jStorage.set("doorway", localStorage.getItem("Doorway"));
			$.jStorage.set("workdesk", localStorage.getItem("Workdesk"));
			$.jStorage.set("forge", localStorage.getItem("Forge"));
			$.jStorage.set("chemshelf", document.getElementById('content').innerHTML);
		}
		if(background == "ForgeFireAnimation"){
			$.jStorage.set("doorway", localStorage.getItem("Doorway") );
			$.jStorage.set("workdesk", localStorage.getItem("Workdesk"));
			$.jStorage.set("forge", document.getElementById('content').innerHTML);
			$.jStorage.set("chemshelf", localStorage.getItem("ChemShelf"));
		}
		if(background == "WorkdeskRoomBackground"){
			$.jStorage.set("doorway", localStorage.getItem("Doorway"));
			$.jStorage.set("workdesk", document.getElementById('content').innerHTML);
			$.jStorage.set("forge", localStorage.getItem("Forge"));
			$.jStorage.set("chemshelf", localStorage.getItem("ChemShelf"));
		}
		
		
		$.jStorage.set("pd", localStorage.getItem("ProcessDoorway"));
		$.jStorage.set("pf", localStorage.getItem("ProcessForge"));
		$.jStorage.set("pw", localStorage.getItem("ProcessWorkdesk"));
		$.jStorage.set("pcs", localStorage.getItem("ProcessChemShelf"));
		
		$.jStorage.set("UI", document.getElementById("userInterface").innerHTML);
		
		$.jStorage.set("Hg2", Hg2);
		$.jStorage.set("Pb2", Pb2);
		$.jStorage.set("Bi3", Bi3);
		$.jStorage.set("Cu2", Cu2);
		$.jStorage.set("Cd2", Cd2);
		$.jStorage.set("Sb3", Sb3);
		$.jStorage.set("Sn4", Sn4);
		$.jStorage.set("As", As);
		
		if(processOne){
			$.jStorage.set("process", "processOne");
			$.jStorage.set("processArray", processStep1);
		}
		if(processTwo){
			$.jStorage.set("process", "processTwo");
			$.jStorage.set("processArray", processStep2);
		}
		if(processThree){
			$.jStorage.set("process", "processThree");
			$.jStorage.set("processArray", processStep3);
		}	
		if(processFour){
			$.jStorage.set("process", "processFour");
			$.jStorage.set("processArray", processStep4);
		}
		if(processFive){
			$.jStorage.set("process", "processFive");
			$.jStorage.set("processArray", processStep5);
		}
		if(processSix){
			$.jStorage.set("process", "processSix");
			$.jStorage.set("processArray", processStep6);
		}
		if(processSeven){
			$.jStorage.set("process", "processSeven");
			$.jStorage.set("processArray", processStep7);
		}
		if(processEight){
			$.jStorage.set("process", "processEight");
			$.jStorage.set("processArray", processStep8);
		}
		if(processNine){
			$.jStorage.set("process", "processNine");
			$.jStorage.set("processArray", processStep9);
		}
		if(processTen){
			$.jStorage.set("process", "processTen");
			$.jStorage.set("processArray", processStep10);
		}
		if(processEleven){
			$.jStorage.set("process", "processEleven");
			$.jStorage.set("processArray", processStep11);
		}
		if(processTwelve){
			$.jStorage.set("process", "processTwelve");
			$.jStorage.set("processArray", processStep12);
		}
		
		$.jStorage.set("step", startSearch);
		$.jStorage.set("revert", currentStep);
		
		var pages = new Array("para1", "para2", "para3", "para4", "para5", "para6", "para7", "para8", "para9", "para10", "para11", "para12");
		
		var k = 0;
		while(document.getElementsByClassName(pages[k])[0].style.opacity != 0){
			$.jStorage.set("page", pages[k]);	
			k++;
		}
	}
	else
		displayMessage("You cannot save at this time.");
	
}

function loadGame()
{
	
	if($.jStorage.get("doorway") != null && $.jStorage.get("workdesk") != null && $.jStorage.get("forge") != null &&$.jStorage.get("chemshelf")){
		document.getElementById('content').style.backgroundImage = "url('Rooms/Images/ForgeFireAnimation.gif')";
		
		localStorage.setItem("Doorway",$.jStorage.get("doorway"));
		localStorage.setItem("Workdesk",$.jStorage.get("workdesk"));
		localStorage.setItem("Forge",$.jStorage.get("forge"));
		localStorage.setItem("ChemShelf",$.jStorage.get("chemshelf"));
		localStorage.setItem("UIContent",$.jStorage.get("UI"));
		
		localStorage.setItem("ProcessDoorway",$.jStorage.get("pd"));
		localStorage.setItem("ProcessWorkdesk",$.jStorage.get("pw"));
		localStorage.setItem("ProcessForge",$.jStorage.get("pf"));
		localStorage.setItem("ProcessChemShelf",$.jStorage.get("pcs"));
		
		Hg2 = $.jStorage.get("Hg2");
		Pb2 = $.jStorage.get("Pb2");
		Bi3 = $.jStorage.get("Bi3");
		Cu2 = $.jStorage.get("Cu2");
		Cd2 = $.jStorage.get("Cd2");
		Sb3 = $.jStorage.get("Sb3");
		Sn4 = $.jStorage.get("Sn4");
		As = $.jStorage.get("As");
		
		if(Bi3)
			document.getElementById("ifBis").innerHTML = '<div id = "step48">Step 8 - Decant the solution.</div><div id = "step49">Step 9 - To the precipitate, add 0.50 (10 drops) of 6M NaOH. </div><div id = "step50">Step 10 - Then add 0.30mL (6 drops) of 0.2M SNCl2.</div>';
		else
			document.getElementById("ifBis").innerHTML = '';
			
		if(!Cu2)
			document.getElementById("copperOrNoCopper").innerHTML = '<div id = "step54">Step 2 - Add 0.20 mL (4 drops) of (NH4)2S. </div><div id = "step55">Step 3 - Stir.</div>';
		else
			document.getElementById("copperOrNoCopper").innerHTML = ' <div id = "step54">Step 2 - Add .20mL (4 drops) of Na2S2O4. </div><div id = "step55">Step 3 - Heat in water bath. </div> <div id = "step56">Step 4 - Centrifuge.. </div><div id = "step57">Step 5 - Decant. </div><div id = "step58">Step 6 - To solution, add 0.20 mL (4 drops) of (NH4)2S. </div><div id = "step59">Step 7 - Stir. </div>';
		
		var setupProcess = $.jStorage.get("process");
		var setupProcessArray = $.jStorage.get("processArray");
		
		if(setupProcess == "processOne"){
			processOne = true;
			processStep1 = setupProcessArray;
		}
		if(setupProcess == "processTwo"){
			processTwo = true;
			processStep2 = setupProcessArray;
		}
		if(setupProcess == "processThree"){
			processThree = true;
			processStep3 = setupProcessArray;
		}	
		if(setupProcess == "processFour"){
			processFour = true;
			processStep4 = setupProcessArray;
		}
		if(setupProcess == "processFive"){
			processFive = true;
			processStep5 = setupProcessArray;
		}
		if(setupProcess == "processSix"){
			processSix = true;
			processStep6 = setupProcessArray;
		}
		if(setupProcess == "processSeven"){
			processSeven = true;
			processStep7 = setupProcessArray;
		}
		if(setupProcess == "processEight"){
			processEight = true;
			processStep8 = setupProcessArray;
		}
		if(setupProcess == "processNine"){
			processNine = true;
			processStep9 = setupProcessArray;
		}
		if(setupProcess == "processTen"){
			processTen = true;
			processStep10 = setupProcessArray;
		}
		if(setupProcess == "processEleven"){
			processEleven = true;
			processStep11 = setupProcessArray;
		}
		if(setupProcess == "processTwelve"){
			processTwelve = true;
			processStep12 = setupProcessArray;
		}
			
		var pages = new Array("para1", "para2", "para3", "para4", "para5", "para6", "para7", "para8", "para9", "para10", "para11", "para12");
		var visiblePage = "";
		
		for(var k = 0; k < pages.length; k++){
			if($.jStorage.get("page") == pages[k])
				visiblePage = k;
		}
		for(var k = 0; k <= visiblePage; k++){
			var classLen = document.getElementsByClassName(pages[k]).length;
			for(var j = 0; j < classLen; j++){
				document.getElementsByClassName(pages[k])[j].style.visibility = "visible";
				document.getElementsByClassName(pages[k])[j].style.opacity = "1";
			}
		}
		startSearch = $.jStorage.get("step");
		currentStep = $.jStorage.get("revert");
		if(startSearch == 48 && !Bi3){
			startSearch = 51;}
		if(startSearch == 56 && !Cu2){
			startSearch = 60;}
		for(var n = 1; n < startSearch; n++){
			if(document.getElementById("step"+	n) != null)
				document.getElementById("step"+	n).style.textDecoration = "line-through";
		}
		removeClass("pulse", document.getElementById("step1"));
		addClass("pulse", document.getElementById("step"+startSearch));
		
		window.setTimeout( function(){
		$('#content').load(localStorage.getItem("Forge"));
		document.getElementById("userInterface").innerHTML = localStorage.getItem("UIContent");
		document.getElementById("userInterface").style.display = "block";
		document.getElementById('content').innerHTML = localStorage.getItem("Forge");
		document.getElementById('content').style.backgroundImage = "url('Rooms/Images/ForgeFireAnimation.gif')";
		backgroundMusic.play();
		fire.play();
		snore.play();
		}, 1);
	}
	
}

function setCookie(cname, cvalue, exdays)
{
	var d = new Date();
	d.setTime(d.getTime()+(exdays*24*60*60*1000));
	var expires = "expires="+d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

function getCookie(cname)
{
var name = cname + "=";
var ca = document.cookie.split(';');
for(var i=0; i<ca.length; i++) 
{
	var c = ca[i].trim();
	if (c.indexOf(name)==0)return c.substring(name.length,c.length);
}
return "";
}