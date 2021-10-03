import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let except_value = arr.filter(el => el != -1);
  except_value.sort((a, b) => a - b);
  
  if (except_value.length === arr.length) {
    return except_value;
  } else {
    let j = 0;
    for (let i = 0; i < arr.length; i++) {
      if(arr[i] != -1) {
        arr[i] = except_value[j];
        j++;
      }
    } 

    return arr;
  }
}

// console.log(sortByHeight([-1, 150, 190, 170, -1, -1, 160, 180]));