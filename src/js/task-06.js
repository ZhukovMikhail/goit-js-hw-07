const input = document.querySelector('#validation-input');
const inputLength = input.getAttribute('data-length');

function onInputBlur() {
  if (input.value.length === +inputLength) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
}

input.addEventListener('blur', onInputBlur);
