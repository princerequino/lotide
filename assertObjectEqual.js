// Returns TRUE if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
// keys1 = Array of KEYS of Object1 // keys2 = ARRAY of KEYS of Object2
const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function (object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (const key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let arrayCheck = eqArrays(object1[key], object2[key]);
      if (!arrayCheck) {
        // if arrayCheck === false                  equivalent*  //console.log(arrayCheck);
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

// assertObjectsEqual == takes in 2 objects and console.log a message.

// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2) === true){
//     console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
//   }else {
//     console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// }

const assertObjectsEqual = function (object1, object2, actual, expected) {
  const inspect = require('util').inspect;

  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${inspect(object1)} === ${inspect(object2)}`);
  }
};


const cd = { c: [1, "2", null], d: "3" };
const dc = { d: "3", c: [1, "2", null] };
assertObjectsEqual(cd, dc, eqObjects(cd, dc), true);

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(cd, dc, eqObjects(ab, ba), true);

const abc = { a: "1", b: "2", c: "3" };
assertObjectsEqual(cd, dc, eqObjects(ab, abc), false);
