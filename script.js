let inputValue = document.getElementById("location-input");
let tempValue = document.getElementById("temp-value");
let unit = document.getElementById("unit");
let weatherDesc = document.getElementById("weather-desc");
const locations = document.getElementById("location");
let button = document.getElementById("btn");



const apiKey = `39ead83e391e80d9cf40101bd6430790`;
button.onclick = function(){
    if(inputValue.value == "")
        alert("Please enter some location");
    else{
        loc = inputValue.value
       url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apiKey}`;    
        fetch(url).then(res=>res.json())
        .then(data=>{
            console.log(data);
            const{name}=data;
            const{feels_like}=data.main;
            const{description}=data.weather[0];
            tempValue.innerText = Math.floor(feels_like-273);
            locations.innerText = name;
            weatherDesc.innerText = description;
        })
        .catch(()=>{
            alert("Enter valid location");
        })
        inputValue.value ="";
    }
}