// ## One to Multi

// Build a function that sorts an array into a multidimensional array grouped by data type

// - Write a function that takes one parameter 
// 	- Parameter 1 - An array of anything
// - The function should output a multidimensional array grouped by data type
// - Example: 
// 	- `var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];`
// 	- `groupArray(myArray);`
// 	- Output - `[['hello, 'goodbye', '25'], [34, 56, 12], [true, false, true]]`

function groupArray(array) {
  var numberArray = [];
  var booleanArray = [];
  var stringArray = [];
  var newArray = [];
  array.forEach(element => {
    if (typeof element === 'string' ) {
      stringArray.push(element);
    }
      if (typeof element === 'number' ) {
      numberArray.push(element);
    }
    if (typeof element === 'boolean' ) {
      booleanArray.push(element);
    }
  })
  newArray.push(stringArray);
  newArray.push(numberArray);
  newArray.push(booleanArray);
  return newArray;
}

var myArray = ['hello', 34, true, false, 'goodbye', 56, 12, '25', true];
groupArray(myArray);