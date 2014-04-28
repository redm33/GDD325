// JavaScript Document
var questions = document.getElementsByClassName('questionHover');

function resetDialog()
{
	var opening = new Array("Urgg....leave me alone it's nap time!", "Check the journal you nincompoop!", "Didn't your mother teach you how to read?", "Can't you see that I'm busy? Check the journal you skinflint!", "Leave me be! You Beetle-Headed, Flap-Eared Knave!");	
	
	var shuffled = shuffle(opening);
	document.getElementById("open").innerHTML = shuffled[0];
	
	var responses = new Array("open", "first", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten");
	for(var i = 0; i < responses.length; i++)
	{
		document.getElementById(responses[i]).style.display = "none";	
	}
	document.getElementById("open").style.display = "block";
}

function talking(response)
{
	//var questions = ["firstQ", "secQ", "thirdQ", "fourthQ","fifthQ", "sixthQ", "seventhQ","goodbyeQ"];
	document.getElementById('questions').style.display = "none";
	
	
	var responses = new Array("open", "first", "two", "three", "four", "five", "six", "seven", 'eight','nine', 'ten');
	for(var i = 0; i < responses.length; i++)
	{
		var current = document.getElementById(responses[i]).style.display;
		if(current == "block"){
			document.getElementById(responses[i]).style.display = "none";
			break;}	
	}
	document.getElementById(response).style.display = "block";

	if(response != 'eight' && response != 'nine')
	{
		window.setTimeout(function() {
			document.getElementById('questions').style.display = "block";
		}, 2000);
	}
	else if(response != 'nine')
	{
		document.getElementById('questions').innerHTML = '<form> <input type="checkbox" name="ions" value="Hg2+" id="Hg2">Hg2+<input type="checkbox" name="ions" value="Pb2+" id="Pb2">Pb2+<input type="checkbox" name="ions" value="Bi3+" id="Bi3">Bi3+<br/><input type="checkbox" name="ions" value="Cu2+" id="Cu2">Cu2+<input type="checkbox" name="ions" value="Cd2+" id="Cd2">Cd2+<input type="checkbox" name="ions" value="Sb3+" id="Sb3">Sb3+<br/><input type="checkbox" name="ions" value="Sn4+" id="Sn4">Sn4+<input type="checkbox" name="ions" value="As(III)" id="As">As(III)<br/><input type = "button" value = "Check" onclick = "checkIons()"/></form>';
		document.getElementById('questions').style.display = "block";
	
	}
}

function checkIons()
{

	var ionCheck = new Array("Hg2", "Pb2", "Bi3", "Cu2", "Cd2", "Sb3", "Sn4", "As");
	var correctIons = new Array(Hg2, Pb2, Bi3, Cu2, Cd2, Sb3, Sn4, As)
	var bingo = true;
	for(var j = 0; j < ionCheck.length; j++)
	{
		if(document.getElementById(ionCheck[j]).checked	 != correctIons[j])
			bingo = false;
	}
	if(bingo)
	{
		talking('nine');
		window.setTimeout(function(){
		document.getElementById('content').style.backgroundImage = "none";
		$('#content').load("Cutscenes/endCutscene.html");},5000);
	}
	else
	{
		switchQuestions(2);
		talking('ten');
	}
	
}