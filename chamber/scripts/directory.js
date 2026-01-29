const navbutton = document.querySelector('#ham-btn');
const navlinks = document.querySelector('#nav-bar');
const gridMember = document.querySelector('#grid')
const listMember = document.querySelector('#list');
const membersContainer = document.querySelector("#members");

const currentYear = new Date().getFullYear();


navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navlinks.classList.toggle('show');

})

gridMember.addEventListener("click", () => {
    membersContainer.classList.add("grid")
    membersContainer.classList.remove("list")
})

listMember.addEventListener("click", () => {
    membersContainer.classList.add("list")
    membersContainer.classList.remove("grid")
})

document.getElementById("currentyear").innerHTML = currentYear;
document.getElementById("lastModified").innerHTML = document.lastModified;


async function getMembers() {
    const response = await fetch("data/members.json");
    const data = await response.json();
    displayMembers(data.companies);
}

getMembers();

function displayMembers(companies) {
    companies.forEach(company => {
        const card = document.createElement("div");
        card.classList.add("member-card");

        card.innerHTML = `
      <img src= "images/${company.image_file}" alt= "logo company" width="286" height="195">
      <h2>${company.company_name}</h2>
      <p>${company.membership_level}</p>
      <p>${company.business_type}</p>
      <p class="number">${company.company_phone}</p>
      <p>${company.company_address}</p>
      <a href="${company.company_url}" target="_blank">Website</a>
    `;

        membersContainer.appendChild(card);
    });
}

gridMember.addEventListener("click", () => { 
    membersContainer.classList.add("grid")
    membersContainer.classList.remove("list")
})

listMember.addEventListener("click", () => {
    membersContainer.classList.add("list")
    membersContainer.classList.remove("grid")
})