import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }

  const result = {
    'winter': [0,1,11], 
    'spring': [2,3,4],
    'summer': [5,6,7],
    'autumn': [8,9,10]
  };

  try {
    let time = date.getTime();
    return Object.entries(result).filter(([key, value]) => value.includes(date.getMonth()))[0][0];
  } catch {
    throw new Error("Invalid date!");
  }
}

// console.log(getSeason(new Date(2019, 11, 22, 23, 45, 11, 500)));