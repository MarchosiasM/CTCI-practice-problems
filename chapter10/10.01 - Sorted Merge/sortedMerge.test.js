const sortedMerge = require('./sortedMerge.prac.1.js');

/* TEST */


let a = [1, 2, 3];
let b = [4, 5, 6];
let idealSolution = [1, 2, 3, 4, 5, 6];
let errorText = 'Please enter strings';
let aC = [2, 4, 6];
let bC = [1, 3, 5];

test('works as intended', () => {
  expect(sortedMerge(a, b)).toEqual(idealSolution);
  expect(sortedMerge(a, b)).toContain(...a);
  expect(sortedMerge(a, b)).toContain(...b);
});

test('works with inputs reversed', () => {
  expect(sortedMerge(b, a)).toEqual(idealSolution);
});

test('throws error with bad inputs', () => {
  expect(sortedMerge()).toEqual(errorText);
});

test('returns appropriate array if it requires more complex work on sorted arrays', () => {
  expect(sortedMerge(aC, bC)).toEqual(idealSolution);
});

test('Handles sorted arrays with duplicate inputs', () => {
  expect(sortedMerge(a, a)).toEqual([1, 1, 2, 2, 3, 3,]);
});