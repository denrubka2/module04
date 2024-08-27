'use strict';

const rectangle = {
  width: 5,
  height: 5,

  get perimetr() {
    return `${this.width * 2 + this.height * 2}см`;
  },

  get area() {
    return `${this.width * this.height}см`;
  },

  set setWidth(value) {
    if (!isNaN(Number(value))) {
      this.width = value;
    }
  },

  set setHeight(value) {
    if (!isNaN(Number(value))) {
      this.height = value;
    }
  },
};
