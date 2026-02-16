import { footerInfo } from "./base.mjs";

footerInfo();

const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo)

const card = document.querySelector('#results')
card.innerHTML =
    `<h2>Your In formation:</h2>
    <p>Your name: ${myInfo.get("first")} ${myInfo.get("last")}</p>
    <p>Your phone: ${myInfo.get("phoneNumber")}</p> 
    <p>Your email: ${myInfo.get("userEmail")} </p>`

