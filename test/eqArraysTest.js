const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');


// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);

// testing if eqArrays work
eqArrays([1, 2, 3], [1, 2, 3]);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
