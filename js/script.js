console.log("Praca domowa tydzień trzeci");

let przycisk = document.querySelector(".button");
let table = document.querySelector(".table__caption");

przycisk.addEventListener("click", () => {
    table.remove();
});