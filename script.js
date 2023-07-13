/* 
  Given an array of ints, find all the non-consecutive integers
  A number is non-consecutive if it is NOT exactly 1 larger than the previous element.

  The first element is never considered non-consecutive.

  Return an array of objects where each object contains the number itself
  and it's index.
*/

const numbers1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
  { i: 4, n: 6 },
  { i: 7, n: 10 },
];

const numbers2 = [];
const expected2 = [];

const numbers3 = [1, 3, 7, 9];
const expected3 = [
  { i: 1, n: 3 },
  { i: 2, n: 7 },
  { i: 3, n: 9 },
];

const numbers4 = [1];
const expected4 = [];


// Explanation: Index 0 has no number before it, so it is not included.

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNumbers
 * @typedef {Array<{i: number, n: number}>} NonConsecutiveNumbers Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecutiveNumbers}
 */
function allNonConsecutive(sortedNumbers) {
  //edge case - first number can't be considered non-consecutive
  //   if (sortedNumbers.length < 1) {
  if (sortedNumbers.length < 2) {
    return [];
  }
  //define variable for non-consecutive using []
  let nonConsecutiveNumbers = [];
  //define variable for the previous number [i-1]
  let previousNumber = sortedNumbers[0];
  //for loop to iterate through i=1; i < numbers.length; i++
  for (let i = 1; i < sortedNumbers.length; i++) {
    //define current number
    let currentNumber = sortedNumbers[i];
    //if current does not = previous number +1, then...
    if (currentNumber !== previousNumber + 1) {
        //then push index number, and n as the value of that index to show it's a non-consecutive number
      nonConsecutiveNumbers.push({ i: i, n: sortedNumbers[i]});
    }
    //then previous number becomes the new current number as loop continues
    previousNumber = currentNumber;
  }
  //return answer
  return nonConsecutiveNumbers;
}

console.log(allNonConsecutive(numbers1));
console.log("======================\n");
console.log(allNonConsecutive(numbers2));
console.log("======================\n");
console.log(allNonConsecutive(numbers3));
console.log("======================\n");
console.log(allNonConsecutive(numbers4));
console.log("======================\n");

/*****************************************************************************/


console.log("***************Alt Solution************\n");
console.log("***************************************\n");

//! ALT Solution:

function consecutiveIntegers2(array) {
  if (array.length < 1) {
    return [];
  }

  let nonConsecNums = [];

  for (let i = 0; i < array.length; ++i) {
    if (array[i + 1] > array[i] + 1) {
      nonConsecNums.push({ i: i + 1, n: array[i + 1] });
    }
  }

  return nonConsecNums;
}

console.log(consecutiveIntegers2([-1, 0, 6, 7, 9, 10, 13]));
console.log("======================\n");

/*****************************************************************************/
