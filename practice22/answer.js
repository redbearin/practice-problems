function sortArrayOfObjectsByKey(input_array, sort_field) {
  return input_array.sort((a,b) => 
    (a[sort_field] > b[sort_field]) ? 1 : -1);
}

const input_array = [
	{name: 'John', age:42, gender:'M'},
	{name: 'Jack', age:34, gender:'M'},
	{name: 'Michael',age:40, gender: 'M'},
	{name: 'Kendra',age:48, gender:'F'}
]

sortArrayOfObjectsByKey(input_array, 'name');