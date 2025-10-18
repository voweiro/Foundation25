const daysElement = document.getElementById("days");
const hoursElement = document.querySelector("#hours");
const minutesElement = document.querySelector("#minutes");
const secondsElement = document.querySelector("#seconds");

const endDate = new Date(2026, 0, 1);

function countDown() {
  const currentdate = new Date();

  // console.log(currentdate.getTime() / 1000);

  const totalSeconds = (endDate - currentdate) / 1000;
  //   console.log(totalSeconds);

  let days = Math.floor(totalSeconds / (24 * 3600));
  let hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
  let minutes = Math.floor(((totalSeconds % (24 * 3600)) % 3600) / 60);
  let seconds = Math.floor(((totalSeconds % (24 * 3600)) % 3600) % 60);

  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;
}

countDown();

setInterval(countDown, 1000);
