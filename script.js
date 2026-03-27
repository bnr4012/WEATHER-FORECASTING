const apiKey="cefeff51d7e841c64f0988ac232a3048";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox=document.querySelector(".search");
const searchBtn=document.querySelector(".search-btn");
const weather=document.querySelector(".main-icon");

async function checkWeather(city){
    const response= await fetch(apiUrl +  city + `&appid=${apiKey}`); 
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        document.querySelector(".images").style.display="none";
    }  
    else{
         let data=await response.json();
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".per").innerHTML=data.main.humidity;
    document.querySelector(".km").innerHTML=data.wind.speed+"km/ph";
    if(data.weather[0].main=="Clouds"){
        weather.src="images/cloudy.png";
    }
    else if(data.weather[0].main=="Clear"){
        weather.src="images/clear.png";
    }
    
    else if(data.weather[0].main=="Rain"){
        weather.src="images/rainy.png";
    }
    else if(data.weather[0].main=="Drizzle"){
        weather.src="images/drizzle.png";
    }
    else if(data.weather[0].main=="Mist"){
        weather.src="images/mist.png";
    }
    document.querySelector(".weather").style.display="block";
    document.querySelector(".images").style.display="flex";
    document.querySelector(".error").style.display="none";

    }
   
 

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
});
