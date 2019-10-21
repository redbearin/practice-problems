function compare(elementA, elementB) {
  const nameA = elementA.name;
  const nameB = elementB.name;
  
  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}


function sortArray(inputArray) {
  return inputArray.sort(compare);
}

const inputArray = [
	{name: 'John', age:42, gender:'M'},
	{name: 'Jack', age:34, gender:'M'},
	{name: 'Michael',age:40, gender: 'M'},
	{name: 'Kendra',age:48, gender:'F'}
];

sortArray(inputArray);




