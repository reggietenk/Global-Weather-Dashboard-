let button = document.querySelector(".button")
let cityInput = document.querySelector (".city-input")
let currentDate =document.querySelector (".date")
let cityEl = document.querySelector(".city-name")
let currentTempEl = document.querySelector(".temp")
let currentWindEl = document.querySelector(".wind")
let currentHumidity = document.querySelector(".humidity")
let currentIndex = document.querySelector(".uv-index")
let searchHistoryEl = document.querySelector(".search-history")
let apiKey = "9ed2cd13892f5f7331d217b18804ba3f" 
let apiUrl ="https://api.openweathermap.org/data/2.5/weather?q='+cityInput.value+'&appid={apiKey}"  



button.addEventListener("click", function(event){
    event.preventDefault
fetch(apiUrl)
.then(response => response.json())
.then(data => {
    let citychoice = data['name'];
    let temp = data['main']['temp'];
    let current = data['weather'][0]['description'];

    cityEl.innerHTML = citychoice
    currentTempEl.innerHTML = temp
    currentWindEl.innerHTML = current
});
})
    












// let searchHistory = document.createElement("li")
// searchHistoryEl.appendChild(searchHistory)


// let apiUrl ="https://api.openweathermap.org/data/2.5/onecall?lat="+ lat + "&lon=" + lon +"&units=imperial&appid=9ed2cd13892f5f7331d217b18804ba3f"  
// fetch(apiUrl).then(function(response){
//     (response).json().then(function(data){
//      console.log(data);
//     });
// });

