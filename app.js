// api key from open weather = 96f6ba150dbfde1782395bffef95d6a2

const iconElement = document.querySelector('.weather-icon');
const tempElement = document.querySelector('.temperature-value');
const descElement = document.querySelector('.temperature-description');
const locationElement = document.querySelector('.location');
const notificationElement = document.querySelector('.notification');

// App data
const weather = {};
weather.temperature = {
    unit: 'celsius'
};

// Const and Variables
const KELVIN = 273;
// API Key
const key = "96f6ba150dbfde1782395bffef95d6a2";

// Check if the Browser supports Geolocalization 
if('geolocation' in navigator){
    navigator.geolocation.getCurrentPosition(setPosition, showError);
}else{
    notificationElement.style.display = 'block';
    notificationElement.innerHTML = `<p> Browser doesn't support Geolocalization`;
}

// Set User Position
function setPosition(position){
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;

    getWeather(latitude, longitude);
}

// Show error when there is an issue with Geolocalization
function showError(error){
    notificationElement.style.display = 'block';
    notificationElement.innerHTML = `<p> ${error.message}`;
}

// Get weather from the API Provider

function getWeather(latitude, longitude){
    let api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${key}`

    fetch(api)
    .then(function(response){
        let data = response.json();
        return data;
    })
    .then (function(data){
        weather.temperature.value = Math.floor(data.main.temp - KELVIN);
        weather.description = data.weather[0].description;
        weather.iconId = data.weather[0].icon;
        weather.city = data.name;
        weather.country = data.sys.country;
    })
    .then(function(){
        displayWeather();
    });
}

// Display the weather to the UI
function displayWeather(){
    iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
    tempElement.innerHTML = `${weather.temperature.value}° <span>C</span>`;
    descElement.innerHTML = weather.description;
    locationElement.innerHTML = `${weather.city}, ${weather.country}`;
}
