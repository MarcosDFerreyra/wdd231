const albumsConteiner = document.querySelector("#albums")

async function getMembers() {
    const response = await fetch("data/albums.json");
    const data = await response.json();
    displayMembers(data.albums);
}

getMembers();

function displayMembers(albums) {
    albums.forEach(album => {
        const card = document.createElement("div")
        card.classList.add("album-card")

        card.innerHTML =
            `<img src="images/${album.album_image}" alt="${album.album_name}" width="200" height="200" loading="lazy">
            <h2>${album.album_name}</h2>
            <p>${album.date}</p>
            <p>${album.song1}</p>
            <p>${album.song2}</p>
            <p>${album.song3}</p>`
        albumsConteiner.appendChild(card);
    });
}