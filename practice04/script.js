// ## Sort

// Build a function that takes in an array of strings and outputs a new array with the same strings in alphabetical order. 

// - Write a function that takes one parameter
// 	- Parameter 1 - An Array of strings
// - The function should output an array containing all the strings from the input array but in alphabetical order
// - Example:
// 	-`var myArray = ['mouse', 'cat', 'dog', 'human'];`
// 	- `sort(myArray);`
// 	- Output - `['cat', 'dog', 'human', 'mouse']`
//Try doing this using a **Bubble Sort**, if you are unsure what that is <a href="https://www.google.com" target="_blank">Click Here</a>

animalArray = ['mouse', 'cat', 'dog', 'human', 'mammoth'];

function sortWithMethods(arr) {
  arr.sort(function(a, b) {
    return a - b;
  })
}

sortWithMethods(animalArray);

function bubbleSort(arr) {
  //set the array length
  var length = arr.length;
  //while length is not falsy
  while (length) {
    for(var index = 0; index < arr.length; index++){
      if (arr[index] > arr[index+1]) {
        var temp = arr[index];
        arr[index] = arr[index + 1];
        arr[index + 1] = temp;
      }
    }
    length--;
  }
  return arr;
}


bubbleSort(animalArray);
