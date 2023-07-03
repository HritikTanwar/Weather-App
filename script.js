


const apiKey = "bc439068140f0c8297109274e02b6670"

let searchId = document.getElementById("search-id")
let searchBtn = document.getElementById("search-btn")
const apiURL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="
let icon = document.querySelector(".weatherIcon")


    // Calling the function through button.

searchBtn.addEventListener("click", function(){
    
    checkWeather(searchId.value)
})


async function checkWeather(city){
     
    const response = await fetch(apiURL + city + `&appid=${apiKey}`);
    var data = await response.json();

    //If statement for checking if the location entered is correct or not
    if(response.status == 404){
        document.querySelector(".error").style.display = "block"
        document.querySelector(".info").style.display = "none"
    }

    else{

    document.querySelector(".city-name").textContent = data.name;
    document.querySelector(".temp").textContent = Math.round(data.main.temp) + "°C";
    document.querySelector(".h3").textContent = data.main.humidity + "%";
    document.querySelector(".h4").textContent = data.wind.speed + "km/h";

        // Conditional Statements for weather type icon

    if(data.weather[0].main === "Clouds"){
        icon.src = "images/clouds.png";
    }
    else if(data.weather[0].main === "Rain"){
        icon.src = "images/rain.png";
    }
    else if(data.weather[0].main === "Drizzle"){
        icon.src = "images/drizzle.png";
    }
    else if(data.weather[0].main === "Mist"){
        icon.src = "images/mist.png";
    }
    else if(data.weather[0].main === "Snow"){
        icon.src = "images/snow.png";
    }
    else if(data.weather[0].main === "Clear"){
        icon.src = "images/clear.png";
    }
    document.querySelector(".info").style.display = "block"
    document.querySelector(".info").style.visibility = "visible"
    document.querySelector(".box-container").style.height = "550px"
    document.querySelector(".error").style.display = "none"
    }
    
}
