let weather = {
  apiKey: "612869bae8e5cb73d36a05548b8df6d5",

  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },

  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;

    document.querySelector(".city").innerText = "Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.round(temp) + "°C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + "%";
    document.querySelector(".wind").innerText = "Wind speed: " + speed + "km/h";
  },

  search: function () {
    let place = document.querySelector(".searchbar").value;
    this.fetchWeather(place);
  },
};

let searchbtn = document.querySelector(".search button");

searchbtn.addEventListener("click", () => {
  weather.search();
});

let enter = document.querySelector(".searchbar");
enter.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    weather.search();
  }
});

weather.fetchWeather("Niš");
