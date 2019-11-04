function add_arrays(first_array,second_array) {
  let output_array = [];
  for(let index = 0; index < first_array.length; index++) {
    output_array.push(first_array[index] + second_array[index]);
  }
  return output_array;
}

const first_array = [3,-5,15,4];
const second_array = [3,18,-5,-4];
add_arrays(first_array,second_array);