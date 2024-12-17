const modal = document.querySelector("#modal");
const button = document.querySelector("#button")
const modalButton = document.querySelector("#modal-button")

function openModal(){
    button.style.display = "none"
    modal.style.display = "block"
}

function closeModal(){
    modal.style.display = "none"
    button.style.display = "flex"
}

// const inputValue = document.querySelector("#inputValue").value;
// console.log(inputValue)