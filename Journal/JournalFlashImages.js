// JavaScript Document
var x = 0;
var y = 0;
var chemArray = new Array("1MHCL.png","6MHCL.png", "6MHNO3.png", "6MNH3.png", "12MHCL.png", "15MNH3.png", "18MH2SO4.png", "AgNO3.png", "C2H2O4.png", "C2H4O2.png", "C2H5NS.png", "FeK4C6N6.png", "H2O.png", "H2O2.png","HC2H3O2.png", "HgCl2.png", "K2CrO4.png", "KOH1MKNO3.png", "MgNO32.png", "Na2S2O4.png", "NaOH.png","NH3.png", "NH4C2H3O2.png", "NH4CL.png", "NH4NO3.png", "NH42S.png", "SnCl2.png");
var ttArray = new Array("TestTubeEmpty.png", "TTLiqBlue.png", "TTLiqClear.png", "TTLiqClearNails.png", "TTLiqCloudy.png","TTLiqCloudyNails.png", "TTLiqRedBrwn.png", "TTLiqYellow.png", "TTPrecBlack.png","TTPrecBlackLiqClear.png", "TTPrecBlue.png", "TTPrecBlueLiqClear.png", "TTPrecGray.png","TTPrecGrayLiqClear.png", "TTPrecOrange.png", "TTPrecOrangeLiqClear.png", "TTPrecPink.png","TTPrecPinkLiqClear.png", "TTPrecRedBrwn.png", "TTPrecRedBrwnLiqClear.png", "TTPrecWhite.png","TTPrecWhiteLiqClear.png", "TTPrecWhiteLiqCloudy.png", "TTPrecWhiteLiqPurple.png", "TTPrecYellow.png","TTPrecYellowLiqClear.png");
function displayChemImg(image)
{
	document.getElementById("Chems").src = "Inventory/" + image;
	setTimeout("changeChemImg()", 750);
} 

function changeChemImg()
{
	x = (x == chemArray.length-1) ? 0 : x + 1;
	displayChemImg(chemArray[x]);
}

function displayTTImg(image)
{
	
	document.getElementById("TTubes").src = "Inventory/" + image;
	setTimeout("changeTTImg()", 750);
} 

function changeTTImg()
{
	y = (y == ttArray.length-1) ? 0 : y + 1;
	displayTTImg(ttArray[y]);
}

function startTimer()
{
	setTimeout("changeTTImg()", 750);
	setTimeout("changeChemImg()", 750);
}

function updateHTML(elmId, value) {
  var elem = document.getElementById(elmId);
  if(typeof elem !== 'undefined' && elem !== null) {
    document.getElementById(elmId).src = value;
  }
}

updateHTML("TTubes", "Inventory/TestTubeEmpty.png");

startTimer();