import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result = [];
  for (let i = 0; i < str.length; i++) {
    if (result.length > 0 && result[result.length - 1] == str.charAt(i)) {
      result[result.length - 2]++;
    } else {
      result.push(1);
      result.push(str.charAt(i));
    }
  }

  // console.log("Result: ", result);
  return result.filter(value => value != 1).join('');
}

// encodeLine('aaaatttt');
