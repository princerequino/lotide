// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = eqArrays;


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
