const minTree = require('./minimalTree.prac.3.js');
const BST = require('../util/BST.js');

const basicArr = [1, 2, 3];
const arr1 = [1, 2, 3, 4, 5, 6];
const arr2 = [1, 2, 3, 4, 5, 6];
const randArray = [7, 23, 27, 32, 40, 49, 54, 64, 66, 67, 74, 82, 85, 94, 98];
const randArray2 = [11, 14, 17, 34, 49, 50, 60, 63, 68, 72, 76, 82, 83, 84, 89];
const testTree = minTree(basicArr);
const testTreeEven = minTree(arr1);

describe('4.02: Minimal Tree', () => {
  describe('upon initialization', () => {
    it('takes an array and returns a tree', () => {
      expect(testTree instanceof BST).toBeTruthy();
      expect(testTree.left instanceof BST).toBeTruthy();
      expect(testTree.right instanceof BST).toBeTruthy();
    });
    describe('parseArray within the function returns accurate information about the array entered', () => {
      const parsedArray = testTree.parsedArray(basicArr);
      const expectedResultOdd = [3, 1, 2, [1], [3]];
      expect(parsedArray).toEqual(expectedResultOdd);
      const parsedArrayEven = testTreeEven.parsedArray(testTreeEven);
      const expectedResultEven = [6, 3, 4, [1, 2, 3], [5, 6]];
      expect(parsedArrayEven).toEqual(expectedResultEven);
    });
    describe('obeys BST rules', () => {
      it('has a left node < its value, and right node > than', () => {
        expect(testTree.value < testTree.right.value).toBeTruthy();
        expect(testTree.value > testTree.left.value).toBeTruthy();
        expect(testTree.right.value > testTree.left.value).toBeTruthy();
      });
    });
  });
});