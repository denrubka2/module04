'use strict';

const rectangle = {
  _width: 5,
  _height: 5,

  get perimetr() {
    return `${this._width * 2 + this._height * 2}см`;
  },

  get area() {
    return `${this._width * this._height}см`;
  },

  set width(value) {
    if (!isNaN(Number(value))) {
      this._width = value;
    }
  },

  set height(value) {
    if (!isNaN(Number(value))) {
      this._height = value;
    }
  },
};
