// JavaScript Document
function saveGame()
{
	alert("saving...");
	$.jStorage.flush()
	var background = getFileName(getInventoryBackgroundFile("content"));	
	if(background == "DoorwayBackground")
	{
		$.jStorage.set("doorway", document.getElementById('content').innerHTML);
		$.jStorage.set("workdesk", localStorage.getItem("Workdesk"));
		$.jStorage.set("forge", localStorage.getItem("Forge"));
		$.jStorage.set("chemshelf", localStorage.getItem("ChemShelf"));
	}
	if(background == "ChemShelf")
	{
		$.jStorage.set("doorway", localStorage.getItem("Doorway"), 365);
		$.jStorage.set("workdesk", localStorage.getItem("Workdesk"), 365);
		$.jStorage.set("forge", localStorage.getItem("Forge"), 365);
		$.jStorage.set("chemshelf", document.getElementById('content').innerHTML, 365);
	}
	if(background == "ForgeFireAnimation")
	{
		$.jStorage.set("doorway", localStorage.getItem("Doorway") , 365);
		$.jStorage.set("workdesk", localStorage.getItem("Workdesk"), 365);
		$.jStorage.set("forge", document.getElementById('content').innerHTML, 365);
		$.jStorage.set("chemshelf", localStorage.getItem("ChemShelf"), 365);
	}
	if(background == "WorkdeskRoomBackground")
	{
		$.jStorage.set("doorway", localStorage.getItem("Doorway"), 365);
		$.jStorage.set("workdesk", document.getElementById('content').innerHTML, 365);
		$.jStorage.set("forge", localStorage.getItem("Forge"), 365);
		$.jStorage.set("chemshelf", localStorage.getItem("ChemShelf"), 365);
	}
	
	
	alert(document.getElementById("userInterface").innerHTML);
	$.jStorage.set("UI", document.getElementById("userInterface").innerHTML);
	
	setCookie("Hg2", Hg2, 365);
	setCookie("Pb2", Pb2, 365);
	setCookie("Bi3", Bi3, 365);
	setCookie("Cu2", Cu2, 365);
	setCookie("Cd2", Cd2, 365);
	setCookie("Sb3", Sb3, 365);
	setCookie("Sn4", Sn4, 365);
	setCookie("As", As, 365);
	
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
	
	setCookie("step", startSearch, 365);
	
	var pages = new Array("para1", "para2", "para3", "para4", "para5", "para6", "para7", "para8", "para9", "para10", "para11", "para12");
	
	var k = 0;
	while(document.getElementsByClassName(pages[k])[0].style.visibility != "hidden")
	{
			
		$.jStorage.set("page", pages[k]);	
		k++;
	}
	
}

function loadGame()
{
	
	alert("loading....");
	document.getElementById('content').style.backgroundImage = "url('Rooms/Images/ForgeFireAnimation.gif')";

	localStorage.setItem("Doorway",$.jStorage.get("doorway"));
	localStorage.setItem("Workdesk",$.jStorage.get("workdesk"));
	localStorage.setItem("Forge",$.jStorage.get("forge"));
	localStorage.setItem("ChemShelf",$.jStorage.get("chemshelf"));
	localStorage.setItem("UIContent",$.jStorage.get("UI"));
	
	Hg2 = getCookie("Hg2");
	Pb2 = getCookie("Pb2");
	Bi3 = getCookie("Bi3");
	Cu2 = getCookie("Cu2");
	Cd2 = getCookie("Cd2");
	Sb3 = getCookie("Sb3");
	Sn4 = getCookie("Sn4");
	As = getCookie("As");
	
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
	
	for(var k = 0; k < pages.length; k++)
	{
		if($.jStorage.get("page") == pages[k])
		{
			visiblePage = k;
		}
	}
	for(var k = 0; k <= visiblePage; k++)
	{
		var classLen = document.getElementsByClassName(pages[k]).length;
		for(var j = 0; j < classLen; j++)
		{
			document.getElementsByClassName(pages[k])[j].style.visibility = "visible";
		}
	}
	startSearch = getCookie("step");
	for(var n = 1; n < startSearch; n++)
	{
		document.getElementById("step"+	n).style.textDecoration = "line-through";
	}
	removeClass("pulse", document.getElementById("step1"));
	addClass("pulse", document.getElementById("step"+startSearch));
	
	window.setTimeout( function(){
	$('#content').load(localStorage.getItem("Forge"));
	document.getElementById("userInterface").style.display = "block";
	document.getElementById("userInterface").innerHTML = localStorage.getItem("UIContent");
	document.getElementById('content').innerHTML = localStorage.getItem("Forge");
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