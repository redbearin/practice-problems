function math_sequences(num1, num2) {
  var equationArray = [];
  var arrayAdd = [num1, '+', num2, '=', num1 + num2];
  equationArray.push(arrayAdd.join(''));
  var arraySub = [num1, '-', num2, '=', num1 - num2];
  equationArray.push(arraySub.join(''));
  var arrayMult = [num1, '*', num2, '=', num1 * num2];
  equationArray.push(arrayMult.join(''));
  var arrayDiv = [num1, '/', num2, '=', num1 / num2];
  equationArray.push(arrayDiv.join(''));
  return equationArray;
}

math_sequences(2, 5);