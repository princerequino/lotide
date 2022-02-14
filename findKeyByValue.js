const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};
// takes in object and a value.
// loop through the object to find the "key" and then returns the "value" of the "key".
//use objects.key


const findKeyByValue = function(object, value){
  const genres = Object.keys(object);
  
  //loop through the keys
  for (const key of genres) { 
    console.log(key)
    if (object[key] === value) {
      return key;
    }
  }
return undefined;
};

// bestTVShowsByGenre['comedy'] 

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);