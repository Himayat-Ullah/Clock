const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function run_the_clock() {
  var date = new Date();

  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();

  let hrPosition = hr * 30 + min * (360 / 720) + 180;
  let minPosition = min * 6 + sec * (360 / 3600) + 180;
  let secPosition = sec * 6 + 180;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var interval = setInterval(run_the_clock, 1000);
