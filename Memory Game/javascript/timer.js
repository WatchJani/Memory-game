let timerElement = document.getElementById("timer");
let timerInterval;
let seconds = 0;
let minutes = 0;

function startTimer() {
  timerInterval = setInterval(function () {
    seconds++;
    if (seconds == 60) {
      minutes++;
      seconds = 0;
    }
    timerElement.innerHTML = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      ":" + (seconds > 9 ? seconds : "0" + seconds);
  }, 1000);
}

function stopTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  stopTimer()
  seconds = 0;
  minutes = 0;
  timerElement.innerHTML = "00:00";
}
