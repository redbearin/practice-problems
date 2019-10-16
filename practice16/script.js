function factor_of_sequence(num) {
  var outputArray = [];
  var length = (num + 1) * 3 + 1;
  for (var index = 0; index <= length; index++) {
    var combination = index + num; 
    var divisor = num + 1;
    if(combination % divisor === 0 ) {
      outputArray.push(combination);
    } else {
      outputArray.push(0);
    }
  } 
  return outputArray;
}


factor_of_sequence(2);