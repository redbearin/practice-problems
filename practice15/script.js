function numeric_toggles(num) {
  var numbersArray = [];
  for (var firstNumber = num; firstNumber < num + 4; firstNumber++) {
    if (firstNumber % 2 === 0) {
      for (var incrementer = 0; incrementer < 2; incrementer++) {
        numbersArray.push (firstNumber * (firstNumber + incrementer));
      }
    } else {
      for (var incrementer = 0; incrementer < 2; incrementer++) {
        numbersArray.push (-firstNumber * (firstNumber + incrementer));
      }
    }
  }
  return numbersArray;
}

numeric_toggles(2);