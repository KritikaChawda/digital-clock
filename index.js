function updateClockAndDate() {
    const now = new Date();

    // Time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = (hours < 10) ? '0' + hours : hours;
    minutes = (minutes < 10) ? '0' + minutes : minutes;
    seconds = (seconds < 10) ? '0' + seconds : seconds;

    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById('clock').textContent = currentTime;

    // Date
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const dateStr = `${dayName}, ${now.getDate()} ${monthName} ${now.getFullYear()}`;
    document.getElementById('date').textContent = dateStr;

    // Festival
    checkFestival(now.getMonth(), now.getDate());
  }

  function checkFestival(month, day) {
    const festivalList = {
      '0-1': 'New Year\'s Day 🎉',
      '1-14': 'Valentine\'s Week 💖',
      '2-8': 'International Women\'s Day 👩‍🦱',
      '7-15': 'Independence Day 🇮🇳',
      '9-24': 'Dussehra 🎉',
      '10-12': 'Diwali 🪔',
      '11-25': 'Christmas 🎄'
    };

    const key = `${month}-${day}`;
    if (festivalList[key]) {
      document.getElementById('festival').textContent = festivalList[key];
    } else {
      document.getElementById('festival').textContent = 'No Major Festival Today!';
    }
  }

  setInterval(updateClockAndDate, 1000);
  updateClockAndDate();