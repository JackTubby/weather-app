// API DOC: https://openweathermap.org/api/one-call-3

// Create obj for storing functions and var that are necessary for
// using the API
let weather = {
    "apiKey": "42bedc78b99fb50bd914c95690409d6b",
    fetchWeather: function(city) {
        // Get api data
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`)
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    },
    // Function to display the weather
    displayWeather: function(data) {
        // Extract the name from the object
        const { name } = data;
        const { icon, description } = data.weather[0]; // Get first item of array
        const { temp, humidity } = data.main;
        const { speed } = data.wind;
        console.log(name, icon, description, temp, humidity, speed)
        // Display data on page
        document.querySelector(".city").innerText = "Weather in " + name;
        document.querySelector(".icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`
        document.querySelector(".description").innerText = description;
        // Round temp to nearest integer
        document.querySelector(".temp").innerText = `${Math.round(temp)}°C`;
        document.querySelector(".humidity").innerText = `Humidity ${humidity} %`
        // Round wind speed to nearest decimal
        document.querySelector(".wind").innerText = `wind speed ${Math.round(speed * 10) / 10} km/h`
    }
}


// // Get url
// fetch("https://api.openweathermap.org/data/2.5/weather?q=Denver&units=metric&appid=42bedc78b99fb50bd914c95690409d6b"
// )
// .then((response)) => response.json() // Once url is fetched do this 
// .then((data) => console.log(data))