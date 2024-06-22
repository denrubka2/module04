'use strict';

const getProductData = () => {
  const productName = prompt('Введите название товара');
  const productQuantity = +prompt('Введите количество товара');
  const productCategory = prompt('Введите категорию товара');
  const productPrice = +prompt('Введите цену товара');
  const totalProductPrice = productQuantity * productPrice;

  if(!isNaN(productQuantity) || !isNaN(productPrice)) {
    console.log(`На складе ${productQuantity} единицы товара "${productName}" на сумму ${totalProductPrice} золотых`);
  } else {
    console.log('Вы ввели некорректные данные');
  }

}

getProductData();