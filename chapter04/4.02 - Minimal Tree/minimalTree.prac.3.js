// This a success, but the BST I wrote with it was not

const BST = require('../util/BST');

const minTree = (array) => {
  const length = array.length;
  if (length === 1) {
    return new BST(array[0]);
  } else if (length < 1) {
    return null;
  }
  const halfLen = Math.ceil(length / 2);
  const head = new BST(array[halfLen]);
  const leftNode = minTree(array.slice(0, halfLen));
  const rightNode = minTree(array.slice(halfLen + 1, length));

  if (leftNode !== null) {
    head.insert(leftNode.value);
  } else { head.insert(leftNode); }
  if (rightNode !== null) {
    head.insert(rightNode.value);
  } else { head.insert(rightNode); }

  return head;
};

module.exports = minTree;


const randArray2 = [11, 14, 17, 34, 49, 50, 60, 63, 68, 72, 76, 82, 83, 84, 89];
let tree1 = minTree(randArray2);
console.log(tree1);
// tree1.print();