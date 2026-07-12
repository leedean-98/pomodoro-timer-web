function updateCurrentTime() {
  const now = new Date();
  const h = String(now.getHours()).padStart(2, '0');
  const m = String(now.getMinutes()).padStart(2, '0');
  const s = String(now.getSeconds()).padStart(2, '0');
  document.getElementById('currentTime').textContent = `${h}:${m}:${s}`;
}

updateCurrentTime();
setInterval(updateCurrentTime, 1000);

function getSavedMinutes() {
  const saved = localStorage.getItem('timerMinutes');
  return saved ? Number(saved) : 25;
}

let totalSeconds = getSavedMinutes() * 60;
let remainingSeconds = totalSeconds;

updateDisplay();
let intervalId = null;

function formatTime(seconds) {
  const m = String(Math.floor(seconds / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');
  return `${m}:${s}`;
}

function updateDisplay() {
  document.querySelector('.time').textContent = formatTime(remainingSeconds);
}

function startTimer() {
  if (intervalId !== null) return;

  intervalId = setInterval(() => {
    if (remainingSeconds <= 0) {
      clearInterval(intervalId);
      intervalId = null;
      return;
    }
    remainingSeconds--;
    updateDisplay();
  }, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
  intervalId = null;
}

function resetTimer() {
  stopTimer();
  totalSeconds = getSavedMinutes() * 60;
  remainingSeconds = totalSeconds;
  updateDisplay();
}
