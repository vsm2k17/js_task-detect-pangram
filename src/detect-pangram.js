'use strict';

/**
 * Implement detectPangram function:
 *
 * A pangram is a sentence that contains every single letter of the alphabet
 * at least once. For example, the sentence "The quick brown fox jumps over
 * the lazy dog" is a pangram, because it uses the letters A-Z at least once
 * (case is irrelevant).
 * Given a string, detect whether or not it is a pangram. Return True if it
 * is, False if not. Ignore numbers and punctuation.
 *
 * @param {string} phrase
 *
 * @return {boolean}
 */
function detectPangram(phrase) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let letterCount = 26;
  let letters = [];

  letters = alphabet.split('');

  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < phrase.length; j++) {
      if (phrase.toLowerCase().charAt(j) === letters[i] && letters[i] !== ' ') {
        letters.splice(i, 1, ' ');
        letterCount--;
      }
    }

    if (letterCount === 0) {
      return true;
    }
  }

  return false;
}

module.exports = detectPangram;
