// ## Fitting words

// Build a function that takes in a string and an array of strings. The function should output an array of strings that contain the same letters as the single input string.

// - Write a function that takes two parameters
// 	- Parameter 1 - A string
// 	- Parameter 2 - An array of strings
// - The function should output all the words from the input array (parameter 2) that have the same letters as the first parameter.  IE 'cat' has 'c','a', and 't', and all words that have 'c','a', and 't' will be included.
// - Example:
// 	- `var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];`
// 	- `fittingWords('cat', myArray);`
// 	- Output - `['cat','caterpillar','accurate','cactus']`

//using for loop
function fittingWords(string, array) {
  var letterArray = string.split('');
  var wordArray = [];
  for (var j = 0; j < array.length; j++) {
    var i = 0
    var counter = 0;
    while (i < letterArray.length) {
      if (array[j].includes(letterArray[i])){
        counter++;
      }
      i++
    }
    if (counter === letterArray.length) {
      wordArray.push(array[j]);
    }
  }
  return wordArray;
}

var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];
fittingWords('cat', myArray);


//using forEach
function fittingWords(string, array) {
  var letterArray = string.split('');
  var wordArray = [];
  array.forEach(element => {
    var i = 0
    var counter = 0;
    while (i < letterArray.length) {
      if (element.includes(letterArray[i])){
        counter++;
      }
      i++
    }
    if (counter === letterArray.length) {
      wordArray.push(element);
    }
  });
  return wordArray;
}

var myArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];
fittingWords('cat', myArray);