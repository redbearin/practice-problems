'use strict';

function do_math(num1, num2, operator) {
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  if (operator === '*') {
    return num1 * num2;
  }
  if (operator === '/') {
    return num1 / num2;
  }
}

do_math(2, 3, '*');