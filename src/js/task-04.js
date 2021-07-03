let counterValue = 0;
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');
const textValue = document.querySelector('#value');

function increaseCounterValueHandler() {
  textValue.textContent = counterValue += 1;
}

function decreaseCounterValueHandler() {
  textValue.textContent = counterValue -= 1;
}

incrementBtn.addEventListener('click', increaseCounterValueHandler);
decrementBtn.addEventListener('click', decreaseCounterValueHandler);
