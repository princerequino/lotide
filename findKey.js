const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

// loop through keys in object
const findKey = (object, callback) => {
  for (const key in object) {
    //if callback key is the same as object key, return
    if(callback(object[key])) {
      return key;
    }
  }
};

const testing = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}


// testing code
// assertEqual(findKey(testing, x => x.stars === 2), 'noma');
// assertEqual(findKey(testing, x => x.stars === 3), 'Akaleri');
// assertEqual(findKey(testing, x => x.stars === 1), 'Blue Hill');