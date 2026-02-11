import { interest_places } from "../data/interestItems.mjs"; 

const interesPoints = document.querySelector("#interestPoints");

function displayInterest(places) {
    places.forEach(place => {
        const card = document.createElement("div");
        card.classList.add("places");

        card.innerHTML = `
        <figure>
        <img src="images/${place.image}" alt="${place.name} width="286" height="195"">
        </figure>
        <h2>${place.name}</h2>
        <address>${place.address}</address>
        <p>${place.description}</p>
        <button>Learn More</button>`
        
        interesPoints.appendChild(card)
    });
}
displayInterest(interest_places);


const messageContainer = document.querySelector("#visitMessage");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

let message = "";

if (!lastVisit) {
    message = "Welcome! Let us know if you have any questions.";
} else {
    const difference = now - Number(lastVisit);
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    if (days < 1) {
        message = "Back so soon! Awesome!";
    } else if (days === 1) {
        message = "You last visited 1 day ago.";
    } else {
        message = `You last visited ${days} days ago.`;
    }
}

messageContainer.textContent = message;

// Actualizamos la fecha de visita
localStorage.setItem("lastVisit", now);
