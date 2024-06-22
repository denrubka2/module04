'use strict';

const getProductData = () => {
  const productName = prompt('Введите название товара');
  const productQuantity = Number(prompt('Введите количество товара'));
  const productCategory = prompt('Введите категорию товара');
  const productPrice = Number(prompt('Введите цену товара'));

  console.log(`На складе ${productQuantity} единицы товара "${productName}" на сумму ${productQuantity * productPrice} золотых`);
}

getProductData();