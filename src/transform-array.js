import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

const CONTROL_SEQUENCES = {
  DISCARD_NEXT: '--discard-next',
  DISCARD_PREV: '--discard-prev',
  DOUBLE_NEXT: '--double-next',
  DOUBLE_PREV: '--double-prev'
}

export default function transform(arr) {
  if (Array.isArray(arr)) {
    const result = [];
    let discarded = null;
    arr.forEach((value, index, arr) => {
      if (value === CONTROL_SEQUENCES.DISCARD_NEXT) {
        discarded = index + 1;
      } else if (value === CONTROL_SEQUENCES.DISCARD_PREV) {
        if (index > 0 && (index - 1) != discarded) {
          result[index - 1] = arr[index + 1];
          discarded = index + 1; 
        }
      } else if (value === CONTROL_SEQUENCES.DOUBLE_NEXT) {
        if (index + 1 < arr.length) {
          result.push(arr[index + 1]);
        }
      } else if (value === CONTROL_SEQUENCES.DOUBLE_PREV) {
        if (index > 0 && (index - 1) != discarded) {
          result.push(arr[index - 1]);
        }
      } else if (discarded != index){
        result.push(value);
      }
    });

    return result;
  } else {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
}
