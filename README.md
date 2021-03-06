# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @princerequino/lotide`

**Require it:**

`const _ = require('@princerequino/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: Checks to see if arrays are equal
* `assertEqual`: simple equals test, input your results and your expected
* `countLetters`: returns a count of all letters in a string
* `countOnly`: counts how many times a name appears in an object
* `eqArrays`: Similar to assertArraysEqual, without the assertion
* `eqObjects`: Checks two objects equality
* `eqObjectsRec`: Same as function above just with recursion
* `eqRecArrays`.js: Equal arrays comparison with recursion
* `findKey`: Finds a key in an array
* `findKeyByValue`: Same as above, just given a value
* `head`: returns the first element of an array
* `letterPositions`: returns the indecies of all letters in an array
* `map`: take an array of words and returns an array with all their first letter
* `middle`: returns an array of all middle values in an array
* `piglatin`: takes in a string and converts it to pig latin.