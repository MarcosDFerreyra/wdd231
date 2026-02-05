const openButton1 = document.querySelector('#openButton1')
const openButton2 = document.querySelector('#openButton2')
const openButton3 = document.querySelector('#openButton3')

const dialogBox = document.querySelector('#dialogBox')
const dialogBoxText = document.querySelector('#dialogBox div')
const closeButton = document.querySelector('#closeButton')


openButton1.addEventListener("click", () => {
    dialogBoxText.innerHTML="an apple has 95 calories"
    dialogBox.showModal();
})
openButton2.addEventListener("click", () => {
    dialogBoxText.innerHTML = "an orange has 45 calories"
    dialogBox.showModal();
})
openButton3.addEventListener("click", () => {
    dialogBoxText.innerHTML = "a banana has 105 calories"
    dialogBox.showModal();
})

closeButton.addEventListener("click", () => { w
    dialogBox.close();
})