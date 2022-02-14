//Compare 2 Arrays
const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i] || array1.length !== array2.length) {
      return false;
    }
  }
  return true;
};

//assertArraysEqual function

const assertArraysEqual = function (arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`✅✅✅Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${arr1} !== ${arr2}`);
  }
};

//implementing middle to take in an ARRAY and return the middle-most-element(s)

const middle = function (arrayMid) {
  let middleValues = [];
  if (arrayMid.length < 3) {
    return middleValues;
  }else if (arrayMid.length % 2 === 0){ //IF EVEN NUMER
    middleValues.push(arrayMid[(arrayMid.length / 2) - 1]);
    middleValues.push(arrayMid[(arrayMid.length / 2)]);
  }else { //IF ODD NUMBER
    middleValues.push(arrayMid[((arrayMid.length -1) / 2)])
  }
return middleValues;
  };


// console.log(middle([1]));
// console.log((middle([1, 2, 3, 4, 5])));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2, 3, 4, 5, 6, 10, 26, 24, 23]));
// console.log(middle([1, 2, 3, 4, 5, 6, 10, 26, 24, 23, 10, 12, 15]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 10, 26, 24, 23, 10]), [6]);