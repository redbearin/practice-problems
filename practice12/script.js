// # math_sequence

// Given the following function call:
// - math_sequence(2);

// And the resulting output:
// - [4, 6, 8, 10, 12, 14, 16, 18, 20, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5];

// Another sample:
// - math_sequence(5);

// Resulting output: 
// - [10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 42];

// Create a function definition that achieves the output with the given input. 

// <a href="https://jsbin.com/hirunic/edit?js,console" target="_blank">Solution Set</a>

//Dan's way
//I wonder how I would have reached this approach without a few more examples
function dans_sequence(number) {
  var array = [];
  var newNumber;
  for(var i = number * 2; i < number + 38; i += 2){
    if(i > number * 10){
      var newNumber = i / 4;
    } else {
      newNumber = i;
    }
    array.push(newNumber);
  }
  return array;
}

math_sequence(5);

//Juliann's more complicated way
function math_sequence(number) {
  var array = [];

  //finds the number for array[0]
  //and assigns it to the 0 index of the array
  startingNumber = number + number;
  array[0] = startingNumber;

  //sets the maximum number
  var maxNumber = number * 10;

  //sets the number in array[1]
  var newNumber = startingNumber + 2;

  //sets the next number after the max is reached
  var newHalfNumber = startingNumber + 1.5;

  //initializes the counter
  var counter = 1;

  //case 1: add numbers to array until max number is reached
  while (newNumber <= maxNumber && counter < 18) {
    array.push(newNumber);
    newNumber = newNumber + 2;
    counter++;
  } 

  //case 2a: max number not reached in 18 entries 
  //case 2b: max number reached on last entry
  if (counter === 18) {
    return array;

  //case 3: max number reached in case 1
  //add numbers to array until 18 entries in .5 increments starting 
  //with newHalfNumber
  } else {
    counter = 18 - counter;
    for(var j = counter; j > 0; j--) {
      array.push(newHalfNumber);  
      newHalfNumber = newHalfNumber + .5
    }
    return array;
  }
}

math_sequence(2);

