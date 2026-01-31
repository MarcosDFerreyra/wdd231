
const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=-34.80&lon=-58.27&units=metric&appid=5456cc36ab5eb4f49b5b8b2d39e2d13c';

async function apiFetch() { /*Define an async function named "apiFetch()" */
    try { /*that uses a try block to handle errors*/
        const response = await fetch(url); /*Store the results of the URL fetch into a variable named "response".*/
        if (response.ok) { /*If the response is OK,*/
            const data = await response.json();  /*then store the result of response.json() conversion in a variable named "data"*/
            console.log(data); /*Output the results to the console for testing*/
            function displayResults(data) {
                currentTemp.textContent = `${Math.round(data.main.temp)}°C`;

                document.querySelector("#temp-max").textContent =
                    `${Math.round(data.main.temp_max)}°C`;

                document.querySelector("#temp-min").textContent =
                    `${Math.round(data.main.temp_min)}°C`;

                document.querySelector("#humidity").textContent =
                    `${data.main.humidity}%`;

                const icon = data.weather[0].icon;
                const desc = data.weather[0].description;

                weatherIcon.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
                weatherIcon.alt = desc;
                document.querySelector("#weather-desc").textContent = desc;
            }
            displayResults(data)

        }
        else {
            throw Error(await response.text()); /*Else, throw an Error using the response.text()*/
        }
    }
    catch (error) {
        console.log(error); //Finish off the catch block by outputting any try error to the console
    }

}
apiFetch();

const forecastDiv = document.querySelector('#forecast');

const url2 = 'https://api.openweathermap.org/data/2.5/forecast?lat=-34.80&lon=-58.27&units=metric&appid=5456cc36ab5eb4f49b5b8b2d39e2d13c';

fetch(url2)
    .then(response => response.json())
    .then(data => {
        const days = data.list.filter(item =>
            item.dt_txt.includes('12:00:00')
        );

        days.slice(0, 3).forEach(day => {
            const temp = Math.round(day.main.temp);
            const desc = day.weather[0].description;
            const icon = day.weather[0].icon;

            const p = document.createElement('p');
            p.innerHTML = `
        ${new Date(day.dt_txt).toLocaleDateString('en-US', { weekday: 'short' })}:
        ${temp}°C
        <img src="https://openweathermap.org/img/wn/${icon}.png" alt="${desc}">
      `;

            forecastDiv.appendChild(p);
        });
    });

