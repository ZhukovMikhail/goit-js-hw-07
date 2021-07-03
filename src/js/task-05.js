const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

function onInputChange(event) {
  // event.preventDefault();
  if (event.currentTarget.value === '') {
    return (nameOutput.textContent = 'незнакомец');
  }
  // console.log(event);
  return (nameOutput.textContent = event.currentTarget.value);
}

nameInput.addEventListener('input', onInputChange);
