const api = {
    key: "5de57ffff8cf0b481aa290f8230d1346",
    base: "http://api.openweathermap.org/data/2.5/"
}

const searchInput = document.getElementById('input-value');
const searchBtn = document.getElementById('button');
searchBtn.addEventListener('click', function(){
    getResult(searchInput.value);
})

function getResult(query){
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(res => res.json())
    .then(displayResult)
    
}
function displayResult(data){
    const placeName = document.getElementById("place");
    placeName.innerText = `${data.name}, ${data.sys.country}`;

    const temp = document.getElementById("temperature");
    temp.innerHTML = `${Math.round(data.main.temp)}°c`;

    const minmax = document.getElementById("minmax");
    minmax.innerHTML = `${Math.round(data.main.temp_min)}°c/ ${Math.round(data.main.temp_max)}°c`;

    const weatherType = document.getElementById("weather-type");
    weatherType.innerText = `${data.weather[0].main}`;
}
    let now = new Date();
    let date = document.getElementById('date');
    date.innerText = dateBuilder(now);

function dateBuilder(d){
    let months = ["January", "February", "March", "April", "May", "June","July", "August",
    "September", "October", "November", "December"]
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]

    let day = days[d.getDay()];
    let month = months[d.getMonth()];
    let date = d.getDate();
    let year = d.getFullYear();

    return `${day}, ${month} ${date}, ${year}`;
}