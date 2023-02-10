let now = new Date();
let currenttime = document.querySelector("#myday");
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}
currenttime.innerHTML = `${day}, ${hours}:${minutes}`;

function changeCity(event) {
  event.preventDefault();
  let textinput = document.querySelector("#text-input");
  let h2 = document.querySelector("#city");
  h2.innerHTML = `${textinput.value}`;

  let unit = "metric";
  let apiKey = "743bee57fddbfaf52447193a87d5dd25";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${textinput.value}&appid=${apiKey}&units=${unit}`;

  function shower(response) {
    let temperature = Math.round(response.data.main.temp);
    let temperatureElement = document.querySelector(".current_temperature");
    temperatureElement.innerHTML = `${temperature}°c`;
  }
  axios.get(apiUrl).then(shower);
}
let form = document.querySelector("#search-form");
form.addEventListener("submit", changeCity);
