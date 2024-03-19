# Susanmartin

A Node.js module providing utilities for Susanmartin and random trivia retrieval.

## Installation

You can install this module via npm: `npm install susanmartin`

## Usage
```javascript
const fizzbuzzTools = require('fizzbuzz-tools');

// Check if a number is divisible by another number
console.log(fizzbuzzTools.isDivisible(15, 3)); // Output: true

// Generate a fizzbuzz sequence
console.log(fizzbuzzTools.fizzbuzz(15)); // Output: [ '1', '2', 'Fizz', '4', 'Buzz', 'Fizz', '7', '8', 'Fizz', 'Buzz', '11', 'Fizz', '13', '14', 'FizzBuzz' ]

// Fetch a random trivia fact
fizzbuzzTools.getRandomTrivia().then(trivia => console.log(trivia)); // Output: Random trivia fact
```