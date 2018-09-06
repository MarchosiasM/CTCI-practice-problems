// Approach: divide and conquer, array and insert into tree
// var Queue = require('./../util/Queue');
var BST = require('./../util/BST');


const insertBalanced = (array) => {
  const length = array.length;
  if (length < 1) {
    return null;
  }
  if (length === 1) {
    return new BST(array[0]);
  }
  const midPoint = Math.ceil(length / 2);
  const node = new BST(array[midPoint]);
  const rightNode = insertBalanced(array.slice(midPoint + 1, length));
  const leftNode = insertBalanced(array.slice(0, midPoint));
  node.insert(rightNode);
  node.insert(leftNode);

  return node;
};

/* TEST */
var arr1 = [1, 2, 3, 4, 5, 6];
var tree1 = insertBalanced(arr1);
tree1.printTreeStruct();

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var tree2 = insertBalanced(arr2);
tree2.printTreeStruct();

module.exports = insertBalanced;