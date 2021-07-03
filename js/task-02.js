const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

// const item1 = document.createElement('li');
// item1.textContent = ingredients[0];

// const item2 = document.createElement('li');
// item2.textContent = ingredients[1];

// const item3 = document.createElement('li');
// item3.textContent = ingredients[2];

// const item4 = document.createElement('li');
// item4.textContent = ingredients[3];

// const item5 = document.createElement('li');
// item5.textContent = ingredients[4];

// const item6 = document.createElement('li');
// item6.textContent = ingredients[5];

const ingredientsEl = document.querySelector('#ingredients');

const listEl = ingredients.map(el => {
  const listItemtEl = document.createElement('li');
  listItemtEl.textContent = `${el}`;
  return listItemtEl;
});
// console.log(listEl);
ingredientsEl.append(...listEl);
