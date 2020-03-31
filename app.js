const hand_hr = document.querySelector(".hand.hour");
const hand_min = document.querySelector(".hand.minute");
const hand_sec = document.querySelector(".hand.second");

function tick() {
  const d = new Date();

  let seconds = d.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  hand_sec.style.transform = `translateY(-50%) rotate(${secondsDegrees}deg)`;

  let minute = d.getMinutes();
  const minDeg = (minute / 60) * 360 + (minute / 60) * 6 + 90;
  hand_min.style.transform = `translateY(-50%) rotate(${minDeg}deg)`;

  let hour = d.getHours();
  const hourDeg = (hour / 12) * 360 + (minute / 60) * 30 + 90;
  hand_hr.style.transform = `translateY(-50%) rotate(${hourDeg}deg)`;
}

tick();
setInterval(tick, 1000);
