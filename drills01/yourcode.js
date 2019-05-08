
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
