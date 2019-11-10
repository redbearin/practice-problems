
function longestCommonString(str1, str2) {
  var commonString = '';
  for(var str1Index = 0; str1Index < str1.length; str1Index++){
    for(var str2Index = 0; str2Index < str2.length; str2Index++){   
      if (str1[str1Index] === str2[str2Index]){
        commonString += str2[str2Index];
        break;
      }
    }
  }
  return commonString;
}

var str1 = 'abcdefg';
var str2 = 'abc';
longestCommonString(str1, str2);

var str3 = 'abdefghij';
var str4 = 'abefgh'; 
longestCommonString(str3, str4);