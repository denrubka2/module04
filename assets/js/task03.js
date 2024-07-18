'use strict';

const calculate = (cartAmount, cartQuantity, promocode) => {
  let totalPrice = cartAmount;

  if(cartQuantity > 10) {
    totalPrice -= (totalPrice / 100 * 3);
  }

  if(cartAmount > 30000) {
    totalPrice -= (cartAmount - 30000) / 100 * 15;
  }

  if(promocode === 'METHED') {
    totalPrice -= totalPrice / 100 * 10;
  }

  if(promocode === 'G3H2Z1' && totalPrice > 2000) {
    totalPrice -= 500;
  }

  return totalPrice;
}

console.log(calculate(32000, 11, 'G3H2Z1'));