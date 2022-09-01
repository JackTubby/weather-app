// API DOC: https://openweathermap.org/api/one-call-3

// Create obj for storing functions and var that are necessary for
// using the API
let weather = {
    "apiKey": "",
    fetchWeather: function(city) {
        // Get api data
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data))
        .catch(error => alert(error))
    },
    // Function to display the weather
    displayWeather: function(data) {
        // Extract the name from the object
        const { name } = data;
        const { icon, description } = data.weather[0]; // Get first item of array
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        // Display data on page
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector(".description").innerText = description;
        // Round temp to nearest integer
        document.querySelector(".temp").innerText = `${Math.round(temp)}°C`;
        document.querySelector(".humidity").innerText = `Humidity ${humidity} %`
        // Round wind speed to nearest decimal
        document.querySelector(".wind").innerText = `wind speed ${Math.round(speed * 10) / 10} km/h`
        // Remove loading class which remove hidden visibility
        document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
        // Get the value of the search bar and then run our fetchWeather func 
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
};

// Search bar
// Runs when our search btn is clicked
document.querySelector(".search button").addEventListener("click", function () {
        // Runs our search func inside our weather obj
        weather.search();

})
// Add event listner for search box (if enter key is clicked)
document
    .querySelector(".search-bar")
    .addEventListener("keyup", function(event) {
        if (event.key == "Enter") {
            weather.search();
        }
})

// On page load this will run and get current weather in London
weather.fetchWeather("London");