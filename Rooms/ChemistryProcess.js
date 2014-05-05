// JavaScript Document

var chemInDropper = "";
var checkIt = false;
//Group 2A
var Hg2 = false;
var Pb2 = false;
var Bi3 = true;
var Cu2 = true;
var Cd2 = true;
//Group 2B
var Sb3 = false;
var Sn4 = false;
var As = false;

var currentStep = 1;

var ions2A = new Array(false, false, false, false, false)
var ions2B = new Array(false, false, false);

var processOne = false;
var processStep1Clear = new Array(false,0,"",false, 0, "", false, false, 0, "",  false, false);
var processStep1 = new Array(false,0,"",false, 0, "", false, false, 0, "",  false, false);
var processStep1Correct = new Array(true,10,"Unknown", true, 10, "6MHCL", true, true, 12, "1MHCL", true, false);

var processTwo = false;
var processStep2Clear = new Array(false, 0, "", false, false, 0, "", false, 0, "", false, 0, "", false, false, false, 0, "", false, false, false, false);
var processStep2 = new Array(false, 0, "", false, false, 0, "", false, 0, "", false, 0, "", false, false, false, 0, "", false, false, false, false);
var processStep2Correct = new Array(true, 14, "C2H5NS", true, true, 10, "H2O", true, 14, "C2H5NS", true, 2, "NH4C2H3O2", true, true, true, 30, "KOH1MKNO3", true, true, true, false);

var processThree = false;
var processStep3Clear = new Array(false, 0, "", false, false, false, false, 0, "", false, false, false, false);
var processStep3 = new Array(false, 0, "", false, false, false, false, 0, "", false, false, false, false);
var processStep3Correct = new Array(true, 20, "KOH1MKNO3", true, true, true, true, 30, "NH4C2H3O2", true, true, true, false);

var processFour = false;
var processStep4Clear = new Array(false, 0, "",false, 0, "", false, false, false, 0, "", false);
var processStep4 = new Array(false, 0, "",false, 0, "", false, false, false, 0, "", false);
var processStep4Correct = new Array(true, 25, "6MHCL",true, 5, "6MHNO3", true, true, true, 20, "SNCl2", false);

var processFive = false;
var processStep5Clear = new Array(false, 0, "", false, false, 0, "", false, false, false, false, false, 0, "", false, 0, "", false, false, 0, "", false);
var processStep5 = new Array(false, 0, "", false, false, 0, "", false, false, false, false, false, 0, "", false, 0, "", false, false, 0, "", false);
var processStep5Correct = new Array(true, 7, "18MH2SO4", true, true, 20, "H2O", true, true, true, true, true, 1, "C2H4O2", true, 14, "NH4C2H3O2", true, true, 4, "K2CrO4", false);

var processSix = false;
var processStep6Clear = new Array(false, "", false, false, "", false, false, "", false, false, "", false, false, 0, "", false, false,false,false, 0, "", false, 0, "", false);
var processStep6 = new Array(false, "", false, false, "", false, false, "", false, false, "", false, false, 0, "", false, false,false,false, 0, "", false, 0, "", false);
var processStep6Correct = new Array(true, "15MNH3", true, true, "15MNH3", true ,true, "15MNH3", true ,true, "15MNH3", true, true, 5, "15MNH3", true, true,true, true, 10, "NaOH", true, 6, "SNCl2", false);

var processSeven = false;
var processStep7Clear = new Array(false,0, "", false, 0,"", false);
var processStep7 = new Array(false,0, "", false, 0,"", false);
var processStep7Correct = new Array(true ,10, "C2H4O2", true,3,"FeK4C6N6", false);

var processEight = false;
var processStep8PartOneClear = new Array(false,0, "", false, 0,"", false,false);
var processStep8PartOne = new Array(false,0, "", false, 0,"", false,false);
var processStep8PartOneCorrect = new Array(true ,10, "Solution", true,4,"NH42S", true, false);

var processStep8PartTwoClear = new Array(false ,0, "", false, 0, "", false, false, false, false, 0, "", false, false);
var processStep8PartTwo = new Array(false ,0, "", false, 0, "", false, false, false, false, 0, "", false, false);
var processStep8PartTwoCorrect = new Array(true ,10, "Solution", true, 4, "Na2S2O4", true, true, true, true, 4, "NH42S", true, false);

var processNine = false;
var processStep9Clear = new Array(false ,0, "", false, 0, "", false, false, false, false, false, 0, "", false, false, false, false ,0, "", false, 0, "", false, false, false, false, false, 0, "", false, false , 0, "",false);
var processStep9 = new Array(false ,0, "", false, 0, "", false, false, false, false, false, 0, "", false, false, false, false ,0, "", false, 0, "", false, false, false, false, false, 0, "", false, false , 0, "",false);
var processStep9Correct = new Array(true ,4, "C2H4O2", true, 2, "C2H5NS", true, true, true, true, true, 40, "NH4CL", true, true, true, true ,7, "H2O", true, 20, "12MHCL", true, true, true, true, true, 28, "6MHCL", true, true, 10, "Solution",  false);

var processTen = false;
var processStep10Clear = new Array(false ,0, "", false, 0, "", false, false, false, false, 0, "", false, false, false,false, false, false, false ,0, "", false, false, false, 0, "", false, false, 0, "", false, false, false, false ,0, "", false, 0, "", false, false, false ,0, "", false, 0, "",false ,0, "", false, false, 0, "",false);
var processStep10 = new Array(false ,0, "", false, 0, "", false, false, false, false, 0, "", false, false, false,false, false, false, false ,0, "", false, false, false, 0, "", false, false, 0, "", false, false, false, false ,0, "", false, 0, "", false, false, false ,0, "", false, 0, "",false ,0, "", false, false, 0, "",false);
var processStep10Correct = new Array(true ,6, "H2O", true, 10, "NH4C2H3O2", true, true, true, true, 30, "6MNH3", true, true, true, true, true, true, true ,30, "H2O2", true, true, true, 10, "NH4NO3", true, true, 10, "MgNO32", true, true,true, true ,10, "H2O", true, 1, "6MNH3", true, true, true ,4, "HC2H3O2", true, 10, "H2O",true ,10, "AgNO3", true, true, 4, "6MNH3",false);

