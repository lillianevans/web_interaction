function updateClock ()
{
var d = new Date();
document.getElementById("getyear").innerHTML = d.getFullYear();

    var d = new Date();
document.getElementById("getday").innerHTML = d.getDate();
    
var d = new Date();
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "Sept", "October", "November", "December"];
document.getElementById("getmonth").innerHTML = months[d.getMonth()];



var d = new Date();
document.getElementById("gethour").innerHTML = d.getHours();
                           
var d = new Date();
document.getElementById("getminute").innerHTML = d.getMinutes();

var d = new Date();
document.getElementById("getsecond").innerHTML = d.getSeconds();
                           
}
function currentTime() {
  var date = new Date(); /* creating object of Date class */
  var hour = date.getHours();
  var min = date.getMinutes();
  var sec = date.getSeconds();
  var midday = "AM";
  midday = (hour >= 12) ? "PM" : "AM"; /* assigning AM/PM */
  hour = (hour == 0) ? 12 : ((hour > 12) ? (hour - 12): hour); /* assigning hour in 12-hour format */
  hour = updateTime(hour);
  min = updateTime(min);
  sec = updateTime(sec);
  document.getElementById("date").innerText = hour + " : " + min + " : " + sec + " " + midday; /* adding time to the div */
    var t = setTimeout(currentTime, 1000); /* setting timer */
}

function updateTime(k) { /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

