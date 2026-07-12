const input = document.getElementById('timer-minutes');

const saved = localStorage.getItem('timerMinutes');
if (saved) input.value = saved;

function saveSettings() {
  const value = input.value.trim();

  if (value === '') {
    alert('시간을 입력해주세요.');
    return;
  }

  const minutes = Number(value);
  if (minutes < 1 || minutes > 60) {
    alert('1분 이상 60분 이하로 입력해주세요.');
    return;
  }

  localStorage.setItem('timerMinutes', minutes);
  location.href = 'index.html';
}
