 async function getWeather(){
    const city = document.getElementById("city").ariaValueMax.trim();
   const {lat , lon} = await getGeoLoc(city);

const response fetch
}
function getGeoLoc(city){
    console.log(City);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d7ed265190a0b7d8f0717eda9e546857}`)

    const data = await response.json();

    document.getElementById("WeatherData").innerHTML ='
    <div>
    <div>
        <p>Temperature :$ {(data.main.temp - 273.14).toFixed(2)}<p/>
        <div/>
    
    '
    const lat = data[0].lat;
    const lon = data[0].lon;

    return{lat,lon};



}