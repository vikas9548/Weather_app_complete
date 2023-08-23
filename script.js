const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn');
const weather_img = document.querySelector('.weather_img');
const temperature = document.querySelector('.temperature');
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found = document.querySelector('.location-not-found'); 
const weather_body = document.querySelector('.weather-body');
// const city_name = document.querySelector('.city_name');


async function checkWeather(_city){
    const API_key = "6fe87ae332a7604926b893e8131a2987";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${_city}&appid=${API_key}`;
    const weather_data = await fetch(`${url}`).then(response => response.json());

    


    if(weather_data.cod === `404`){
        location_not_found.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return
    }


    location_not_found.style.display = "none";
    weather_body.style.display = "flex";
    temperature.innerHTML = `${Math.round(weather_data.main.temp - 273.15)}°C`;
    description.innerHTML = `${weather_data.weather[0].description}`;
    humidity.innerHTML = `${weather_data.main.humidity}%`;
    wind_speed.innerHTML = `${weather_data.wind.speed}Km/H`;
    // city_name.innerHTML = `${weather_data.name}`;
   


    switch(weather_data.weather[0].main){
        case 'Clouds': weather_img.src = "img/cloud.png";
        break;
        case 'Clear': weather_img.src = "img/clear.png";
        break;
        case 'mist': weather_img.src = "img/mist.png";
        break;
        case 'Rain': weather_img.src = "img/rain.png";
        break;
        case 'Snow': weather_img.src = "img/snow.png";
        break;
        case 'Drizzle': weather_img.src = "img/drizzle.png";
        break;
    }
        
    // console.log(weather_data.name);
    console.log(weather_data);
}
searchBtn.addEventListener('click', ()=>{
    checkWeather(inputBox.value);
})