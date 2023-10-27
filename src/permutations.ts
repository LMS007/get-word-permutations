import words from 'an-array-of-english-words';

/**
 * Takes a word and returns all valid english permutations of the letters of that word of
 * any length. Each copy of each letter is used at most once for each permutation but could
 * also not be used.
 * 
 * @param {string} word - The word to derive additional words from
 * @returns {Array} - The list of valid derived words
 */
export function getPermutations(word: string) {
  let candidates: Record<string, boolean> = {};
  const validWords: Array<string> = [];

  // helper function to perform recursion
  function getWord(prefix: string, remainder: string) {
    // base condition check
    if (remainder) {
      for (const char of remainder.split('')) {
          const newPrefix = `${prefix}${char}`;
          if (candidates[newPrefix] === undefined) { // ensures we don't process duplicate constructions of words
            candidates[newPrefix] = true;
            if (words.includes(newPrefix)) {
              validWords.push(newPrefix);
            }
            const newRemainder = remainder.replace(char, '');
            getWord(newPrefix, newRemainder);
          }
      }
    }
  }
  getWord('', word);
  return validWords;
}