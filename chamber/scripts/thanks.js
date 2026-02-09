const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo)

const card = document.querySelector('#results')
card.innerHTML =
    `<p>Your name is ${myInfo.get("first")} ${myInfo.get("last")}</p>
    <p>Your phone is ${myInfo.get("phoneNumber")}. Your email is ${myInfo.get("userEmail")} </p>
    <p>Your company Name is:${myInfo.get("businessName")}. Your Organizational Title:${myInfo.get("organizationTitle")} </p> 
    <p>Membership level selected: ${myInfo.get("memberships")}</p>
    <p>Aditional information: ${myInfo.get("description")}</p> `


