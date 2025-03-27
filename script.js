// 1) creare le celle con i numeri
// 2) creare un generatore di numeri random da 1 a 90
// 3) collegare un button al numero random
// 4) evidenziare la cella corrispondente al numero estratto

const cells = [];
const form = document.getElementById("form");
const button = document.createElement("button");
const buttonReset = document.createElement("button");
button.innerText = "Estrai nuovo numero";
buttonReset.innerText = "Reset";
form.appendChild(button);
form.appendChild(buttonReset);
console.log(cells);

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

const createRandomNumber = function () {
  const randomNumber = Math.floor(Math.random() * 90);
  return randomNumber;
};

button.onclick = function (e) {
  e.preventDefault();
  const randomNumber = createRandomNumber();
  const cell = cells[randomNumber];
  console.log(randomNumber);
  cell.classList.add("select");
};
createTable();
