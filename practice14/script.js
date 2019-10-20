function arrayFactors(array) {
  var object = {};
  let uniqueArray = [...new Set(array)];
  for(var index = 0; index < uniqueArray.length; index++) {
    var tempArray = [];
    for(var index2 = 0; index2 < uniqueArray.length; index2++) {
      if (index2 !== index && uniqueArray[index] % uniqueArray[index2] === 0) {
        tempArray.push(uniqueArray[index2]);
      }
    }
    object[uniqueArray[index]] = tempArray;
  }
  return object;
}

arrayFactors([4,2,8,6,3,9,4]);