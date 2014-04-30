// JavaScript Document
var steps = "";
var stepsSize = "";


function AddEntry(name)
{
	if(name == "p2")
	{
		var para = document.getElementsByClassName("para2");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
		}
	}
	if(name == "p3")
	{
		var para = document.getElementsByClassName("para3");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
		}
	}
	if(name == "p4")
	{
		var para = document.getElementsByClassName("para4");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
		}
	}
	if(name == "p5")
	{
		var para = document.getElementsByClassName("para5");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
		}
	}
	if(name == "p6")
	{
		var para = document.getElementsByClassName("para6");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
		}
	}
	if(name == "p7")
	{
		var para = document.getElementsByClassName("para7");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
		}
	}
	if(name == "p8")
	{
		var para = document.getElementsByClassName("para8");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
		}
	}
	if(name == "p9")
	{
		var para = document.getElementsByClassName("para9");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
		}
	}
	if(name == "p10")
	{
		var para = document.getElementsByClassName("para10");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
		}
	}
	if(name == "p11")
	{
		var para = document.getElementsByClassName("para11");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
		}
	}
	if(name == "p12")
	{
		var para = document.getElementsByClassName("para12");
		for (var i = 0; i < para.length; i++)
		{
			para[i].style.visibility="visible";
		}
	}

}

function updateStep()
{
	var remove = "";
	var add = "";
	var pulse = document.getElementsByClassName("pulse");
	removeClass("pulse", pulse[0]);
	for(var k = 0; k < stepsSize; k++)
	{
		if(steps[k].style.textDecoration != "line-through")
		{
			steps[k].style.textDecoration = "line-through";	
			add = steps[k+1];
			break;
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