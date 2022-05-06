let cityFormEl = document.querySelector("#city-form")
let button = document.querySelector("#search-button")
let cityInputEl = document.querySelector ("#city-input")
let searchHistoryEl = document.querySelector("#search-history")


let currentDate =document.querySelector (".date")
let cityEl = document.querySelector(".city-name")
let currentTempEl = document.querySelector(".temp")
let currentWindEl = document.querySelector(".wind")
let currentHumidity = document.querySelector(".humidity")
let currentIndex = document.querySelector(".uv-index")
let apiKey = "9ed2cd13892f5f7331d217b18804ba3f" 



let displayLocationWeather = function(data) {
    data.preventDefault()
    console.log(data)

    let currentDate =document.querySelector (".date")
    let searchedCity = document.querySelector(".searched-city")
    let currentTemp = document.querySelector(".temp")
    let currentWind = document.querySelector(".wind")
    let currentHumidity = document.querySelector(".humidity")
    let currentIndex = document.querySelector(".uv-index")

    let fiveDay = document.querySelector(".fiveday-forecast")
    let cityForecast = document.createElement("div");

    currentDate.textContent = "2/10";
    searchedCity.textContent = "";
    currentTemp.textContent = "45.6";
    currentWind.textContent = "78.9";
    currentHumidity.textContent = "";
    currentIndex.textContent = "";




}

let cityTracker = []


let formSubmitHandler = function() {
    
    let location = JSON.parse(localStorage.getItem("location"))

    if (!location){
    return
    }
    

    let cityName = cityInputEl.value.trim();

    if(cityName) {
        getCityWeather(cityName)
        cityInputEl.value = "";
    } else {
        alert("Please valid city name");
    }
  

  };

// let displayCityData = function (Id, Name ) {
// fetch("api.openweathermap.org/data/2.5/weather?id="+ Id, Name +"&appid=9ed2cd13892f5f7331d217b18804ba3f")
// .then(function(response) {
//     console.log(response)
//     if(response.ok)
//     response.json().then(function(data){
//         displayCityData(Id,Name,data)
//     });
    
// })

// }
// displayCityData()

let locationCoord = function(data) {
    cityInputEl.text = "";
    cityInputEl.textContent= data.name
    
    
    let lat = data.coord.lat
    let lon = data.coord.lon


    getCityInfo(lat,lon)
    
}

let getCityWeather = function (cityName) {
   
    let apiUrl = "api.openweathermap.org/data/2.5/weather?id="+cityName+"&appid=9ed2cd13892f5f7331d217b18804ba3f"
    fetch(apiUrl)
    .then(function(response) {
        console.log(response)
        if (response.ok) {
            response.json().then(function(data) {
                console.log(data)
                locationCoord(data)
            });
        };
        
    });
        
};

getCityWeather()

let getCityInfo = function(lat, lon) {
    console.log(lat,lon)
    
    let apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=30.489972&lon=-99.771335&units=imperial&appid=9ed2cd13892f5f7331d217b18804ba3f"
    fetch(apiUrl)
    .then(function(response) {
        console.log(response)
        if (response) {
            response.json().then(function(data){
                console.log(data)
        });

    
        };

    });

}
getCityInfo()


button.addEventListener("click", displayLocationWeather )
cityInputEl.addEventListener("submit", formSubmitHandler)