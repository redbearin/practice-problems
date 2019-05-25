// ## alternate caps

// - given a string, create a new string with every other letter capitalized
// - example:
// 	- parameters: "amazing"
// 	- return: "aMaZiNg"

function alternate_caps(string) {
  var newString = '';
  for(var i = 0; i < string.length; i++){
    if (i % 2 === 0) {
      newString += string.charAt(i);
    } else {
      newString += string.charAt(i).toUpperCase();
    }
  }
  return newString;
}

alternate_caps("amazing");
