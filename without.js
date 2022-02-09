// const eqArrays = function(array1, array2) {
//   for (let i = 0; i < array1.length; i++) {
//     if (array1[i] !== array2[i] || array1.length !== array2.length) {
//       return false;
//     }
//   }
//   return true;
// };



// //assertArraysEqual function

// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2) === true){
//     console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
//   }else {
//     console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// }

// const without = function (source, itemsToRemove) {
//   let newArray = []
//   for (let i = 0; i < source.length; i++) {
//     if (source[i] !== itemsToRemove[i]) {
//       newArray.push(source[i])
//     }
//   }
//   return newArray
// }



const without = function(source, itemsToRemove) {
  let newArray = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArray.push(source[i]);
    }
  }
  return newArray;
};




//compare [source] and [itemstoremove]
// use items to remove as the critera to search through source



console.log(without([1, 2, 3], [1]));
console.log(without(["1", "2", "3", 3, "happy", "orange", 5], [1, 2, "3", "5", "sad", ]));







//Test Code for eqArrays
// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
// console.log(eqArrays([1, 2, 3], [3, 2, 1]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));


//Test Code for assertArraysEqual
// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 4]);