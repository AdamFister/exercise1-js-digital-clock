function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    //document.getElementById('time').innerHTML = h + ":" + m + ":" + s;
    //document.getElementById('time').style.fontFamily = "monospace";
    //document.getElementById('time').style.fontSize = "1000%";
    
    // JDH Edit
    updatepage('time', h + ":" + m + ":" + s, "1000");
    
    t = setTimeout(function () {
        startTime()
    }, 500);
}
startTime();

var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();

if (day < 10) {
    day = '0' + day;
}

if (month < 10) {
    month = '0' + month;
}

//document.getElementById('date').innerHTML = month + "/" + day + "/" + year;
//document.getElementById('date').style.fontFamily = "monospace";
//document.getElementById('date').style.fontSize = "800%";

// JDH Edit
    updatepage('date', month + "/" + day + "/" + year, "800");



function startTime2() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();

    if (h > 12) {
        h -= 12;
    } else if (h === 0) {
        h = 12;
    }
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    //document.getElementById('time2').innerHTML = h + ":" + m + ":" + s;
    //document.getElementById('time2').style.fontFamily = "monospace";
    //document.getElementById('time2').style.fontSize = "1000%";
    
    // JDH Edit
    updatepage('time2', h + ":" + m + ":" + s, "1000");
    
    t = setTimeout(function () {
        startTime2()
    }, 500);
}
startTime2();

function myFunction() {
    var mainFrameOne = document.getElementById("mainFrameOne"); 
    var mainFrameTwo = document.getElementById("mainFrameTwo");
 
    mainFrameOne.style.display = (
        mainFrameOne.style.display == "none" ? "block" : "none"); 
    mainFrameTwo.style.display = (
        mainFrameTwo.style.display == "none" ? "block" : "none"); 
 }

function hideButton() {
    var x = document.getElementById("time");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }

function updatePage (elementID, timeStr, fontSize){
    // elementID is the element you want to change
    // timeStr is the concatenation of the time values
    // fontSize is the string value of the percentage to change
    // note: didn't see a place for you to change the fontFamily after the page loaded
    document.getElementById(elementID).innerHTML = timeStr;
    document.getElementById(elementID).style.fontFamily = "monospace";
    document.getElementById(elementID).style.fontSize = fontSize+"%";
}
