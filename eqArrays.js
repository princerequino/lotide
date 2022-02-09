// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
//A much-much-much unnecessary longer method

/*const eqArrays = function (array1, array2){
  for (const x in array1) {
    if (Array.isArray(array1[x]) && Array.isArray(array2[x]) && array1[x].length === array2[x].length) {
      if (!(eqArrays(array1[x], array2[x]))) {
        return false;
      }
    } else {
      for (const y in array1) {
        if (array1[y] !== array2[y]) {
          return false;
        }  
        }
      }
    }
    return true;
    };*/

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};





// TEST CODE
//assertEqual("Lighthouse Labs", "Bootcamp");
//assertEqual(1, 1);


console.log(eqArrays([1, 2, 3], [1, 2, 3]));
console.log(eqArrays([1, 2, 3], [3, 2, 1]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"]));
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));

//assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS