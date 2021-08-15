This is a functional Weather App that I made by using an API key from stringing together the latitude and longitude coordinates from [Open Weather](https://openweathermap.org/current#geo) by getting the geolocation from the users browser, if they give permission to do so. You can try the app live [here](https://zenidith.github.io/weather-app/)

HTML 
- I set the background to a gradient colour so that the background would look nice then I set up a container with a number of essential elements then added classes to those elements that would be later manipulated via the DOM and the API. I later put those into constant variables in JavaScript, as can be seen below. 

CSS 
- no sorcery here. 

JS 
- Targeted elements in dom and put them into constant variables. 

`const iconElement = document.querySelector('.weather-icon');<br>
const tempElement = document.querySelector('.temperature-value');<br>
const descElement = document.querySelector('.temperature-description');<br>
const locationElement = document.querySelector('.location');<br>
const notificationElement = document.querySelector('.notification');`

- Because the default unit was 'kelvin', I put kelvin into a constant as 273 then subtracted 'kelvin' off the math function in the fetching of the API in order to display the weather in the more universally used 'Celsius'. 
- used a setPosition() function and then saved latitude/longitude into variables. MDN documentation can be found [here](https://developer.mozilla.org/en-US/docs/Web/API/GeolocationCoordinates/longitude)
- majority of the logic was contained in the getWeather() function which fetched the weather via the Open Weather API and then executed the displayWeather() function via string interpolation to get the weather to display properly. Icon's representing each forecast were downloaded and accessed via choosing the correct index in an array for the icons. 
- when I initially ran the app locally, there was no problems, but after uploading to GitHub pages, it wasn't running properly. This was fixed by simply changing the URL from `http` to `https`. 


Happy coding!

