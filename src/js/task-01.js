const categoriesElements = document.querySelector("#categories");
console.log(`В списке ${categoriesElements.children.length} категории.`);



const result = [...categoriesElements.children].map(element => {
    return [element.children[0].textContent, element.children[1].children.length];
  });
  
  result.forEach(element => {
    console.log('-----------------------------------')
    console.log(`* Категория: ${element[0]}`);
    console.log(`* Количество элементов: ${element[1]}`);
    
  });