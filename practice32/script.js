'use strict';

// ## find middle of string

// Build a function, find_middle_letters, that finds the middle of a string.  If the string is an odd number of characters, it returns 1 letter.  If it is an even number of characters, it returns 2 characters.  It takes a string as a parameter


// - Example:
// 	- find_middle_letters('seven')
// 		- Return: 'v'
// 	- find_middle_letters('dish')
// 		- Return: 'is'

function find_middle_letters(string){
  if (string.length % 2 === 0) {
    var evenIndex2 = string.length /2;
    var evenIndex1 = evenIndex2 - 1;
    return string.charAt(evenIndex1) + string.charAt(evenIndex2);
  } else {
    var oddIndex = Math.floor(string.length /2);
    return string.charAt(oddIndex);
  }
}

find_middle_letters('seven');




