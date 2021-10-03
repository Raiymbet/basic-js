import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  let counter = {};
  return names.map(value => {
    let count = counter[value] ? counter[value] : 0;
    counter[value] = count + 1;

    if (!count) 
      return value;
    
    let rename = value + '(' + count + ')';
    counter [rename] = 1;
    return rename;
  });
}


console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));