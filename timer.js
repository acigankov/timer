const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function countdown () {
    const targetDate = new Date("01.01.2021");
    const currentDate = new Date();
    const allSeconds = Math.floor(targetDate - currentDate) / 1000;
    const days = Math.floor(allSeconds / 3600 / 24);
    const hours = Math.floor(allSeconds / 3600 ) % 24;
    const minutes = Math.floor(allSeconds / 60 ) % 60;
    const seconds = Math.floor(allSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return (time < 10 ? `0${time}` : time);
}
countdown();
setInterval(countdown, 1000);