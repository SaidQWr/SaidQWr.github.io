function toggleMode() {
  document.body.classList.toggle('dark-mode');
}

function toggleTimeFormat() {
  const clock = document.getElementById('clock');
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const is24HourFormat = clock.classList.toggle('twenty-four-hour-format');

  if (is24HourFormat) {
    clock.textContent = padZero(currentHour) + ':' + padZero(currentTime.getMinutes()) + ':' + padZero(currentTime.getSeconds());
  } else {
    clock.textContent = format12Hour(currentHour) + ':' + padZero(currentTime.getMinutes()) + ':' + padZero(currentTime.getSeconds()) + getAmPm(currentHour);
  }
}

function format12Hour(hour) {
  return hour % 12 || 12;
}

function getAmPm(hour) {
  return hour < 12 ? ' AM' : ' PM';
}

function padZero(number) {
  return number.toString().padStart(2, '0');
}

document.getElementById('mode-toggle').addEventListener('click', toggleMode);
document.getElementById('time-format-toggle').addEventListener('click', toggleTimeFormat);

// Establece el modo oscuro como predeterminado
document.body.classList.add('dark-mode');

// Muestra la hora actual al cargar la página
toggleTimeFormat();

// Actualiza el tiempo cada segundo
setInterval(updateTime, 1000);

function updateTime() {
  const clock = document.getElementById('clock');
  const currentTime = new Date();
  const currentHour = currentTime.getHours();
  const is24HourFormat = clock.classList.contains('twenty-four-hour-format');

  if (is24HourFormat) {
    clock.textContent = padZero(currentHour) + ':' + padZero(currentTime.getMinutes()) + ':' + padZero(currentTime.getSeconds());
  } else {
    clock.textContent = format12Hour(currentHour) + ':' + padZero(currentTime.getMinutes()) + ':' + padZero(currentTime.getSeconds()) + getAmPm(currentHour);
  }
}