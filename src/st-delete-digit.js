import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let result = 0, i = 1;
  while (Math.floor(n/i) > 0) {
    let deleted_digit = Math.floor(n / (i*10)) * i + (n % i);
    // console.log(deleted_digit, i);
    result = Math.max(result, deleted_digit);
    i *= 10;
  }

  return result;
}
