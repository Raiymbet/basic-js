import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  calculateDepth(arr) {
    let result = 0;
    arr.forEach(element => {
      if (Array.isArray(element)) {
        let count = 0;
        count += this.calculateDepth(element);
        if (count > result) {
          result = count;
        }
      }
    }); 

    return result + 1;
  }
}
