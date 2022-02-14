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

// take out the spaces
// loop the sentence
// print them all individually
// have a results object and have an array if there's nothing

const letterPositions = function (sentence) {
  const results = {};
  // get rid of spaces
  let withoutSpace = sentence.replace(/ /g, "");
  //looping through each letter in the "string"
  for (let i = 0; i < withoutSpace.length; i++) {
    const letter = withoutSpace[i];
    // for each letter, checking if the letter is ALREADY in my results{}, if so... --> i push the letter to the array.
    if (results[letter]) {
      results[letter].push(i);
    } else {
      // if letter is NOT in results --> letter is stored as an array
      results[letter] = [i];
    }
  }
  return results;
};

console.log(letterPositions("hello"));

// console.log(assertArraysEqual(letterPositions("hello")));

// assertArraysEqual(letterPositions("hello").e, [1]);