var processEleven = false;
var processStep11 = new Array(false, false ,0, "", false, false, false, "",false, 0,"", false, false, 0, "", false, false);
var processStep11Clear = new Array(false, false ,0, "", false, false, false, "", false, 0,"", false, false, 0, "", false, false);
var processStep11Correct = new Array(true, true ,10, "H2O", true, true, true, "Solution", true,40,"C2H2O4", true, true, 10, "C2H5NS", true, false);

var processTwelve = false;
var processStep12Clear = new Array(false, false, false, false, false, 0, "", false, false);
var processStep12 = new Array(false, false, false, false, false, 0, "", false, false);
var processStep12Correct = new Array(true, true, true, true, true ,20, "HgCl2", true, false);

randomizeIons();

function randomizeIons(){
	var count2A = 0;
	var count2B = 0;
	for(var m = 0; m < ions2A.length; m++){
		var randomInt = getRandomInt(0,1)
		if(randomInt == 0)
			ions2A[m] = false;
		else{
			ions2A[m] = true;
			count2A++
		}
	}
	for(var m = 0; m < ions2B.length; m++){
		var randomInt = getRandomInt(0,1)
		if(randomInt == 0)
			ions2B[m] = false;
		else{
			ions2B[m] = true;
			count2B++
		}
	}
	if(count2A + count2B < 4 || count2B == 0)
		randomizeIons();
	else{
		ions2A = shuffle(ions2A);
		ions2B = shuffle(ions2B);		
		//Group 2A
		Hg2 = ions2A[0];
		Pb2 = ions2A[1];
		Bi3 = ions2A[2];
		Cu2 = ions2A[3];
		Cd2 = ions2A[4];
		//Group 2B
		Sb3 = ions2B[0];
		Sn4 = ions2B[1];
		As = ions2B[2];
	}
}
function processStepOne(chemicalUsed, dropAmount, heat, mix){
	stepA = processStep1[0];
	stepB = processStep1[3];
	stepC = processStep1[6];
	stepD = processStep1[7];
	stepE = processStep1[10];
	
	if(chemicalUsed == "bottleUnlabeled"){
		processStep1[0] = true;
		processStep1[1] = dropAmount;
		processStep1[2] = "Unknown";
		updateStep();
	}
	else if(chemicalUsed == "6MHCL"){
		processStep1[3] = true;
		processStep1[4] = dropAmount;
		processStep1[5] = "6MHCL";
		updateStep();
	}
	else if(chemicalUsed == "1MHCL" && stepA && stepB && stepC){
		processStep1[7] = true;
		processStep1[8] = dropAmount;
		processStep1[9] = "1MHCL";
		updateStep();
	}
	else if(chemicalUsed == "Solution" && stepE){updateStep();}
	else if(heat && stepA && stepB){processStep1[6] = true; updateStep();}
	else if(stepA && stepB && stepC && stepD && mix){processStep1[10] = true; updateStep();}
	else if (chemicalUsed != "" && dropAmount != 0)
		processStep1[11] = true;	
}

function processStepTwo(chemicalUsed, dropAmount, heat, mix, centrifuge, decant){
	stepA = processStep2[0];
	stepB = processStep2[3];
	stepC = processStep2[4];
	stepD = processStep2[7];
	stepE = processStep2[10];
	stepF = processStep2[13];
	stepG = processStep2[14];
	stepH = processStep2[15];
	stepI = processStep2[18];
	stepJ = processStep2[19];
	stepK = processStep2[20];
	
	if(chemicalUsed == "C2H5NS"){
		if(!stepA){
			processStep2[0] = true;
			processStep2[1] = dropAmount;
			processStep2[2] = "C2H5NS";
			updateStep();
		}
		else{
			processStep2[7] = true;
			processStep2[8] = dropAmount;
			processStep2[9] = "C2H5NS";
			updateStep();	
		}
	}
	else if(chemicalUsed == "Hot H2O" && stepB && !stepC){
		processStep2[4] = true;
		processStep2[5] = dropAmount;
		processStep2[6] = "H2O";
		updateStep();
	}
	else if(chemicalUsed == "NH4C2H3O2" && stepD && !stepE){
		processStep2[10] = true;
		processStep2[11] = dropAmount;
		processStep2[12] = "NH4C2H3O2";	
		updateStep();
	}
	else if(chemicalUsed == "KOH1MKNO3" && stepG && !stepH){
		processStep2[15] = true;
		processStep2[16] = dropAmount;
		processStep2[17] = "KOH1MKNO3";	
		updateStep();
	}
	else if(heat){
		if(stepA && !stepB){processStep2[3] = true;	updateStep();}
		if(stepF && !stepG){processStep2[14] = true;updateStep();}
	}	
	else if(mix){
		if(stepE && !stepF){processStep2[13] = true; updateStep();}
		if(stepH && !stepI){processStep2[18] = true; updateStep();}
	} 
	else if(centrifuge && stepI && !stepJ){processStep2[19] = true;	updateStep();}
	else if(decant && stepJ && !stepK){processStep2[20] = true; updateStep();}
	else if (chemicalUsed != "" && dropAmount != 0 && chemicalUsed != "H2O" && chemicalUsed != "Hot H2O" && chemicalUsed != "Solution")
		processStep2[21] = true;	
}

