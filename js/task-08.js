const refs = {
  input: document.querySelector('#controls input'),
  Renderbtn: document.querySelector('#controls button[data-action="render"]'),
  Destroybtn: document.querySelector('#controls button[data-action="destroy"]'),
  boxContainer: document.getElementById('boxes'),
};

refs.Renderbtn.addEventListener('click', createBoxes);
refs.Destroybtn.addEventListener('click', destroyBoxes);

function createBoxes() {
  const number = refs.input.value;
  const arrayBoxes = [];
  for (let i = 0; i < number; i += 1) {
    const box = document.createElement('div');
    box.style.backgroundColor =
      '#' + (Math.random().toString(16) + '000000').substring(2, 8);
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.margin = '5px';
    box.style.borderRadius = '20%';
    box.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.50)';
    arrayBoxes.push(box);
  }
  refs.boxContainer.append(...arrayBoxes);
  refs.boxContainer.style.display = 'flex';
}

function destroyBoxes() {
  refs.boxContainer.innerHTML = '';
  refs.input.value = '';
}
