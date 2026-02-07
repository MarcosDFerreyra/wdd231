import { memberships } from "../scripts/data";

const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mydialog h2')
const myclose = document.querySelector('#mydialog button')
const myinfo = document.querySelector('#mydialog p')
myclose.addEventListener("click", () => mydialog.close())

function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        photo.addEventListener('click', () => showStuff(x));
    });
}

displayItems(memberships)

function showStuff(x) {
    mytitle.innerHTML = x.name
    myinfo.innerHTML = `${x.benefit1}  ${x.benefit2} ${x.benefit3} ${x.benefit3}`
    mydialog.showModal()
}