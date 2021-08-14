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
    let latitude = position.coord.latitude;
    let longitude = position.coord.longitude;

    getWeather(latitude, longitude);
}

// Show error when there is an issue with Geolocalization
function showError(error){
    notificationElement.style.display = 'block';
    notificationElement.innerHTML = `<p> ${error.message}`;
}