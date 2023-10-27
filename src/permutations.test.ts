import {describe, expect, test} from '@jest/globals';

import {getPermutations} from './permutations';


describe('permutations()', () => {
  test('should return valid words when passed "good"', () => {
    const result = getPermutations('good');
    expect(["go", "goo", "good", "god", "o", "oo", "od", "do", "dog", "doo"]).toEqual(
      expect.arrayContaining(result),
    );
    expect(result.length).toEqual(10)
  });

  test('should return an empty array when passed "x"', () => {
    const result = getPermutations('x');
    expect(result.length).toEqual(0)
  });

  test('should return an empty array when passed ""', () => {
    const result = getPermutations('');
    expect(result.length).toEqual(0)
  });
  
});