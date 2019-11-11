function reverse_t9(string) {
  let groupedNumbersArray = [];

  const numberLetterObject = {
    2: 'a', 22: 'b', 222: 'c',
    3: 'd', 33: 'e', 333: 'f',
    4: 'g', 44: 'h', 444: 'i',
    5: 'j', 55: 'k', 555: 'l',
    6: 'm', 66: 'n', 666: 'o',
    7: 'p', 77: 'q', 777: 'r', 7777: 's',
    8: 't', 88: 'u', 888: 'v',
    9: 'w', 99: 'x', 999: 'y', 9999: 'z'
  }

  let tempString = string[0];
  for (let index = 1; index < string.length; index++) {
    if (string[index] === string[index - 1]) {
      tempString += string[index];
      if (index === string.length -1) {
        groupedNumbersArray.push(tempString);
      }
    } else {
      if(index === string.length -1) {
        groupedNumbersArray.push(tempString);
        tempString = '';
        tempString += string[index];
        array.push(tempString);        
      } else {
        groupedNumbersArray.push(tempString);
        tempString = '';
        tempString += string[index];
      }
    }
  }

  groupedNumbersArrayWoSpaces = groupedNumbersArray.filter(element => element !== ' ');

  let phrase = '';
  for (let index = 0; index < groupedNumbersArrayWoSpaces.length; index++) {
    phrase += numberLetterObject[groupedNumbersArrayWoSpaces[index]];
  }

  return phrase;
}


const string1 = '44 444 44666 9 277733 99966688';
const string2 = '44 444 44 22 222';

reverse_t9(string1);