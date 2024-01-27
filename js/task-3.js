const username = document.getElementById('name-input');
function inputHandler(event) {
    const text = document.getElementById('name-output');
    if (event.target.value.trim() !== '') {
    text.textContent = event.target.value.trim();
   } else {
    text.textContent = 'Anonymous';
   }
}
username.addEventListener('input', inputHandler);