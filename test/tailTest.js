const assertEqual = require('../assertEqual');
const head = require('../head');
const tail = require('../tail');







// Test Case: Check the original array
const words = ["Yo Yo"];
tail(words);
assertEqual(words.length, 3);
assertEqual(["Yo Yo"], tail(["Yo Yo"]));
assertEqual(["Yo Yo", "Lighthouse", "Labs"], tail(["Yo Yo", "Lighthouse", "Labs"]));

module.exports = tail;