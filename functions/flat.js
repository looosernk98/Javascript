/*Array.prototype.flat() method that creates a new array with all the elements of the subarrays concatenated to it recursively up to a specified depth.
 The depth parameter specifies how deep the method flats the array structure. It defaults to 1
 */

 const numbers = [1, 2, [3, 4, 5]];
const flatNumbers = numbers.flat();

console.log(flatNumbers);  //[1, 2, 3, 4, 5]


const number = [1, 2, [3, 4, 5, [6, 7]]];
const flatNumber = number.flat(2);

console.log(flatNumber);   // [1, 2, 3, 4, 5, 6, 7]

// When you don’t know the depth level, you can pass the Infinity into the flat() method to recursively concatenate all elements of the sub-arrays into the new array:
const nums = [1, 2, [3, 4, 5, [6, 7, [8, 9]]]];
const flatNums = nums.flat(Infinity);

console.log(flatNums);

//If an array has empty slots, you can use the flat() method to remove the holes, like this:

const num = [1, 2, , , 4, , 5];
const sequence = num.flat();

console.log(sequence);  //[ 1, 2, 4, 5 ]