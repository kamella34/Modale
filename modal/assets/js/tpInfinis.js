
let cookie = document.querySelector(".cookie");
let letter = document.querySelector(".letter");
let iconeConnect = document.querySelector(".img-connect")


let closeModal = document.querySelector(".close-modal");
let crossLetter = document.querySelector(".cross-letter");
let crossModal3 = document.querySelector(".cross-modal3")

let modalContainer = document.querySelector(".modal-container");
let modal = document.querySelector(".modal");
let modal2 = document.querySelector(".modal2");
let modal3= document.querySelector(".modal3");

let lettrage =document.querySelector(".lettrage-vertical")

let overlay = document.querySelector(".overlay");


cookie.addEventListener("click", function () {
    modal.classList.remove("d-none");
    modalContainer.classList.remove("d-none");
    lettrage.classList.add("d-none");
});

closeModal.addEventListener("click", function () {
    modal.classList.add("d-none");
    modalContainer.classList.add("d-none");
    lettrage.classList.remove("d-none");
});

modal.addEventListener("click", function  (event) {
    event.stopPropagation();
})

overlay.addEventListener("click", function () {
    modal.classList.add("d-none");
    modalContainer.classList.add("d-none");
    lettrage.classList.remove("d-none");
})




letter.addEventListener("click", function () {
    modal2.classList.remove("d-none");
    modalContainer.classList.remove("d-none");
    lettrage.classList.add("d-none");
});

crossLetter.addEventListener("click", function () {
    modal2.classList.add("d-none");
    modalContainer.classList.add("d-none");
    lettrage.classList.remove("d-none");
});

modal2.addEventListener("click", function  (event) {
    event.stopPropagation();
})

overlay.addEventListener("click", function () {
    modal2.classList.add("d-none");
    modalContainer.classList.add("d-none"); 
    lettrage.classList.remove("d-none");
})





iconeConnect.addEventListener("click", function () {
    modal3.classList.remove("d-none");
    modalContainer.classList.remove("d-none");
    lettrage.classList.add("d-none");
});

crossModal3.addEventListener("click", function () {
    modal3.classList.add("d-none");
    modalContainer.classList.add("d-none");
    lettrage.classList.remove("d-none");
});

overlay.addEventListener("click", function () {
    modal3.classList.add("d-none");
    modalContainer.classList.add("d-none"); 
    lettrage.classList.remove("d-none");
})

modal3.addEventListener("click", function  (event) {
    event.stopPropagation();
})

