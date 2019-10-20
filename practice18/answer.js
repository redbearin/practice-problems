function toTruncDecimal(num, fixed) {
  var regEx = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
  return parseFloat(num.toString().match(regEx)[0]);
}

function sumNumbers(input_array, outerIndex, innerIndex, average_size) {
  var sumOfNumbers = 0;
  for (var index = outerIndex; index < outerIndex + average_size; index++) {
    for (var index2 = innerIndex; index2 < innerIndex + average_size; index2++) { 
      sumOfNumbers += input_array[index][index2];
    }
  } 
  return sumOfNumbers;
}

function placeNumbersInArray(input_array, outerIndex, innerIndex, average_size, truncAvg) {
  for (var index = outerIndex; index < outerIndex + average_size; index++) {
    for (var index2 = innerIndex; index2 < innerIndex + average_size; index2++) {
      input_array[index][index2] = truncAvg;
    }
  }
  return input_array;
}

function average_array(input_array, average_size) {
  var divisor = Math.pow(average_size, 2);
  for (var outerIndex = 0; outerIndex < input_array.length - 1; outerIndex += average_size){
    for (var innerIndex = 0; innerIndex < input_array[0].length-1; innerIndex += average_size) {
      var sumOfNumbers = sumNumbers(input_array, outerIndex, innerIndex, average_size);
      var average = sumOfNumbers / divisor;
      var truncAvg = toTruncDecimal(average, 1);  
      var newArray = placeNumbersInArray(input_array, outerIndex, innerIndex, average_size, truncAvg);
    }
  }   
  return newArray;
}


average_array([
	[1, 1, 4, 7, 8, 3, 6, 9, 5, 8],
	[0, 4, 3, 3, 2, 3, 1, 5, 8, 1],
	[5, 8, 5, 1, 1, 8, 0, 7, 4, 1],
	[6, 3, 9, 1, 3, 8, 1, 6, 1, 6]
], 2);