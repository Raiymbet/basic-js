import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let result = [];
  for (let i = 0; i < matrix.length; i++) {
    result.push(new Array(matrix[i].length).fill(0));
    for (let j = 0; j < matrix[i].length; j++) {
      const left_side = (j === 0);
      const rigth_side = (j === matrix[i].length - 1);
      const top = (i === 0);
      const bottom = (i === matrix.length - 1);

      if (!rigth_side && matrix[i][j+1]) result[i][j]++;
      if (!left_side && matrix[i][j-1]) result[i][j]++;
      if (!top && matrix[i-1][j]) result[i][j]++;
      if (!top && !left_side && matrix[i-1][j-1]) result[i][j]++;
      if (!top && !rigth_side && matrix[i-1][j+1]) result[i][j]++;
      if (!bottom && matrix[i+1][j]) result[i][j]++;
      if (!bottom && !left_side && matrix[i+1][j-1]) result[i][j]++;
      if (!bottom && !rigth_side && matrix[i+1][j+1]) result[i][j]++;
    }
  }

  return result;
}
