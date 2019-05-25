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

//using nested for loops
function fittingWords(string, array) {
  var letterArray = string.split('');
  var wordArray = [];
  for (var outer = 0; outer < array.length; outer++) {
    var counter = 0;
    for (var inner = 0; inner < array.length; inner++) {
      if (array[outer].includes(letterArray[inner])){
        counter++;
      }
    }
    if (counter === letterArray.length) {
      wordArray.push(array[outer]);
    }
  }
return wordArray;
}

var firstWordArray = ['cat','caterpillar','whale','accurate','smile','cactus','cute'];
fittingWords('cat', firstWordArray);


//using forEach
function fittingWords2(string, array) {
  var letterArray = string.split('');
  var wordArray = [];
  array.forEach(element => {
    var counter = 0;
    for (var index =0; index < letterArray.length; index++) {
      if (element.includes(letterArray[index])){
        counter++;
      }
    }
    if (counter === letterArray.length) {
      wordArray.push(element);
    }
  });
  return wordArray;
}

var secondWordArray = ['went','wheel','whale','flew','green','cactus','grew'];
fittingWords2('we', secondWordArray);