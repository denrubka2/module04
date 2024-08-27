'use strict';

const cart = {
  items: [],
  count: 0,
  discount: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set setDiscount(promocode) {
    if (promocode === 'METHED') {
      this.discount = 15;
      return;
    }

    if (promocode === 'NEWYEAR') {
      this.discount = 21;
      return;
    }

    this.discount = 0;
  },

  add(productTitle, productPrice, productQuantity = 1) {
    this.items.push({productTitle, productPrice, productQuantity});
    this.increaseCount(productQuantity);
  },

  increaseCount(number = 1) {
    this.count += number;
  },

  calculateItemPrice() {
    const itemsPrice = this.items
        .reduce((acc, current) => acc + current['productPrice'], 0);

    return itemsPrice - (itemsPrice / 100 * this.discount).toFixed(2);
  },

  clear() {
    this.items = [];
    this.count = 0;
  },

  print() {
    console.log(`Все товары: ${JSON.stringify(this.items)}`);
    console.log(`Общая стоимость товаров: ${this.totalPrice} спичек`);
  },
};

cart.add('Носки', 1000, 2);
cart.add('Футболка', 1500);
cart.add('Штаны', 1375);
