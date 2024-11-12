document.getElementById('weather-btn').addEventListener('click', async () => {
    const city = document.getElementById('city-name').value;
    const apiKey = '70303e3e8086aa1f05208f20b49e1962';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log(data);

        if (response.ok) {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>${data.weather[0].description}</p>
                <p>country:${data.sys.country}</P
                <p>max temperature: ${data.main.temp_max} °C</p>
                <p>min temperature: ${data.main.temp_min} °C</p>
                <p>Humidity: ${data.main.humidity}%</p>
                <p>Wind Speed: ${data.wind.speed} m/s</p>
            `;
            document.getElementById('weather-info').innerHTML = weatherInfo;
        } else {
            document.getElementById('weather-info').innerHTML = 'City not found';
        }
    } catch (error) {
        document.getElementById('weather-info').innerHTML = 'Error in fetching weather data';
        console.error(error);
    }
    var newButton = document.createElement('button');
    var buttonContent = document.createTextNode('Clear');
    newButton.appendChild(buttonContent);
    newButton.id = 'clearButton';
    newButton.onclick = function() {
        clearWeatherInfo();
    };
    document.getElementById('weather-info').appendChild(newButton);
});

function clearWeatherInfo() {
    document.getElementById('weather-info').innerHTML = '';
    document.getElementById('city-name').value="";
    const clearButton = document.getElementById('clearButton');
    if (clearButton) {
      clearButton.remove();
    }
}