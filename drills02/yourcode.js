
//COUNT OCCURANCES 
// - given an array of words and a separate word, count how many times a particular word given occurs within that array for example:
// - input ['dog','cat','dog','pig','canary','cat','dog'], 'dog' 
// - returns 3

function countOccurences(array, word){
  count = 0;
  array.forEach(element =>{
    if (element === word){
      count++;
    }
  })
  return count;
}

//WORD LENGTHS
// 	- given an array of words, return an array of numbers representing the length of each word For example: 
// 	- input ['canary','silly','dog','a','mellow']) 
// 	- return [6,5,3,1,6]

function wordLengths(array){
  var letterCountArray = [];
  array.forEach(element => {
    letterCountArray.push(element.length);
  })
  return letterCountArray
}

// MIN, MAX, MEAN
//given an array of numbers, get the minimum, maximum, and mean numbers. Return them as an object. Mean is another word for average For example:
// 	- input [3,1,9,12,4] 
// 	- return: {min: 1, max: 12, mean: 5.8}

function getMinMaxMean(array){
  var obj = {};
  var sum = 0;
  //sum array elements
  array.forEach(element => sum += element);

  //calculate mean
  var avg = sum/array.length;

   //sort the array low to high
  var sortedArray = array.sort((a, b) => {
    return a-b;
  });

  //take off first element sorted array for min
  //add property to object
  obj.min = sortedArray.shift();

  //take off last element sorted array for max
    //add property to object
  obj.max = sortedArray.pop();

  //add mean property to object
  obj.mean = avg;

  return obj;
}

// - findMode: Given an array of numbers, find the number that occurs the most often for example: 
// 	- input [5,2,7,18,2,42,5,2] 
// 	- returns 2, since it occurs 3 times. If 2 numbers occur the same amount, return the last one
function findMode(array){

  var countNumbers = {};

  //for each number in array add to countNumbers object
  array.forEach (currentNumber => {
    //no count for this number, increment count
    if (countNumbers[currentNumber] === undefined) {
      countNumbers[currentNumber] = 1;
    } else { //number has a count, increment count
      countNumbers[currentNumber]++;
    }
  })

  //create an array of the numbers and counts
  //https://stackoverflow.com/questions/38824349/how-to-convert-an-object-to-an-array-of-key-value-pairs-in-javascript
  var countArray = Object.keys(countNumbers).map(function (key) {
    return [Number(key), countNumbers[key]];
  });

  //cycle through array and find numbers with biggest counts
  //if two are the same save the second number
  //holds biggest count
  var holdNumberCount = 0;
  //hold name of the number with biggest count
  var holdNumber = 0;
  for (var i = 0; i < countArray.length; i++){
    //if the number count is greater than count currently stored, save this number name and count 
    if(countArray[i][1] >= holdNumberCount) {
      holdNumberCount = countArray[i][1]
      holdNumber = countArray[i][0];
    }
  }
  //return the number with the highest count
  return holdNumber;
}

findMode([5,2,7,18,2,42,5,2]);

//a much more direct way to solve the problem.
//Courtesy of Dan Pascal.
// 'use strict';

// var prizeInformation = {
//   'gold': 200,
//   'silver': 100,
//   'bronze': 50
// }

// var total = prizeInformation.gold + prizeInformation.silver + prizeInformation.bronze;

// var sum = 0;

// for (var key in prizeInformation) {
//   sum += prizeInformation[key];
// }

// var biggestKey;
// var biggestValue = -Infinity;
// for(var key in prizeInformation) {
//   var currentValue = prizeInformation [key];
//   if(biggestValue < currentValue) {
//     biggestKey = key;
//   }
//   biggestValue = prizeInformation[biggestKey];
// }

// console.log(sum);
// console.log(total);
// console.log(biggestKey);