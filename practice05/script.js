// ## FizzBuzz

// Build a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// - Write a function that takes no parameters
// - The function should output the numbers 1 through 100, following the rules from above


//Note: The list could also be returned in an array.

function fizzBuzz(){
  fizzBuzzArray = [];
  for(var number = 1; number <= 100; number++){
    if (number % 15 === 0) {
      fizzBuzzArray.push('FizzBuzz');
    } else if (number % 3 === 0) {
      fizzBuzzArray.push('Fizz');
    } else if (number % 5 === 0) {
      fizzBuzzArray.push('Buzz')
    } else {
      fizzBuzzArray.push(number);
    }
  }
  return fizzBuzzArray;
}

fizzBuzz();