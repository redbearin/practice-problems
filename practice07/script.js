// ## Igpay Atinlay

// Build a function that will translate text into "Pig Latin" Take the first consonant and move it to the end of a word and then affix "ay" to the end of that word."

// - Write a function that takes one parameter
// 	- Parameter 1 - A string
// - The function should output your input string translated into Pig Latin
// 	- Example: 
// 		- `var myString = "Hello my name is Stu"`
// 		- `translate(myString);
// 		- Output - `"ellohay ymay ameya siay tusay"`

// #### Making it better!

// - There are several more rules to Pig Latin, try incorporating as many as you can into your function.
// 	- There are different rules for words that start with vowel sounds or silent letters for example.
// 	- <a href="http://en.wikipedia.org/wiki/Pig_Latin">Here</a> is a link to an explanation of all the rules.
// - Also try maintaining capitalization of words that are capitalized in your input string.
// 	- Example: 
// 		- `"Hello there"` would be `"Ellohay heretay"`

// This function handles the harder solution
function translatePigLatin(string) {
  //split the words into separate array items
  var wordArray = string.split(' ');

  //isolate first word, first letter after Pig Latin applied
  //make it a capital letter
  var firstLetter = wordArray[0].slice(1,2).toUpperCase();

  var newWord = '';
  var newArray = [];

  for (var i = 0; i < wordArray.length; i++){
    var word = wordArray[i];
    //first word (first letter of new word a capital letter)
    if (i === 0) {
      newWord = firstLetter + word.slice(2) + word[0].toLowerCase() + 'ay';
      newArray.push(newWord);
      //rest of words (first word lowercase)
    } else {
      newWord = word.slice(1) + word[0] + 'ay';
      newArray.push(newWord);
    }
  }
  //join the array words back together with a space
  return newArray.join(' ');
}

translatePigLatin('Today the grass grew');