function processStepThree(chemicalUsed, dropAmount, heat, mix, centrifuge, decant, clickedDiv){
	stepA = processStep3[0];
	stepB = processStep3[3];
	stepC = processStep3[4];
	stepD = processStep3[5];
	stepE = processStep3[6];
	stepF = processStep3[9];
	stepG = processStep3[10];
	stepH = processStep3[11];
	
	if(chemicalUsed == "KOH1MKNO3" && !stepA){
		processStep3[0] = true;
		processStep3[1] = dropAmount;
		processStep3[2] = "KOH1MKNO3";
		updateStep();
	}
	else if(chemicalUsed == "NH4C2H3O2" && stepD && !stepE){
		processStep3[6] = true;
		processStep3[7] = dropAmount;
		processStep3[8] = "NH4C2H3O2";
		updateStep();
	}
	else if(heat){
		if(stepA && !stepB){processStep3[3] = true; updateStep();}	
		if(stepE && !stepF){processStep3[9] = true;updateStep();}
	}
	else if(mix){
		if(stepB && !stepC){processStep3[4] = true; updateStep();}	
		if(stepF && !stepG){
			processStep3[10] = true;
			document.getElementById(clickedDiv).style.backgroundImage = "url('Inventory/TTPrecBlackLiqClear.png')";
			updateStep();
		}
	}
	else if(centrifuge && stepC && !stepD){processStep3[5] = true; updateStep();}
	else if(decant && stepG && !stepH){processStep3[11] = true; updateStep();}
	else if (chemicalUsed != "" && dropAmount != 0 && chemicalUsed != "H2O" && chemicalUsed != "Hot H2O" && chemicalUsed != "Solution")
		processStep3[12] = true;
}

//CONFIMATION TEST FOR MERCURY (HG2+ ION)
function processStepFour(chemicalUsed, dropAmount, heat, centrifuge, clickedDiv){
	stepA = processStep4[0];
	stepB = processStep4[3];
	stepC = processStep4[6];
	stepD = processStep4[7];
	stepE = processStep4[8];
	
	if(chemicalUsed == "6MHCL" && !stepA){
		processStep4[0] = true;
		processStep4[1] = dropAmount;
		processStep4[2] = "6MHCL";
		updateStep();
	}
	else if(chemicalUsed == "6MHNO3" && stepA){
		processStep4[3] = true;
		processStep4[4] = dropAmount;
		processStep4[5] = "6MHNO3";
		updateStep();
	}
	else if(chemicalUsed == "SNCl2" && stepD  && !stepE){
		processStep4[8] = true;
		processStep4[9] = dropAmount;
		processStep4[10] = "SNCl2";
		updateStep();
		if(Hg2)
			document.getElementById(clickedDiv).style.backgroundImage = "url('Inventory/TTPrecGrayLiqClear.png')";
	}
	else if(heat && stepA && stepB && !stepC){
		processStep4[6] = true;
		chemInBeaker = "TTLiqCloudy.png";
		updateStep();
	}	
	else if(stepA && stepB && stepC && !stepD && centrifuge){processStep4[7] = true; updateStep();}
	else if (chemicalUsed != "" && dropAmount != 0 && chemicalUsed != "H2O" && chemicalUsed != "Hot H2O")
		processStep4[11] = true;
}

//CONFIMATION TEST FOR LEAD (PB2+ ION)
function processStepFive(chemicalUsed, dropAmount, heat, cool, centrifuge, decant, pour, clickedDiv){
	stepA = processStep5[0];
	stepB = processStep5[3];
	stepC = processStep5[4];
	stepD = processStep5[7];
	stepE = processStep5[8];
	stepF = processStep5[9];
	stepG = processStep5[10];
	stepH = processStep5[11];
	stepI = processStep5[14];
	stepJ = processStep5[17];
	stepK = processStep5[18];
	
	if(chemicalUsed == "18MH2SO4" && !stepA){
		processStep5[0] = true;
		processStep5[1] = dropAmount;
		processStep5[2] = "18MH2SO4";
		updateStep();
	}
	else if(chemicalUsed == "H2O" && stepB && !stepC){
		processStep5[4] = true;
		processStep5[5] = dropAmount;
		processStep5[6] = "H2O";
		updateStep();
	}
	else if(chemicalUsed == "C2H4O2" && stepG && !stepH){
		processStep5[11] = true;
		processStep5[12] = dropAmount;
		processStep5[13] = "C2H4O2";
		updateStep();	
	}
	else if(chemicalUsed == "NH4C2H3O2" && stepH && !stepI){
		processStep5[14] = true;
		processStep5[15] = dropAmount;
		processStep5[16] = "NH4C2H3O2";	
		updateStep();
	}
	else if(chemicalUsed == "K2CrO4" && stepJ && !stepK){
		processStep5[18] = true;
		processStep5[19] = dropAmount;
		processStep5[20] = "K2CrO4";
		updateStep();
		if(Pb2)
			document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTPrecYellowLiqClear.png)";
	}
	else if(heat){
		if(stepA && !stepB){
			processStep5[3] = true;
			chemInBeaker = "TTLiqClear.png";
			updateStep();
		}	
		if(stepI && !stepJ){processStep5[17] = true; updateStep();}
	}
	else if(cool && stepC && !stepD){processStep5[7] = true; updateStep();}
	else if(pour && stepD && !stepE){processStep5[8] = true; updateStep();}
	else if(centrifuge && stepE && !stepF){processStep5[9] = true; updateStep();}
	else if(decant && stepF && !stepG){processStep5[10] = true; updateStep();}
	else if (chemicalUsed != "" && dropAmount != 0 && chemicalUsed != "H2O" && chemicalUsed != "Hot H2O" && chemicalUsed != "Solution")
		processStep5[21] = true;
}

