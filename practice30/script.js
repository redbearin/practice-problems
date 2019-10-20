// Build a function, random_range, that takes 2 parameters, start_num and end_num.  

//OPTIONALLY: If start_num is an array instead (and end_num isn't specified), then it returns a random element from the array

// - Example:
// 	- random_range(2,15)
// 	  - returns 7
// 	- random_range(1,100)
// 	  - returns 85
// 	- random_range(['a','b','c','d','e'])
// 	 	- returns 'b'


function random_range(start_num, end_num) {
  if (Array.isArray(start_num)) {
    var index = Math.floor(Math.random() * (start_num.length - 0)) + 0;
    return start_num[index];
  }else {
    return Math.floor(Math.random() * (end_num + 1 - start_num)) + start_num;
  }
}

random_range(['a','b','c','d','e']);