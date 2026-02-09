import { memberships } from "./data.mjs";

const buttons = document.querySelectorAll('.openButton');
const dialogs = document.querySelectorAll('.mydialog');

buttons.forEach((button, index) => {
    const dialog = dialogs[index];
    const title = dialog.querySelector('h2');
    const close = dialog.querySelector('button');
    const price = dialog.querySelector('p');
    const benefits = dialog.querySelector('ul');


    close.addEventListener('click', () => dialog.close());

    button.addEventListener('click', () => {
        showStuff(
            memberships[index],
            dialog,
            title,
            price,
            benefits
        );
    });
});

function showStuff(x, dialog, title, price, benefits) {
    title.innerHTML = x.name;
    price.innerHTML = `Price: ${x.price}`;
    benefits.innerHTML = `
        <li>${x.benefit1}</li>
        <li>${x.benefit2}</li>
        <li>${x.benefit3}</li>
        <li>${x.benefit4}</li>
    `;
    dialog.showModal();
}