//CONFIRMATION TEST FOR BISMUTH (Bi3+) ION
function processStepSix(chemicalUsed, dropAmount, mix, centrifuge, decant, clickedDiv){
	stepA = processStep6[0];
	stepB = processStep6[2];
	stepC = processStep6[3];
	stepD = processStep6[5];
	stepE = processStep6[6];
	stepF = processStep6[8];
	stepG = processStep6[9];
	stepH = processStep6[11];
	stepI = processStep6[12]
	stepJ = processStep6[15];
	stepK = processStep6[16];
	stepL = processStep6[17];
	stepM = processStep6[18]
	stepN = processStep6[21]
	
	if(chemicalUsed == "15MNH3"){
		if(!stepA){
			processStep6[0] = true;
			processStep6[1] = "15MNH3";
			updateStep();
		}
		if(stepB && !stepC){
			processStep6[3] = true;
			processStep6[4] = "15MNH3";
		}
		if(stepD && !stepE){
			processStep6[6] = true;
			processStep6[7] = "15MNH3";
		}
		if(stepF && !stepG){
			processStep6[9] = true;
			processStep6[10] = "15MNH3";
		}
		if(stepH && !stepI){
			processStep6[12] = true;
			processStep6[13] = dropAmount;
			processStep6[14] = "15MNH3";
			updateStep();
			
			if(Bi3 && !Cu2 && dropCount >= 5)
				document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTPrecWhiteLiqClear.png)";
			else if(Cu2 && dropCount >= 5)
				document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTPrecBlueLiqClear.png)";
		}
	}
	else if(chemicalUsed == "NaOH"  && stepL && !stepM){
		processStep6[18] = true;
		processStep6[19] = dropAmount;
		processStep6[20] = "NaOH";
		updateStep();
	}
	else if(chemicalUsed == "SNCl2" && stepM && !stepN){
		processStep6[21] = true;
		processStep6[22] = dropAmount;
		processStep6[23] = "SNCl2";	
		updateStep();
		if(Bi3)
			document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTPrecBlackLiqClear.png)";
	}
	else if(mix){
		if(stepA && !stepB){processStep6[2] = true; updateStep();}
		if( stepC && !stepD)
			processStep6[5] = true;
		if(stepE && !stepF)
			processStep6[8] = true;
		if(stepG && !stepH){
			processStep6[11] = true;
			document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTLiqClear.png)";
			updateStep();
		}
		if( stepI && !stepJ){
			processStep6[15] = true;
			updateStep();
			if(Cu2)
				document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTLiqBlue.png)";
			else if(!Cu2 && Bi3)
				document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTLiqCloudy.png)";
				
		}
	}
	else if(centrifuge && stepJ && !stepK){processStep6[16] = true; updateStep();}
	else if(decant && stepK && !stepL){processStep6[17] = true; updateStep();}
	else if (chemicalUsed != "" && dropAmount != 0 && chemicalUsed != "H2O" && chemicalUsed != "Hot H2O" && chemicalUsed != "Solution")
		processStep6[24] = true;
}

//CONFIRMATION TEST FOR COPPER (Cu2+) ION
function processStepSeven(chemicalUsed, dropAmount, clickedDiv){
	stepA = processStep7[0];
	stepB = processStep7[3];
	
	if(chemicalUsed == "C2H4O2"  && !stepA){
		processStep7[0] = true;
		processStep7[1] = dropAmount;
		processStep7[2] = "C2H4O2";
		updateStep();
		if(Cu2)
			document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTLiqClear.png)";
	}
	else if(chemicalUsed == "FeK4C6N6" && stepA && !stepB){
		processStep7[3] = true;
		processStep7[4] = dropAmount;
		processStep7[5] = "FeK4C6N6";
		updateStep();			
		if(Cd2 && Cu2)
			document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTPrecRedBrwnLiqClear.png)";
		else if(Cu2)
			document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTPrecPinkLiqClear.png)";			
	}
	else if (chemicalUsed != "" && dropAmount != 0 && chemicalUsed != "H2O" && chemicalUsed != "Hot H2O" && chemicalUsed != "Solution")
		processStep7[6] = true;
}

//CONFIRMATION TEST FOR CADMIUM (Cd2+) ION 
function processStepEight(chemicalUsed, dropAmount, mix, heat, centrifuge, decant, clickedDiv){
	if(!Cu2){
		stepA = processStep8PartOne[0];
		stepB = processStep8PartOne[3];
		stepC = processStep8PartOne[6];
		
		if(chemicalUsed == "Solution"  && !stepA ){
			processStep8PartOne[0] = true;
			processStep8PartOne[1] = dropAmount;
			processStep8PartOne[2] = "Solution";
			updateStep();
		}
		else if(chemicalUsed == "NH42S" && stepA && !stepB){
			processStep8PartOne[3] = true;
			processStep8PartOne[4] = dropAmount;
			processStep8PartOne[5] = "NH42S";	
			updateStep();
		}
		else if(mix && stepA && stepB){
			processStep8PartOne[6] = true;
			updateStep();
			if(Cd2)
			{
				window.setTimeout(function() 
				{document.getElementById(clickedDiv).style.backgroundImage = 
				"url(Inventory/TTPrecYellowLiqClear.png)";}
				,2000);
			}
		}
		else if (chemicalUsed != "" && dropAmount != 0 && chemicalUsed != "H2O" && chemicalUsed != "Hot H2O" && chemicalUsed != "Solution")
			processStep8PartOne[7] = true;
	}
	else{
		stepA = processStep8PartTwo[0];
		stepB = processStep8PartTwo[3];
		stepC = processStep8PartTwo[6];
		stepD = processStep8PartTwo[7];
		stepE = processStep8PartTwo[8];
		stepF = processStep8PartTwo[9];
		stepG = processStep8PartTwo[12];

		if(chemicalUsed == "Solution"  && !stepA && !decant){
			processStep8PartTwo[0] = true;
			processStep8PartTwo[1] = dropAmount;
			processStep8PartTwo[2] = "Solution";
			updateStep();
		}
		else if(chemicalUsed == "Na2S2O4" && stepA && !stepB){
			processStep8PartTwo[3] = true;
			processStep8PartTwo[4] = dropAmount;
			processStep8PartTwo[5] = "Na2S2O4";	
			updateStep();
		}
		else if(chemicalUsed == "NH42S" && stepE && !stepF){
			processStep8PartTwo[9] = true;
			processStep8PartTwo[10] = dropAmount;
			processStep8PartTwo[11] = "NH42S";
			updateStep();
		}	
		else if(centrifuge && stepC && !stepD){processStep8PartTwo[7] = true; updateStep();}
		else if(decant && stepD && !stepE){processStep8PartTwo[8] = true; updateStep();}
		else if(heat && stepB && !stepC){
			processStep8PartTwo[6] = true;
			chemInBeaker = "TTLiqClear.png";
			updateStep();
		}	
		else if(mix && stepF && !stepG){
			processStep8PartTwo[12] = true;
			updateStep();
			if(Cd2)
				document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTPrecYellowLiqClear.png)";	
		}
		else if (chemicalUsed != "" && dropAmount != 0 && chemicalUsed != "H2O" && chemicalUsed != "Hot H2O" && chemicalUsed != "Solution" && !(decant && !stepA))
			processStep8PartTwo[16] = true;	
	}	
}

