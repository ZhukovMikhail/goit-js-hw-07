const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

const onInputChange = function(event) {
    event.preventDefault();
    if (event.currentTarget.value === ''){
    return nameOutput.textContent = 'незнакомец'}
    return nameOutput.textContent = event.currentTarget.value};
    
nameInput.addEventListener('change', onInputChange)

