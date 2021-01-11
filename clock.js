function time() {
  var date = new Date();
  var hours = date.getHours(); //returns the hour from 0 to 23
  var minutes = date.getMinutes(); // returns the minutes from 0 to 59
  var seconds = date.getSeconds(); //returns the seconds from 0 to 59

  hours = hours < 10 ? "0" + hours : hours; //e.g.  01:18:19
  minutes = minutes < 10 ? "0" + minutes : minutes; //e.g. 11:05:12
  seconds = seconds < 10 ? "0" + seconds : seconds; //e.g. 14:12:03

  var showTime = hours + ":" + minutes + ":" + seconds; // save the time

  document.getElementById("myClock").innerText = showTime; //show the time on display

  setTimeout(time, 1); //time refresh
}

time();
