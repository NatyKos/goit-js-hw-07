function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const btn = document.querySelector('.change-color');
function clickHandler(event) {
  event.preventDefault();
  const color = document.querySelector('.color');
  body.style.backgroundColor = getRandomHexColor();
  color.innerText = `${body.style.backgroundColor}`
}
btn.addEventListener('click', clickHandler);