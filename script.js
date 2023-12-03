
// targeting the rewuired divs
let lat=document.getElementById("lat");
let long=document.getElementById("long");
let frame=document.getElementById("frame");
let container=document.getElementById("container")

window.alert("Please Replace the API KEY")



      
        
// Api for getting current Device Location coordinates
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    lat.innerHTML = "Lat: " + position.coords.latitude;
    long.innerHTML="Long: " + position.coords.longitude;
    let lati=position.coords.latitude;
    let longi=position.coords.longitude;
    let url="https://maps.google.com/maps?q=20.292246, 85.917785&output=embed";
    frame.src=`https://maps.google.com/maps?q=${lati}, ${longi}&output=embed`;
    getweather(lati,longi);
  }
//fetching weather details
  function getweather(lati,longi){
   const key="1e618748a0cf1d21311cfde6a1c33507";
   let laat=lati.toFixed(2);
   let loong=longi.toFixed(2);
   let lang = 'en';

   let units = 'metric';

   
    //let url = `http://api.openweathermap.org/data/2.5/onecall?lat=${laat}&lon=${loong}&appid=${key}&units=${units}&lang=${lang}`;
    let url=`https://api.openweathermap.org/data/2.5/weather?lat=${lati}&lon=${loong}&appid=${key}`;
    //fetch the weather
    fetch(url)
      .then((resp) => {
        if (!resp.ok) throw new Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        showWeather(data);
      })
      .catch(console.err);



}


// targeting required divs


        let loca=document.getElementById("loca");
        let humidity=document.getElementById("humidity");
        let timezone=document.getElementById("timezone");
        let pressure=document.getElementById("pressure");
        let wind=document.getElementById("wind");
        let windd=document.getElementById("wind-direction");
        let uv=document.getElementById("uv");
        let feels=document.getElementById("feelslike");


//Diplaying the weather data into the UI



function showWeather(data){
loca.innerText="Location :"+ data.name;
humidity.innerText="Humidity :"+data.main.humidity;
timezone.innerText= "Timezone :"+data.timezone+" GMT";
pressure.innerText="Pressure :"+data.main.pressure+" atm";
wind.innerText= "Wind Speed :"+data.wind.speed +" Kmph";
windd.innerText="Wind Direction :"+data.wind.deg+" degree";
uv.innerText="Uv Index :"+data.cod;
feels.innerText="Feels Like :"+data.main.feels_like;

let direction=data.wind.deg;
if(direction>=0&&direction<=5){
    windd.innerText="Wind Direction : North ";
}

if(direction>5&&direction<=75){
    windd.innerText="Wind Direction : North East";
}
if(direction>75&&direction<=80){
    windd.innerText="Wind Direction : East";
}
if(direction>80&&direction<=175){
    windd.innerText="Wind Direction : South East";
}


if(direction>175&&direction<185){
    windd.innerText="Wind Direction : South";
    }
if(direction>=185&&direction<275){
    windd.innerText="Wind Direction : South West";
}
if(direction>=275&&direction<285){
    windd.innerText="Wind Direction : West";
    }
if(direction>=285&&direction<355){
    windd.innerText="Wind Direction : North West ";
}
        
if(direction>=355&&direction<359){
    windd.innerText="Wind Direction : North ";
}

}