//Start on Group 2B
function processStepNine(chemicalUsed, dropAmount, mix, heat, centrifuge, decant, clickedDiv){
	var stepA = processStep9[0];
	var stepB = processStep9[3];
	var stepC = processStep9[6];
	var stepD = processStep9[7];
	var stepE = processStep9[8];
	var stepF = processStep9[9];
	var stepG = processStep9[10];
	var stepH = processStep9[13];
	var stepI = processStep9[14];
	var stepJ = processStep9[15];
	var stepK = processStep9[16];
	var stepL = processStep9[19];
	var stepM = processStep9[22]
	var stepN = processStep9[23]
	var stepO = processStep9[24];
	var stepP = processStep9[25];
	var stepQ = processStep9[26];
	var stepR = processStep9[29];
	var stepS = processStep9[30];

	if(chemicalUsed == "C2H4O2" && !stepA){
		processStep9[0] = true;
		processStep9[1] = dropAmount;
		processStep9[2] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "C2H5NS"  && stepA && !stepB){
		processStep9[3] = true;
		processStep9[4] = dropAmount;
		processStep9[5] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "NH4CL" && stepF && !stepG){
		processStep9[10] = true;
		processStep9[11] = dropAmount;
		processStep9[12] = chemicalUsed;
		updateStep();	
	}
	else if(chemicalUsed == "H2O" && stepJ && !stepK){
		processStep9[16] = true;
		processStep9[17] = dropAmount;
		processStep9[18] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "12MHCL" && stepK && !stepL){
		processStep9[19] = true;
		processStep9[20] = dropAmount;
		processStep9[21] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "6MHCL" && stepP && !stepQ){
		processStep9[26] = true;
		processStep9[27] = dropAmount;
		processStep9[28] = chemicalUsed;
		document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTLiqClear.png)";
		updateStep();
	}
	else if(chemicalUsed == "Solution" && stepR && !stepS){
		processStep9[30] = true;
		processStep9[31] = 10;
		processStep9[32] = chemicalUsed;
		updateStep();
	}
	else if(mix){
		if(stepB & !stepC){
			processStep9[6] = true;
			document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTLiqCloudy.png)";
			updateStep();

		}
		if(stepG && !stepH){
			processStep9[13] = true;
			document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTLiqCloudy.png)";
			updateStep();
		}
		if(stepM && !stepN){processStep9[23] = true; updateStep();}
	}
	else if(heat){
		if(stepC && !stepD){processStep9[7] = true; updateStep();}
		if(stepH && !stepI){
			processStep9[14] = true;
			chemInBeaker = "TTPrecWhiteLiqClear.png";
			updateStep();
		}
		if(stepL && !stepM){
			processStep9[22] = true;
			chemInBeaker = "TTLiqCloudy.png";
			updateStep();
		}		
	}
	else if(centrifuge){
		if(stepD && !stepE){processStep9[8] = true; updateStep();}
		if(stepN && !stepO){processStep9[24] = true; updateStep();}
		if(stepQ && !stepR){processStep9[29] = true; updateStep();}
	}
	else if(decant){
		if(stepE && !stepF){processStep9[9] = true; updateStep();}
		if(stepI && !stepJ){processStep9[15] = true; updateStep();}
		if(stepO && !stepP){processStep9[25] = true; updateStep();}
	}
	else if (chemicalUsed != "" && dropAmount != 0 && chemicalUsed != "H2O" && chemicalUsed != "Hot H2O" && chemicalUsed != "Solution")
		processStep9[33] = true;
}

