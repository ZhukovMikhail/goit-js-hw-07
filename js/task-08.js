// Задание 8 - дополнительное, выполнять не обязательно
// Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить, коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число. Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

// <div id="controls">
//   <input type="number" min="0" max="100" step="1" />
//   <button type="button" data-action="render">Создать</button>
//   <button type="button" data-action="destroy">Очистить</button>
// </div>

// <div id="boxes"></div>

const refs = {
  input: document.querySelector('#controls input'),
  Renderbtn: document.querySelector('#controls button[data-action="render"]'),
  Destroybtn: document.querySelector('#controls button[data-action="destroy"]'),
  boxContainer: document.getElementById('boxes'),
};

refs.Renderbtn.addEventListener('click', createBoxes);
refs.Destroybtn.addEventListener('click', destroyBoxes);

let size = 30;

function createBoxes() {
  const number = refs.input.value;
  const arrayBoxes = [];
  console.log(arrayBoxes);

  for (let i = 0; i < number; i += 1) {
    const box = document.createElement('div');
    // refs.boxContainer.innerHTML = '';

    box.style.backgroundColor =
      '#' + (Math.random().toString(16) + '000000').substring(2, 8);

    size += 10;
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.margin = '5px';
    box.style.borderRadius = '20%';
    box.style.boxShadow = '5px 5px 5px rgba(0, 0, 0, 0.50)';

    arrayBoxes.push(box);
  }
  refs.boxContainer.append(...arrayBoxes);
  // refs.boxContainer.style.display = 'flex';
}

function destroyBoxes() {
  size = 30;
  refs.boxContainer.innerHTML = '';
  refs.input.value = '';
}
