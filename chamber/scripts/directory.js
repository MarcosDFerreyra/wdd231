const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
const currentYear = new Date().getFullYear();


navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');
})

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;
