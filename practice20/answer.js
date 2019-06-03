// ## randomize array

// Create a function, randomize_list(), that takes an array and ranzomizes the order, without resorting to the use of any pre-existing array methods.

// #### Input: 
// - input_array: an array of anything

// #### Output: 
// - output_array, the original array, randomly arranged

// #### Example:
// <pre>
// var input_array = 
// [5,3,2,5,1]</pre>

// output = randomize_list(input_array);
// console.log(output); //outputs 
// <pre>[3,1,5,5,2]</pre>
// console.log(randomize_list(input_array)); //outputs 
// <pre>[1,3,5,2,5]</pre>

//using a function
function arrayShuffle(input) {
  for (var i = input.length-1; i >=0; i--) {
   
      var randomIndex = Math.floor(Math.random()*(i+1)); 
      var itemAtIndex = input[randomIndex]; 
       
      input[randomIndex] = input[i]; 
      input[i] = itemAtIndex;
  }
  return input;
}

var incomingArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];

arrayShuffle(incomingArray);