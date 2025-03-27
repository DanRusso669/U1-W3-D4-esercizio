const cells = [];
const form = document.getElementById("form");
const button = document.createElement("button");
const buttonReset = document.createElement("button");
button.innerText = "Estrai nuovo numero";
buttonReset.innerText = "Reset";
form.appendChild(button);
form.appendChild(buttonReset);

const createTable = function () {
  for (let i = 0; i < 90; i++) {
    const tombola = document.getElementById("tombola");
    const cell = document.createElement("div");
    const num = document.createElement("h3");
    num.innerText = i + 1;

    cell.classList.add("cell");
    cell.appendChild(num);
    tombola.appendChild(cell);
    cells.push(cell);
  }
};

console.log(cells);
// FUNZIONE PER NUMERO RANDOM
const createRandomNumber = function () {
  const randomNumber = Math.floor(Math.random() * 90);
  return randomNumber;
};

button.onclick = function (e) {
  e.preventDefault();
  const randomNumber = createRandomNumber();
  const cellaEstratta = cells[randomNumber - 1];
  console.log(randomNumber);
  console.log(cellaEstratta);
  cellaEstratta.classList.add("select");
};

buttonReset.onclick = function (e) {
  e.preventDefault();
  window.location.reload();
};

createTable();
