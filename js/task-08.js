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

controls.innerHTML ='<h1>Могу списать, но не буду. До конца дня решу сам!</h1>';
