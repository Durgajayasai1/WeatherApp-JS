async function getWeather(){
    const cityName = document.getElementById("inputItem").value;
    const accessKey = '5cc601e2c7102e55440023a026a4a61c';

    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${accessKey}`);
        const data = await response.json();

        if(response.ok){
            const weatherDescription = data.weather[0].description;
            const temperature = (data.main.temp - 273.15).toFixed(2); // Convert Kelvin to Celsius
            const humidity = data.main.humidity;
            const windSpeed = data.wind.speed;

            document.getElementById("result").innerHTML = `
                <h2>Weather in ${cityName}</h2>
                <p>Temperature: ${temperature} °C</p>
                <p>Description: ${weatherDescription}</p>
                <p>Humidity: ${humidity}%</p>
                <p>Wind Speed: ${windSpeed} m/s</p>
            `;
        } else{
            document.getElementById("result").innerHTML = `<p>Error fetching weather's data.</p>`
        }
    } catch(e){
        console.log('Error fetching weather data:', e);
    }
}