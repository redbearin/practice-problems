// ## Find the vowels

// - given a string, find all the vowels in the string.  Store them in a new string
// - example:
// 	- parameters: "four score and seven years ago"
// 	- return: "ouoeaeeeaao"


function findVowels(string) {
  var regex = /[aeiou]/gi;
  var vowels = string.match(regex);
  return vowels.join('');
}

findVowels("four score and seven years ago");

