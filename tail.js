// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(input) {
  let newAr = input.slice(1);
  return newAr;
};

// Test Case: Check the original array
const words = ["Yo Yo"];
tail(words);
assertEqual(words.length, 3);
assertEqual(["Yo Yo"], tail(["Yo Yo"]));
assertEqual(["Yo Yo", "Lighthouse", "Labs"], tail(["Yo Yo", "Lighthouse", "Labs"]));

