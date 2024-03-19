const axios = require('axios');

/**
 * Check if a number is divisible by another number.
 * @param {number} num - The number to check.
 * @param {number} divisor - The divisor to check against.
 * @returns {boolean} - True if num is divisible by divisor, false otherwise.
 */
function isDivisible(num, divisor) {
  return num % divisor === 0;
}

/**
 * Generate a fizzbuzz sequence up to a specified limit.
 * @param {number} limit - The upper limit of the fizzbuzz sequence.
 * @returns {string[]} - Array representing the fizzbuzz sequence.
 */
function fizzbuzz(limit) {
  const sequence = [];
  for (let i = 1; i <= limit; i++) {
    let value = '';
    if (isDivisible(i, 3)) value += 'Fizz';
    if (isDivisible(i, 5)) value += 'Buzz';
    sequence.push(value || i.toString());
  }
  return sequence;
}

/**
 * Fetch a random trivia fact from a web service.
 * @returns {Promise<string>} - A promise resolving to a random trivia fact.
 */
async function getRandomTrivia() {
  try {
    const response = await axios.get('https://uselessfacts.jsph.pl/random.json?language=en');
    return response.data.text;
  } catch (error) {
    console.error('Error fetching trivia:', error.message);
    return 'Failed to fetch trivia.';
  }
}

module.exports = { isDivisible, fizzbuzz, getRandomTrivia };
