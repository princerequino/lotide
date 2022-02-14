const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');

// console.log(middle([1]));
// console.log((middle([1, 2, 3, 4, 5])));
// console.log(middle([1, 2, 3, 4, 5, 6]));
// console.log(middle([1, 2, 3, 4, 5, 6, 10, 26, 24, 23]));
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 10, 26, 24, 23, 10, 12, 15]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 10, 26, 24, 23, 10]), [6]);