
function sumArray(array){
  var sum = 0;
  array.forEach(element => {
    sum += element;
  })
  return sum;
}

function fitWithinVal(array, number){
  var sum = 0;
  newArray = [];
  array.forEach(element => {
    if (sum + element < number) {
      sum += element;
      newArray.push(element);
    } 
  });
  return newArray;
}

function getAllNamesShorterThan(array, number){
  var newArray = [];
  array.forEach(element => {
   if (element.length < number) {
     newArray.push(element);
   }
  })
  return newArray;
}

function makeLabel(obj){
  return obj.greeting + ' ' + obj.givenName +' ' + obj.familyName + '\n' + obj[ 'home address' ].streetNumber + ' ' + obj[ 'home address' ].streetName + '\n' + obj[ 'home address' ].city + ', ' +  obj[ 'home address' ].state  + ' ' + obj[ 'home address' ].zip;
}

// alternate solutions:
// OPTION 1: replace internal content of function with a template literal(only part of it included here): `${obj.greeting} ${obj.givenName} ${obj.familyName}
//OPTION 2: with variables
// function makeLabel(object) {
//   var name = object.greeting + ' ' + object.givenName + ' ' + object.familyName;
//   var streetAddress = object['home address'].streetNumber + ' ' + object['home address'].streetName;
//   var cityStateZip = object['home address'].city + ', ' + object['home address'].state + ' ' + object['home address'].zip; 
//   return name + '\n' + streetAddress + '\n' + cityStateZip;
// }