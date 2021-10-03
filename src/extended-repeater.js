import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if(!options.hasOwnProperty('addition')) {
    options.addition = '';
  }
  let block = String(str) + new Array(options.additionRepeatTimes).fill(String(options.addition), 0).join(options.additionSeparator ? options.additionSeparator : '|'),
      result = '' + block;
  for (let i = 1; i < options.repeatTimes; i++) {
    result += (options.separator ? options.separator : '+') + block;
  }

  return result;
}
