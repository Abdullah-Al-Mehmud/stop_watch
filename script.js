let hr = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false; // it will define whether the timer will run or not

function start(callback) {
  timer = true;
  callback();
}
function stop() {
  timer = false;
}
function reset() {
  timer = false;

  // this part is used to put 00 infront of hr min and sec
  hr = 0;
  min = 0;
  sec = 0;
  count = 0;

  document.getElementById("sec").innerHTML = "00";
  document.getElementById("min").innerHTML = "00";
  document.getElementById("hr").innerHTML = "00";
  document.getElementById("count").innerHTML = "00";
}

// stopwatch function begins

function stopWatch() {
  // timer starts
  if (timer == true) {
    count += 1; //we put an function if timer is true count will increase by 1

    //if count value is 100 we will increase our sec by 1
    if (count == 100) {
      sec += 1;
      count = 0;
    }

    //if sec value is 60 we will increase our min by 1
    if (sec == 60) {
      min += 1;
      sec = 0;
    }

    //if min value is 60 we will increase our hr by 1
    if (min == 60) {
      hr += 1;
      min = 0;
      sec = 0;
    }

    let hrString = hr;
    let minString = min;
    let secString = sec;
    let countString = count;

    // this conditions are given to add a 0 in front of hr min and sum
    if (hrString < 10) {
      hrString = `0${hrString}`;
    }
    if (minString < 10) {
      minString = `0${minString}`;
    }
    if (secString < 10) {
      secString = `0${secString}`;
    }
    if (countString < 10) {
      countString = `0${countString}`;
    }
    document.getElementById("hr").innerHTML = hrString;
    document.getElementById("min").innerHTML = minString;
    document.getElementById("sec").innerHTML = secString;
    document.getElementById("count").innerHTML = countString;
    setTimeout(stopWatch, 10);
  }
}
