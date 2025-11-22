let apiKey = "f72cb505b3d8d7320cc8dc22f78616f4";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?q=";

let searchInput = document.getElementById("city");
let searchbtn = document.getElementById("search-btn");
let weatherIcon = document.getElementById("weatherIcon");
let infobox = document.getElementById("info")

infobox.style.display="none";

async function checkWeather(city) {
    let response = await fetch(apiUrl + city + `&appid=${apiKey}&units=metric`);
    console.log(response);
    infobox.style.display="block";
    if (response.status == 404) {
        alert("Something Wrong");
        
    }
    else {
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temparature").innerHTML = Math.round(data.main.temp) + '*C';
        document.querySelector(".windspeed").innerHTML = data.wind.speed + "km/h";
        document.querySelector(".humidityspeed").innerHTML = data.main.humidity + "%";

        console.log(data.weather[0].main);

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }

        else if (data.weather[0].main == "Clear") {
            weatherIcon.src = "images/clear.png";
        }

        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }

        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }

        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }

        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

    }
}

searchbtn.addEventListener("click", () => {
    let cityName = searchInput.value;
    checkWeather(cityName);
});


