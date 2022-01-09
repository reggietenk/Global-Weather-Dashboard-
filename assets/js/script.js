let button = document.querySelector(".button")
let cityChoiceEl = document.querySelector (".city-input")
let currentDate =document.querySelector (".date")
let cityEl = document.querySelector(".city-name")
let cuurentTempEl = document.querySelector(".temp")
let currentWindEl = document.querySelector(".wind")
let currentHumidity = document.querySelector(".humidity")
let currentIndex = document.querySelector(".uv-index")


button.addEventListener("click", function() {
let apiUrl ="https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}"  
fetch(apiUrl)
.then(response => response.json())
.then(data => console.log(data))

let cityName = data['name']
let temp = data['main']['temp']
cityName.innerHTML=cityName

.catch(error => alert("Invalid city name!"))
})