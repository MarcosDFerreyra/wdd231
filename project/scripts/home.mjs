import { footerInfo } from "./base.mjs";
import { navegador } from "./base.mjs";

footerInfo();
navegador();




const albumsContainer = document.querySelector("#albums");

async function getAlbums() {
    try {
        const response = await fetch("data/albums.json");

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();
        displayAlbums(data.albums);

    } catch (error) {
        console.error("There was a problem with the fetch:", error);
    }
}
getAlbums();

function displayAlbums(albums) {
    albums.forEach(album => {

        const card = document.createElement("div");
        card.classList.add("album-card");

        let songsList = "";
        album.all_songs.forEach(song => {
            songsList += `<li>${song}</li>`;
        });

        card.innerHTML = `
            <img src="images/${album.album_image}" alt="${album.album_name}" width="200" height="200" loading="lazy">
            <div class="inside-album">
            <h2>${album.album_name}</h2>
            <p class="date">${album.date}</p>
            <div class="song">
            <p>${album.song1}</p>
            <p>${album.song2}</p>
            <p>${album.song3}</p>
            </div>
            <button class="songs">All Songs</button>
            </div>

            <dialog class="mydialog">
                <h2>${album.album_name}</h2>
                <ul>
                    ${songsList}
                </ul>
                <button class="close">Close</button>
            </dialog>
        `;

        albumsContainer.appendChild(card);

        const button = card.querySelector(".songs");
        const dialog = card.querySelector(".mydialog");
        const closeBtn = card.querySelector(".close");

        button.addEventListener("click", () => {
            dialog.showModal();
        });

        closeBtn.addEventListener("click", () => {
            dialog.close();
        });

    });
}

const messageContainer = document.querySelector("#visitMessage");

const lastVisit = localStorage.getItem("lastVisit");
const now = Date.now();

let message = "";

if (!lastVisit) {
    message = "Welcome! this is the Home page.";
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

