// ## FizzBuzz

// Build a function that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

// - Write a function that takes no parameters
// - The function should output the numbers 1 through 100, following the rules from above


//Note: The list could also be returned in an array.

function fizzBuzz(){
  for(var i = 1; i <= 100; i++){
    if (i % 15 === 0) {
      console.log('FizzBuzz');
    } else if (i%3 === 0) {
      console.log('Fizz');
    } else if (i % 5 === 0) {
      console.log('Buzz')
    } else {
      console.log(i);
    }
  }
}

fizzBuzz();