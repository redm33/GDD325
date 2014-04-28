// JavaScript Document
function playFindChem()
{
	$('#chemGame').load("MiniGames/chemicalGame.html");
	window.setTimeout( function() {
	var thissound=document.getElementById("audio1");
	thissound.style.display = "none";
	thissound.volume = ".05";
  	thissound.play();} ,10);
	
	
}
function playChemGame()
{
	theChem = document.getElementById("chemicalList").value;
	window.setTimeout( function() {
	setup(theChem);
	var thissound=document.getElementById("audio1");
	thissound.style.display = "none";
	thissound.volume = ".05";
  	thissound.play();} ,100);
}

function playPrecipGame(color)
{
	$('#precipGame').load("MiniGames/precipGame.html");
	document.getElementById("precipGame").style.display = "block";
<<<<<<< HEAD

=======
>>>>>>> f33a61d176a65011a15dfae018a3deee769b34e4
	window.setTimeout(function(){
	switch (color)
	{
		case "TTPrecGrayLiqClear.png":
			percip.src = "MiniGames/Images/precGray.png";
			break;
		case "TTPrecOrangeLiqClear.png":
			percip.src = "MiniGames/Images/precOrange.png";
			break;
		case "TTPrecPinkLiqClear.png":
			percip.src = "MiniGames/Images/precPink.png";
			break;
		case "TTPrecRedBrwnLiqClear.png":
			percip.src = "MiniGames/Images/precRedBrwn.png";
			break;
		case "TTPrecWhiteLiqClear.png":
			percip.src = "MiniGames/Images/precWhite.png";
			break;
		case "TTPrecWhiteLiqCloudy.png":
			percip.src = "MiniGames/Images/precWhite.png";
			break;
		case "TTPrecWhiteLiqPurple.png":
			percip.src = "MiniGames/Images/precWhite.png";
			break;
		case "TTPrecYellowLiqClear.png":
			percip.src = "MiniGames/Images/precYellow.png";
			break;
		case "TTPrecBlackLiqClear.png":
			percip.src = "MiniGames/Images/precBlack.png";
			break;
		case "TTPrecBlueLiqClear.png":
			percip.src = "MiniGames/Images/precBlue.png";
			break;
	}
	},10);
	//window.setTimeout(function(){
	//percip.src = "MiniGames/chemRed.png";},1);
	document.getElementById("game").style.cursor = "";
}

function playRotateGame()
{
	$('#rotateGame').load("MiniGames/rotationPuzzleGame.html");
}



