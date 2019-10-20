function skippy_numbers(num) {
  var array = [];
  array[0] = num;
  for (var index = 0; index < 7; index++) {
    if (index % 2 === 0) {
      array[index + 1] = array[index] + 1
    } else {
      array[index + 1] = array[index] + 2;
    }
  }
  return array;
}

skippy_numbers(2);