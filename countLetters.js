const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(sentence) {
  // To standardize all letters to lower case + take out all spaces
  let newLetters = sentence.toLowerCase().replace(/ /g,"")
  // to hold the new set of "keys" and their "values"
  let letterHolder = {};

//newLetters = i n e e d h e l p
// const letterHolder = {
//   i: 1,
//   n: 1,
//   e: 3,
//   d: 1,
//   h: 1,
//   l: 1,
//   p: 1
// };

// For-Of loop to access every letter in the parameter,
// First IF = if the letters in parameter EXISTS in the letterHolder, add 1 on top of the value. If not, add 1.
  for (const letters of newLetters) {
    if(letterHolder[letters]) {
      letterHolder[letters] += 1;
    }else {
      letterHolder[letters] = 1;
    }
  } //Return letterHolder = so we can get the new "keys" and "values" after running the function.
  return letterHolder
};

console.log(countLetters("LHL"));
 


