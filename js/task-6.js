function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const input = document.querySelector('input');
const btnCreate = document.querySelector('button[data-create]')
const btnDestroy = document.querySelector('button[data-destroy]')
const boxes = document.getElementById('boxes')

let w = 30;
let h = 30;
function createBoxes(amount) {
const amount = input.target.value;
if (amount >= 1 && amount <= 100) {
  const newDiv = document.createElement('div');
  // newDiv.style.width = `${w}px`;
  // newDiv.style.height = `${h}px`;
  // newDiv.style.color = getRandomHexColor();
  // w += 10;
  // h += 10;
  boxes.append(newDiv);
  }
}
function clickCreate(event) {
  event.preventDefault();
  createBoxes(amount);
}

btnCreate.addEventListener('click', clickCreate)

