'use strict'

const cart = {
  items: [],
  count: 0,

  get totalPrice() {
    return this.calculateItemPrice();
  },

  set totalPrice(value) {
    this._totalPrice = value;
  },

  add(productTitle, productPrice, productQuantity = 1) {
    this.items.push({ productTitle, productPrice, productQuantity });
    this.increaseCount(productQuantity);
  },

  increaseCount(number = 1) {
    this.count += number;
  },

  calculateItemPrice() {
    return this.items.reduce((acc, current) => acc + current['productPrice'], 0 );
  },

  clear() {
    this.items = [];
    this.totalPrice = 0;
    this.count = 0;
  },

  print() {
    console.log(`Все товары: ${JSON.stringify(this.items)}`);
    console.log(`Общая стоимость товаров: ${this.totalPrice} спичек`);
  },
}

cart.add('Носки', 1000, 2);
cart.add('Футболка', 1500);
cart.add('Штаны', 1375);

console.log(cart.print());