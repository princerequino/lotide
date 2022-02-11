
//Compare 2 Arrays
const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }
  }
  return true;
};



//assertArraysEqual function

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true){
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  }else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
}





const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[2]);
const length = map(words, word => word.length);

console.log(results1);
console.log(results2);
console.log(results3);
console.log(length);

assertArraysEqual(length, [6, 7, 2, 5, 3]); 