//Confimation test for arsenic (As) Ions
function processStepTen(chemicalUsed, dropAmount, mix, heat, centrifuge, decant, cool, clickedDiv){

	var stepA = processStep10[0];
	var stepB = processStep10[3];
	var stepC = processStep10[6];
	var stepD = processStep10[7];
	var stepE = processStep10[8];
	var stepF = processStep10[9];
	var stepG = processStep10[12];
	var stepH = processStep10[13];
	var stepI = processStep10[14];
	var stepJ = processStep10[15];
	var stepK = processStep10[16];
	var stepL = processStep10[17];
	var stepM = processStep10[18];
	var stepN = processStep10[21];
	var stepO = processStep10[22];
	var stepP = processStep10[23];
	var stepQ = processStep10[26];
	var stepR = processStep10[27];
	var stepS = processStep10[30];
	var stepT = processStep10[31];
	var stepU = processStep10[32];
	var stepV = processStep10[33];
	var stepW = processStep10[36];
	var stepX = processStep10[39];
	var stepY = processStep10[40];
	var stepZ = processStep10[41];
	var stepZA = processStep10[44];
	var stepZB = processStep10[47];
	var stepZC = processStep10[50];
	var stepZD = processStep10[51];

	if(chemicalUsed == "H2O" && !stepA){
		processStep10[0] = true;
		processStep10[1] = dropAmount;
		processStep10[2] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "NH4C2H3O2"  && stepA && !stepB){
		processStep10[3] = true;
		processStep10[4] = dropAmount;
		processStep10[5] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "6MNH3"  && stepE && !stepF){
		processStep10[9] = true;
		processStep10[10] = dropAmount;
		processStep10[11] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "H2O2"  && stepL && !stepM){
		processStep10[18] = true;
		processStep10[19] = dropAmount;
		processStep10[20] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "NH4NO3"  && stepO && !stepP){
		processStep10[23] = true;
		processStep10[24] = dropAmount;
		processStep10[25] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "MgNO32"  && stepQ && !stepR){
		processStep10[27] = true;
		processStep10[28] = dropAmount;
		processStep10[29] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "H2O"  && stepU && !stepV){
		processStep10[33] = true;
		processStep10[34] = dropAmount;
		processStep10[35] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "6MNH3"  && stepV && !stepW){
		processStep10[36] = true;
		processStep10[37] = dropAmount;
		processStep10[38] = chemicalUsed;
		document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTLiqClear.png)";
		updateStep();
	}
	else if(chemicalUsed == "HC2H3O2"  && stepY && !stepZ){
		processStep10[41] = true;
		processStep10[42] = dropAmount;
		processStep10[43] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "H2O"  && stepZ && !stepZA){
		processStep10[44] = true;
		processStep10[45] = dropAmount;
		processStep10[46] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "AgNO3"  && stepZA && !stepZB){
		processStep10[47] = true;
		processStep10[48] = dropAmount;
		processStep10[49] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "6MNH3"  && stepZC && !stepZD){
		processStep10[51] = true;
		processStep10[52] = dropAmount;
		processStep10[53] = chemicalUsed;
		updateStep();
		if(As)
			document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTLiqRedBrwn.png)";
	}
	else if(mix){
		if(stepF && !stepG){
			processStep10[12] = true;
			document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTLiqYellow.png)";
		}
		if(stepG && !stepH)
			processStep10[13] = true;
		if(stepH && !stepI)
			processStep10[14] = true;
		if(stepI && !stepJ){
			processStep10[15] = true;
			document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTLiqCloudy.png)";
			updateStep();
		}
		if(stepM && !stepN){processStep10[21] = true; updateStep();}
		if(stepP && !stepQ){processStep10[26] = true; updateStep();}
		if(stepZB && !stepZC){processStep10[50] = true; updateStep();}
	}
	else if(heat){
		if(stepB && !stepC){
			processStep10[6] = true;
			chemInBeaker = "TTLiqCloudy.png";
			updateStep();
		}
		if(stepN && !stepO){processStep10[22] = true; updateStep();}
	}
	else if(cool && stepR && !stepS){processStep10[30] = true; updateStep();}
	else if(centrifuge){
		thePrecip = "TTPrecWhiteLiqClear.png";
		if(stepC && !stepD){
			processStep10[7] = true;
			thePrecip = "TTPrecYellowLiqClear.png";
			updateStep();
		}
		if(stepJ && !stepK){processStep10[16] = true; updateStep();}
		if(stepS && !stepT){processStep10[31] = true; updateStep();}
		if(stepW && !stepX){processStep10[39] = true; updateStep();}
	}
	else if(decant){
		if(stepA && stepB && stepC && stepD && !stepE){processStep10[8] = true; updateStep();}
		if(stepK && !stepL){processStep10[17] = true; updateStep();}
		if(stepT && !stepU){processStep10[32] = true; updateStep();}
		if(stepX && !stepY){processStep10[40] = true; updateStep();}
	}
	else if (chemicalUsed != "" && dropAmount != 0 && chemicalUsed != "H2O" && chemicalUsed != "Hot H2O" && chemicalUsed != "Solution")
		processStep10[54] = true;
}

//CONFIRMATION TEST	 FOR ANTIMONY (Sb3+) IONS
function processStepEleven(chemicalUsed, dropAmount, mix, heat, cool, pour, clickedDiv){
	stepA = processStep11[0];
	stepB = processStep11[1];
	stepC = processStep11[4];
	stepD = processStep11[5];
	stepE = processStep11[6];
	stepF = processStep11[8];
	stepG = processStep11[11];
	stepH = processStep11[12];
	stepI = processStep11[15];
	
	if(chemicalUsed == "H2O"  && stepA && !stepB){
		processStep11[1] = true;
		processStep11[2] = dropAmount;
		processStep11[3] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "Solution"  && stepD && !stepE){
		processStep11[6] = true;
		processStep11[7] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "C2H2O4"  && stepE && !stepF){
		processStep11[8] = true;
		processStep11[9] = dropAmount;
		processStep11[10] = chemicalUsed;
		updateStep();
	}
	else if(chemicalUsed == "C2H5NS" && stepG && !stepH){
		processStep11[12] = true;
		processStep11[13] = dropAmount;
		processStep11[14] = chemicalUsed;
		updateStep();					
	}
	else if(heat){
		if(!stepA){
			processStep11[0] = true;
			chemInBeaker = "TTLiqCloudy.png";
			updateStep();
		}
		if(stepH && !stepI){
			processStep11[15] = true;
			if(Sb3)
				chemInBeaker = "TTPrecOrangeLiqClear.png";
			updateStep();
		}
	}
	else if(cool && stepB && !stepC){processStep11[4] = true; updateStep();}
	else if(pour && stepC && !stepD){processStep11[5] = true; updateStep();}
	else if(mix && stepF && !stepG){processStep11[11] = true; updateStep();}
	else if (chemicalUsed != "" && dropAmount != 0 && chemicalUsed != "H2O" && chemicalUsed != "Hot H2O" && chemicalUsed != "Solution")
		processStep11[16] = true;
}

