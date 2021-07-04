const controls = document.querySelector('#controls');
const input = document.querySelector('#controls input');
const boxes = document.querySelector('#boxes');
const renderBtn = document.querySelector(
  '#controls button[data-action="render"]',
);
const destroyBtn = document.querySelector(
  '#controls button[data-action = "destroy"]',
);

// renderBtn.addEventListener('click', createDivHendler);
// renderBtn.addEventListener('click', destroyDivHendler);

// function createDivHendler() {
//   boxes.append(elements)
// }

// function destroyDivHendler () {
//   boxes.innerHTML('')
// }
const title = document.createElement('h2')
title.textContent = 'Могу списать, но не буду. Хочу решить сам!';
title.style.color = 'red';
title.style.backgroundColor = 'teal';

controls.prepend(title);


controls.insertAdjacentHTML('beforebegin', 'До конца дня решу!')
