var startBtn = document.querySelector(".start");
var stopBtn = document.querySelector(".stop");
var resetBtn = document.querySelector(".reset");

var hour = document.querySelector(".hour");
var minute = document.querySelector(".minute");
var seconds = document.querySelector(".seconds");

var countdownTimer = null;

startBtn.addEventListener("click", function () {
  if (hour.value == 0 && minute.value == 0 && seconds.value == 0) return;

  function startCountdown() {
    startBtn.style.display = "none";
    stopBtn.style.display = "block";

    countdownTimer = setInterval(() => {
      timer();
    }, 1000);
  }
  startCountdown();
});

function stopInterval(state) {
  startBtn.innerHTML = state === "pause" ? "continue" : "start";

  startBtn.style.display = "block";
  stopBtn.style.display = "none";

  clearInterval(countdownTimer);
}

function timer() {
  if (seconds.value > 60) {
    minute.value++;
    seconds.value = parseInt(seconds.value) - 59;
  }
  if (hour.value == 0 && minute.value == 0 && seconds.value == 0) {
    hour.value = "";
    minute.value = "";
    seconds.value = "";
    stopInterval();
  } else if (seconds.value != 0) {
    seconds.value = `${seconds.value <= 10 ? "0" : ""}${seconds.value - 1}`;
  } else if (minute.value != 0 && seconds.value == 0) {
    seconds.value = 59;
    minute.value = `${minute.value <= 10 ? "0" : ""}${minute.value - 1}`;
  } else if (hour.value != 0 && minute.value == 0) {
    minute.value = 60;
    hour.value = `${hour.value <= 10 ? "0" : ""}${hour.value - 1}`;
  }
}

stopBtn.addEventListener("click", () => {
  stopInterval("pause");
});

resetBtn.addEventListener("click", () => {
  hour.value = "";
  minute.value = "";
  seconds.value = "";

  stopInterval();
});
