import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  let s1_arr = s1.split(''), s2_arr = s2.split('');
  return s1_arr.filter(ch => {
    if (s2_arr.includes(ch)) {
      s2_arr.splice(s2_arr.indexOf(ch), 1);
      return true;
    } else {
      return false;
    }
  }).length;
}

// const result = getCommonCharacterCount('aabcc', 'adcaa');
// console.log(result);