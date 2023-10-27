import words from 'an-array-of-english-words';

import { Trie} from './trie';

  /**
   * Takes a word and returns all valid english permutations of the letters of that word of
   * any length. Each copy of each letter is used at most once for each permutation but could
   * also not be used.
   * 
   * @param {string} word - The word to derive additional words from
   * @returns {Array} - The list of valid derived words
   */
  export function getPermutations(word: string) {

    // build out the trie from the dictionary
    const trie = new Trie();
    for (let w of words) {
      trie.insert(w);
    }

    let candidates: Record<string, boolean> = {};
    const validWords: Array<string> = [];
  
    // helper function to perform recursion
    function getWord(prefix: string, remainder: string, parentNode) {
      // base condition check
      if (remainder) {
        
        for (const char of remainder.split('')) {
            const newPrefix = `${prefix}${char}`;
            const node = parentNode.children[char];
            if (!node) {
              // no valid paths in our trie, just abort
              continue;
            }
            if (candidates[newPrefix] === undefined) { // ensures we don't process duplicate constructions of words
              candidates[newPrefix] = true;
              if (node.isWord) { // faster than words.incudes()
                validWords.push(newPrefix);
              }
              const newRemainder = remainder.replace(char, '');
              getWord(newPrefix, newRemainder, node);
            }
        }
      }
    }
    getWord('', word, trie.root);
    return validWords;
  }
  
  