function countOccurences(array, word){
  var counter = 0;
  array.forEach(element => {
    if (element === word) {
      counter++;
    }
  })
  return counter;
}

function wordLengths(array){
  var lengthArray = [];
  array.forEach(element => {
    lengthArray.push(element.length)
  })
  return lengthArray;
}

function getMinMaxMean(array){
  var numberDetails = {};
  var sum = 0;
  array.forEach(element => {
    sum += element;
  })

  var mean =(sum/array.length);

  var sortedArray = array.sort((a, b) => a - b);

  numberDetails.min = sortedArray.shift();
  numberDetails.max = sortedArray.pop();
  numberDetails.mean = mean;
  return numberDetails;
}

function findMode(array){
  var modeObj = {};
  //intialize the first element to max
  var maxElement = array[0];
  var maxCount = 1;
  for(var i = 0; i < array.length; i++){
    var element = array[i];
    if(modeObj[element] == null) {
      modeObj[element] = 1;
    }
    else {
      modeObj[element]++;
    }
    if(modeObj[element] >= maxCount){
      maxElement = element;
      maxCount = modeObj[element];
    }
  }
  return maxElement;
}
