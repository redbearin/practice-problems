function matrix_add(array1,array2) {
  let arrayOfSummedArrayElements = [];
  for(let outerIndex = 0; outerIndex < array1.length; outerIndex++) {
    let tempArrayInnerSums = [];
    for (let innerIndex = 0; innerIndex < array1[0].length; innerIndex++) {
      tempArrayInnerSums.push(array1[outerIndex][innerIndex] + array2[outerIndex][innerIndex]);
    }
    arrayOfSummedArrayElements.push(tempArrayInnerSums);
  }
  return arrayOfSummedArrayElements;
}
let array1 = 
[
	[1,2,3],
	[3,4,5],
	[6,7,8]
]
let array2 =
[
	[1,2,3],
	[1,2,3],
	[1,2,3]
]
matrix_add(array1,array2);

