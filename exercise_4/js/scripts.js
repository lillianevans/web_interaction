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
function formatAMPM(date) {var ampm = hours >= 12 ? 'pm' : 'am';
  hours = hours % 12;
  hours = hours ? hours : 12;
minutes = minutes < 10 ? '0'+minutes : minutes;}


function updateTime(k) { /* appending 0 before time elements if less than 10 */
  if (k < 10) {
    return "0" + k;
  }
  else {
    return k;
  }
}

