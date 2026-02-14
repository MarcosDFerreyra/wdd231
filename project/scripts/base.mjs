export function footerInfo() {

    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").innerHTML = currentYear;
    document.getElementById("lastModified").innerHTML = document.lastModified;
} 
export function navegador() {

    const navbutton = document.querySelector('#ham-btn');
    const navlinks = document.querySelector('#nav-bar');
    
    navbutton.addEventListener('click', () => {
        navlinks.classList.toggle('show');
        navbutton.classList.toggle('show');
    });
}

