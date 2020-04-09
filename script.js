var time = new Date().getHours();

var noon = 12; //noon
var evening = 18; //6pm

var partyTime = 17; //5pm
var napTime = 15; //3pm
var lunchTime = 12; //noon
var wakeUpTime = 7; //7am

var partyTimeButton = document.getElementById("partyTimeButton");
var isPartyTime = false;

var wakeUpTimeSelector =  document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector =  document.getElementById("lunchTimeSelector");
var napTimeSelector =  document.getElementById("napTimeSelector");

var updateClock = function() 
{
	var messageText;
	var timeEventJS = document.getElementById("timeEvent");
	var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";
	var lolcatImage = document.getElementById("lolcat");
	
	if (time == lunchTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
		messageText = "TIME TO EAT LUNCH BAYBEEEEE!!!";
	} else if (time == napTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
		messageText = "Hit the hay all day. It's nap time, b****!";
	} else if (time == wakeUpTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
		messageText = "Rise and shine and give God your glory, glory!";
	} else if (time == partyTime) {
		image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/partyTime.jpg";
		messageText = "WOOHOO!!!! OUT ON THE DANCE FLOOR, IT'S TIME TO PARTAY!!!!";
	} else if (time < noon) {
		messageText = "Good morning!";
	} else if (time >= evening) {
		messageText = "Good evening!";
	} else {
		messageText = "Good afternoon!";
	}

	timeEventJS.innerText = messageText;
	lolcatImage.src = image;

	var showCurrentTime = function()
	{
    	// display the string on the webpage
    	var clock = document.getElementById('clock');
 
    	var currentTime = new Date();
 
    	var hours = currentTime.getHours();
    	var minutes = currentTime.getMinutes();
    	var seconds = currentTime.getSeconds();
    	var meridian = "AM";
 
    	// Set hours 
    	if (hours >= noon) 
    	{ 
        	meridian = "PM"; 
    	}  
    	if (hours > noon) 
    	{ 
        	hours = hours - 12; 
    	}
 
    	// Set Minutes
    	if (minutes < 10)
    	{
        	minutes = "0" + minutes;
    	}
 
    	// Set Seconds
    	if (seconds < 10)
    	{
        	seconds = "0" + seconds;
    	}
 
    	// put together the string that displays the time
    	var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    	clock.innerText = clockTime;
	};

	showCurrentTime(); 
};

updateClock();

var oneSecond = 1000; 

setInterval(updateClock, oneSecond);

var partyEvent = function() {
   
   if (isPartyTime === false) {
      isPartyTime = true;
      time = partyTime;
	  partyTimeButton.innerText = "PARTY TIME!";
	  partyTimeButton.style.backgroundColor = "#0A8DAB";
   }
   else {
      isPartyTime = false;
      time = new Date().getHours();
      partyTimeButton.innerText = "Party Over :(";
      partyTimeButton.style.backgroundColor = "#222222";
   }
};

var wakeUpEvent = function()
{
    wakeUpTime = wakeUpTimeSelector.value;
};
var lunchEvent = function()
{
    lunchTime = lunchTimeSelector.value;
};
var napEvent = function()
{
    napTime = napTimeSelector.value;
};

partyTimeButton.addEventListener('click', partyEvent);

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
lunchTimeSelector.addEventListener('change', lunchEvent);
napTimeSelector.addEventListener('change', napEvent);