//CONFIRMATION TEST	 FOR Tin (Sb3+) IONS
function processStepTwelve(chemicalUsed, dropAmount, mix, heat, nails, pour, clickedDiv){
	stepA = processStep12[0];
	stepB = processStep12[1];
	stepC = processStep12[2];
	stepD = processStep12[3];
	stepE = processStep12[4];
	stepF = processStep12[7];
	
	var processStep12Correct = new Array(true, true, true, true, true ,20, "HgCl2", true, false);
	
	if(chemicalUsed == "HgCl2"  && stepD && !stepE){
		processStep12[4] = true;
		processStep12[5] = dropAmount;
		processStep12[6] = chemicalUsed;
		updateStep();
	}
	else if(nails){
		if(!stepA){processStep12[0] = true; updateStep();}
		if(stepB && !stepC){processStep12[2] = true; updateStep();}
	}
	
	else if(heat && stepA && !stepB){processStep12[1] = true; updateStep();}
	else if(pour && stepC && !stepD){processStep12[3] = true; updateStep();}
	else if(mix && stepE && !stepF){
		processStep12[7] = true;
		updateStep();
		if(Sn4)
			document.getElementById(clickedDiv).style.backgroundImage = "url(Inventory/TTPrecWhiteLiqCloudy.png)";
	}
	else if (chemicalUsed != "" && dropAmount != 0 && chemicalUsed != "H2O" && chemicalUsed != "Hot H2O")
		processStep12[8] = true;	
}
function finishProcess(theProcess){
	if(theProcess == "One"){
		var processSucess = true;
		for(var g = 0; g < processStep1.length; g++){
			if(processStep1[g] != processStep1Correct[g])
				processSucess = false;
		}
		if(!processSucess){
			document.getElementById("pOne").innerHTML = "You have made a mistake and have been reverted to the beginning of the process. Try again and click here to proceed when complete.";
			revertContent(processStep1, processStep1Clear);
		}
		else{
			document.getElementById("pOne").innerHTML = "Fantastic! Continue on to the next process.";
			AddEntry("p2");
			processOne = false;	
			processTwo = true;
			currentStep = 7;
			saveProcess();
		}
	}
	if(theProcess == "Two")
	{
		var processSucess = true;
		for(var g = 0; g < processStep2.length; g++){
			if(processStep2[g] != processStep2Correct[g])
				processSucess = false;
		}
		if(!processSucess){
			document.getElementById("pTwo").innerHTML = "You have made a mistake and have been reverted to the beginning of the process. Try again and click here to proceed when complete.";
			revertContent(processStep2, processStep2Clear);
		}
		else{
			document.getElementById("pTwo").innerHTML = "Fantastic! Continue on to the next process.";
			AddEntry("p3");
			processTwo = false;	
			processThree = true;
			currentStep += 11;
			saveProcess();
		}
	}
	if(theProcess == "Three"){
		var processSucess = true;
		for(var g = 0; g < processStep3.length; g++){
			if(processStep3[g] != processStep3Correct[g])
				processSucess = false;
		}
		if(!processSucess){
			document.getElementById("pThree").innerHTML = "You have made a mistake and have been reverted to the beginning of the process. Try again and click here to proceed when complete.";
			revertContent(processStep3, processStep3Clear);
		}
		else{
			document.getElementById("pThree").innerHTML = "Fantastic! Continue on to the next process.";
			AddEntry("p4");
			processThree = false;	
			processFour = true;
			currentStep += 8;
			saveProcess();
		}
	}
	if(theProcess == "Four"){
		var processSucess = true;
		for(var g = 0; g < processStep4.length; g++){
			if(processStep4[g] != processStep4Correct[g])
				processSucess = false;
		}
		if(!processSucess){
			document.getElementById("pFour").innerHTML = "You have made a mistake and have been reverted to the beginning of the process. Try again and click here to proceed when complete.";
			revertContent(processStep4, processStep4Clear);
		}
		else{
			document.getElementById("pFour").innerHTML = "Fantastic! Continue on to the next process.";
			AddEntry("p5");
			processFour = false;	
			processFive = true;
			currentStep += 5;
			saveProcess();
		}
	}
	if(theProcess == "Five"){
		var processSucess = true;
		for(var g = 0; g < processStep5.length; g++){
			if(processStep5[g] != processStep5Correct[g])
				processSucess = false;
		}
		if(!processSucess){
			document.getElementById("pFive").innerHTML = "You have made a mistake and have been reverted to the beginning of the process. Try again and click here to proceed when complete.";
			revertContent(processStep5, processStep5Clear);
		}
		else{
			document.getElementById("pFive").innerHTML = "Fantastic! Continue on to the next process.";
			AddEntry("p6");
			processFive = false;	
			processSix = true;
			currentStep += 11;
			saveProcess();
		}
	}
	if(theProcess == "Six")
	{
		var length = 0;
		if(Bi3){length = processStep6.length;}
		else{length = processStep6.length - 8;}
		
		var processSucess = true;
		for(var g = 0; g < length; g++){
			if(processStep6[g] != processStep6Correct[g])
				processSucess = false;
		}
		if(!processSucess){
			document.getElementById("pSix").innerHTML = "You have made a mistake and have been reverted to the beginning of the process. Try again and click here to proceed when complete.";
			revertContent(processStep6, processStep6Clear);
		}
		else{
			document.getElementById("pSix").innerHTML = "Fantastic! Continue on to the next process.";
			AddEntry("p7");
			processSix = false;	
			processSeven = true;
			currentStep += 9;
			saveProcess();
		}
	}
	if(theProcess == "Seven"){
		var processSucess = true;
		for(var g = 0; g < processStep7.length; g++){
			if(processStep7[g] != processStep7Correct[g])
				processSucess = false;
		}
		if(!processSucess){
			document.getElementById("pSeven").innerHTML = "You have made a mistake and have been reverted to the beginning of the process. Try again and click here to proceed when complete.";
			revertContent(processStep7, processStep7Clear);
		}
		else{
			document.getElementById("pSeven").innerHTML = "Fantastic! Continue on to the next process.";
			AddEntry("p8");
			processSeven = false;	
			processEight = true;
			currentStep += 2;
			saveProcess();
		}
	}
	if(theProcess == "Eight"){
		var processSucess = true;
		var array = null;
		var correctArray = null
		if(Cu2){
			array = processStep8PartTwo;
			correctArray = processStep8PartTwoCorrect;
		}
		else{
			array = processStep8PartOne;
			correctArray = processStep8PartOneCorrect;
		}
		for(var g = 0; g < array.length; g++){
			if(array[g] != correctArray[g])
				processSucess = false;
		}
		if(!processSucess){
			document.getElementById("pEight").innerHTML = "You have made a mistake and have been reverted to the beginning of the process. Try again and click here to proceed when complete.";
			revertContent(processStep8PartOne, processStep8PartOneClear);
			revertContent(processStep8PartTwo, processStep8PartTwoClear);
		}
		else{
			document.getElementById("pEight").innerHTML = "Fantastic! Continue on to the next process.";
			AddEntry("p9");
			processEight = false;	
			processNine = true;
			currentStep += 7;
			saveProcess();
		}
	}
	if(theProcess == "Nine"){
		var processSucess = true;
		for(var g = 0; g < processStep9.length; g++){
			if(processStep9[g] != processStep9Correct[g])
				processSucess = false;
		}
		if(!processSucess){
			document.getElementById("pNine").innerHTML = "You have made a mistake and have been reverted to the beginning of the process. Try again and click here to proceed when complete.";
			revertContent(processStep9, processStep9Clear);
		}
		else{
			document.getElementById("pNine").innerHTML = "Fantastic! Continue on to the next process.";
			AddEntry("p10");
			processNine = false;	
			processTen = true;
			currentStep += 19;
			saveProcess();
		}
	}
	if(theProcess == "Ten"){
		var processSucess = true;
		for(var g = 0; g < processStep10.length; g++){
			if(processStep10[g] != processStep10Correct[g])
				processSucess = false;
		}
		if(!processSucess){
			document.getElementById("pTen").innerHTML = "You have made a mistake and have been reverted to the beginning of the process. Try again and click here to proceed when complete.";
			revertContent(processStep10, processStep10Clear);
		}
		else{
			document.getElementById("pTen").innerHTML = "Fantastic! Continue on to the next process.";
			AddEntry("p11");
			processTen = false;	
			processEleven = true;
			currentStep += 27;
			saveProcess();
		}
	}
	if(theProcess == "Eleven"){
		var processSucess = true;
		for(var g = 0; g < processStep11.length; g++){
			if(processStep11[g] != processStep11Correct[g])
				processSucess = false;
		}
		if(!processSucess){
			document.getElementById("pEleven").innerHTML = "You have made a mistake and have been reverted to the beginning of the process. Try again and click here to proceed when complete.";
			revertContent(processStep11, processStep11Clear);
		}
		else{
			document.getElementById("pEleven").innerHTML = "Fantastic! Continue on to the next process.";
			AddEntry("p12");
			processEleven = false;	
			processTwelve = true;
			currentStep += 8;
			saveProcess();
		}
	}
	if(theProcess == "Twelve"){
		var processSucess = true;
		for(var g = 0; g < processStep12.length; g++){
			if(processStep12[g] != processStep12Correct[g])
				processSucess = false;
		}
		if(!processSucess){
			document.getElementById("pTwelve").innerHTML = "You have made a mistake and have been reverted to the beginning of the process. Try again and click here to proceed when complete.";
			revertContent(processStep12, processStep12Clear);
		}
		else{
			document.getElementById("pTwelve").innerHTML = "Fantastic! You have completed the chemistry experiment! Go talk to the alchemist and let him know what you found.";
			processEleven = false;	
			processTwelve = true;
			checkIt = true;
			currentStep += 6;
			saveProcess();
		}
	}			
}

