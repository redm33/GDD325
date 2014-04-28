// JavaScript Document
var time;
var endTime;

timerSetup();

function timerSetup()
{
	time = 30;
	endTime = "00:30"
	timer();
	window.setTimeout("updateTime()", 1000);
	window.setTimeout("timer()",1000);
}

function updateTime()
{
	if(breakFlag == true)
	{
		time--;
		var seconds = time;
		var minutes = Math.floor(seconds / 60);
		seconds -= minutes * 60;
		endTime = addedZero(minutes)+":"+addedZero(seconds);
		if(time > 0)
		{
			window.setTimeout("updateTime()", 1000);
			window.setTimeout("timer()",1000);
		}
		else
		{
<<<<<<< HEAD
			window.setTimeout("gameSetup()",10);
=======
			window.setTimeout("loadHandler()",10);
>>>>>>> f33a61d176a65011a15dfae018a3deee769b34e4
			window.setTimeout("timerSetup()",10);
		}
	}
}

function addedZero(time)
{
	var tempTime = "";
	if (time<10)
	{
		tempTime = "0"+time.toString();
	}
	else
	{
		tempTime = time.toString();
	}
	return tempTime
}

function displayTime()
{
	return endTime;
}