const minTree = require('./minimalTree.prac.3.js');
const BST = require('./../util/BST');

const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5, 6];
const randArray = [7, 23, 27, 32, 40, 49, 54, 64, 66, 67, 74, 82, 85, 94, 98];
const randArray2 = [11, 14, 17, 34, 49, 50, 60, 63, 68, 72, 76, 82, 83, 84, 89];

describe('4.02: Minimal Tree', () => {
  describe('upon initialization', () => {
    it('takes an array and returns a tree', () => {
      expect(minTree(arr1) instanceof BST).toBeTruthy();
    });

  });
});