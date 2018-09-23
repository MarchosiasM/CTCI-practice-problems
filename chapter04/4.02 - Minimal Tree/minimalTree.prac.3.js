// This a success, but the BST I wrote with it was not

const BST = require('../util/BST');

const minTree = (array) => {

  const parseArray = (inputArray) => {
    const length = inputArray.length;
    const centerIndex = Math.floor(length / 2);
    const center = inputArray[centerIndex];
    const leftSide = inputArray.slice(0, centerIndex);
    const rightSide = inputArray.slice(centerIndex + 1, length);
    return [length, center, centerIndex, leftSide, rightSide];
  };
  const minTreeRecurse = (inputArray, topLevelNode) => {
    // this method's job is to recurse over the arrays and 

  };
  const { length, center, centerIndex, leftSide, rightSide } = parseArray(array);
  const head = new BST(center);


  return head;
};

module.exports = minTree;


// const randArray2 = [11, 14, 17, 34, 49, 50, 60, 63, 68, 72, 76, 82, 83, 84, 89];
// let tree1 = minTree(randArray2);
// console.log(tree1);
// // tree1.print();
// const randArray = [1, 2, 3, 4, 5, 6];
// let tree2 = minTree(randArray);
// console.log(tree2);
// console.log(tree2.left);
// tree2.print();