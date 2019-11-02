function find_factors(factor_number) {
  var factorsArray = [];
  for(var number = factor_number; 0 < number; number--) {
    if(factor_number % number === 0) {
      factorsArray.push(number);
    }
  }
  return factorsArray.reverse();
}

find_factors(10);