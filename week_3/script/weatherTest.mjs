const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.756&lon=6.641&units=metric&appid=5456cc36ab5eb4f49b5b8b2d39e2d13c';

async function apiFetch() { /*Define an async function named "apiFetch()" */
    try { /*that uses a try block to handle errors*/
        const response = await fetch(url); /*Store the results of the URL fetch into a variable named "response".*/
        if (response.ok) { /*If the response is OK,*/
            const data = await response.json();  /*then store the result of response.json() conversion in a variable named "data"*/
            console.log(data); /*Output the results to the console for testing*/
            function displayResults(data) {
                currentTemp.innerHTML = `${data.main.temp}&deg;F`;

                const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
                let desc = data.weather[0].description;

                weatherIcon.setAttribute('src', iconsrc);
                weatherIcon.setAttribute('alt', desc);
                captionDesc.textContent = `${desc}`;
            }
            displayResults(data);

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