function revertContent(process, processClear){
	for(var k = 0; k < process.length; k++){
		process[k] = processClear[k]
	}
	
	if(localStorage.getItem("ProcessDoorway") != null)
		localStorage.setItem("Doorway", localStorage.getItem("ProcessDoorway"));
	if(localStorage.getItem("ProcesForge") != null)	
		localStorage.setItem("Forge", localStorage.getItem("ProcessForge"));
	if(localStorage.getItem("ProcessWorkdesk") != null)
		localStorage.setItem("Workdesk", localStorage.getItem("ProcessWorkdesk"));
	if(localStorage.getItem("ProcessChemShelf") != null)
		localStorage.setItem("ChemShelf", localStorage.getItem("ProcessChemShelf"));
	document.getElementById("userInterface").innerHTML = localStorage.getItem("UIContent");
	document.getElementById("content").innerHTML = localStorage.getItem("ProcessForge");
	document.getElementById('content').style.backgroundImage = "url('Rooms/Images/ForgeFireAnimation.gif')";
	
	removeClass("pulse", document.getElementsByClassName("pulse")[0]);
	addClass("pulse", document.getElementById(allSteps[currentStep]));	
	for(var h = currentStep; h < allSteps.length-1; h++){
		if(currentStep != 0)
			document.getElementById(allSteps[h]).style.textDecoration = "none";	
	}
	startSearch = currentStep;		
}

function saveProcess(){
	var background = document.getElementById("content");
	backgroundStyle = background.currentStyle || window.getComputedStyle(background, false),
	currentBackground = backgroundStyle.backgroundImage;
	var firstSlash = 0;
	var found = false;
	for(var i = currentBackground.length-1; i > 0; i--){
		if(currentBackground[i] == "/" && !found){
			firstSlash = i;
			found = true;
		}
	}	
	var fileName = "";
	
	for(var i = firstSlash+1; i < currentBackground.length-2; i++){
		fileName += currentBackground[i];
	}
	if(fileName[0] == "D");{
		localStorage.setItem("ProcessDoorway", document.getElementById("content").innerHTML);
		localStorage.setItem("ProcessForge", localStorage.getItem("Forge"));
		localStorage.setItem("ProcessWorkdesk", localStorage.getItem("Workdesk"));
		localStorage.setItem("ProcessChemShelf", localStorage.getItem("ChemShelf"));

	}
	if(fileName[0] == "F"){
		localStorage.setItem("ProcessDoorway", localStorage.getItem("Doorway"));
		localStorage.setItem("ProcessForge", document.getElementById("content").innerHTML);
		localStorage.setItem("ProcessWorkdesk", localStorage.getItem("Workdesk"));
		localStorage.setItem("ProcessChemShelf", localStorage.getItem("ChemShelf"));
	}
	if(fileName[0] == "W");{
		localStorage.setItem("ProcessDoorway",localStorage.getItem("Doorway"));
		localStorage.setItem("ProcessForge", localStorage.getItem("Forge"));
		localStorage.setItem("ProcessWorkdesk",  document.getElementById("content").innerHTML);
		localStorage.setItem("ProcessChemShelf", localStorage.getItem("ChemShelf"));

	}
	if(fileName[0] == "C"){
		localStorage.setItem("ProcessDoorway", localStorage.getItem("Doorway"));
		localStorage.setItem("ProcessForge", localStorage.getItem("Forge"));
		localStorage.setItem("ProcessWorkdesk", localStorage.getItem("Workdesk"));
		localStorage.setItem("ProcessChemShelf", document.getElementById("content").innerHTML);
	}
	localStorage.setItem("UIContent", document.getElementById("userInterface").innerHTML);
}

