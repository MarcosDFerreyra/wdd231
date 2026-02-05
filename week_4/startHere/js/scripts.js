const getString = window.location.search;
console.log(getString);

const myInfo = new URLSearchParams(getString);
console.log(myInfo)

const card = document.querySelector('#results')
card.innerHTML =
    `<p>The name is ${myInfo.get("first")} ${myInfo.get("last")}</p>
    <p>Proxy ${myInfo.get("ordinance")} on ${myInfo.get("date")} in the ${myInfo.get("location")} temple</p>
    <p>Your phone is ${myInfo.get("phone")}</p>
    <p> Your email is ${myInfo.get("email")} </p>`

