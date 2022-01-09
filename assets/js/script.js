let button = document.querySelector(".button")
let cityChoiceEl = document.querySelector (".city-input")
let currentDate =document.querySelector (".date")
let cityEl = document.querySelector(".city-name")
let cuurentTempEl = document.querySelector(".temp")
let currentWindEl = document.querySelector(".wind")
let currentHumidity = document.querySelector(".humidity")
let currentIndex = document.querySelector(".uv-index")
let apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=9ed2cd13892f5f7331d217b18804ba3f"


fetch(apiUrl)
.then(response => response.json())
.then(data => console.log(data))



