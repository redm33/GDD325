// JavaScript Document
allSteps = new Array("","step1","step2","step3","step4","step5","step6","step7","step8","step9","step10","step11","step12","step13","step14","step15","step16","step17","step18","step19","step20","step21","step22","step23","step24","step25","step26","step27","step28","step29","step30","step31","step32","step33","step34","step35","step36","step37","step38","step39","step40","step41","step42","step43","step44","step45","step46","step47","step48","step49","step50","step51","step52","step53","step54","step55","step56","step57","step58","step59","step60","step61","step62","step63","step64","step65","step66","step67","step68","step69","step70","step71","step72","step73","step74","step75","step76","step77","step78","step79","step80","step81","step82","step83","step84","step85","step86","step87","step88","step89","step90","step91","step92","step93","step94","step95","step96","step97","step98","step99","step100","step101","step102","step103","step104","step105","step106","step107","step108","step109","step110","step111","step112","step113","step114","step115","step116","step117","step118","step119")

var startSearch = 1;

function AddEntry(name)
{
	if(name == "p2")
	{
		var para = document.getElementsByClassName("para2");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
			para[i].style.opacity="1";
		}
	}
	if(name == "p3")
	{
		var para = document.getElementsByClassName("para3");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
			para[i].style.opacity="1";
		}
	}
	if(name == "p4")
	{
		var para = document.getElementsByClassName("para4");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
			para[i].style.opacity="1";
		}
	}
	if(name == "p5")
	{
		var para = document.getElementsByClassName("para5");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
			para[i].style.opacity="1";
		}
	}
	if(name == "p6")
	{
		var para = document.getElementsByClassName("para6");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
			para[i].style.opacity="1";
		}
	}
	if(name == "p7")
	{
		var para = document.getElementsByClassName("para7");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
			para[i].style.opacity="1";
		}
	}
	if(name == "p8")
	{
		var para = document.getElementsByClassName("para8");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
			para[i].style.opacity="1";
		}
	}
	if(name == "p9")
	{
		var para = document.getElementsByClassName("para9");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
			para[i].style.opacity="1";
		}
	}
	if(name == "p10")
	{
		var para = document.getElementsByClassName("para10");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
			para[i].style.opacity="1";
		}
	}
	if(name == "p11")
	{
		var para = document.getElementsByClassName("para11");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
			para[i].style.opacity="1";
		}
	}
	if(name == "p12")
	{
		var para = document.getElementsByClassName("para12");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
			para[i].style.opacity="1";
		}
	}

}

function updateStep()
{
	var add = "";
	var pulse = document.getElementsByClassName("pulse");
	var thePulse = pulse[0];
	pulse[0].style.textDecoration = "line-through";		
	removeClass("pulse", pulse[0]);
	for(var k = 0; k < allSteps.length; k++)
	{
		if(document.getElementById(allSteps[k]) == thePulse)
		{
			startSearch++;
			if(startSearch == 48 && !Bi3){
				startSearch = 50;}
			if(startSearch == 55 && !Cu2){
				startSearch = 59;}
			
			add = document.getElementById(allSteps[startSearch]);
		}
	}
	addClass("pulse", add);	
	
	
}

function addClass( classname, element ) {
    var cn = element.className;
    //test for existance
    if( cn.indexOf( classname ) != -1 ) {
    	return;
    }
    //add a space if the element already has class
    if( cn != '' ) {
    	classname = ' '+classname;
    }
    element.className = cn+classname;
}

function removeClass( classname, element ) {
    var cn = element.className;
    var rxp = new RegExp( "\\s?\\b"+classname+"\\b", "g" );
    cn = cn.replace( rxp, '' );
    element.className = cn;
}

