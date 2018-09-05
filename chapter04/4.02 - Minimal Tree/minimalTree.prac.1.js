// Approach: divide and conquer, array and insert into tree
// var Queue = require('./../util/Queue');
var BST = require('./../util/BST');

var insertBalanced = function (array) {
  if (array.length === 0 || array.length < 0) {
    return null;
  } else if (array.length === 1) {
    return array[0];
  }
  const length = array.length;
  const midpoint = Math.ceil(length / 2);
  const newNode = new BST(array[midpoint - 1]);
  newNode.insert(insertBalanced(array.slice(0, midpoint - 1)));

  newNode.insert(insertBalanced(array.slice(midpoint, length)));

  return newNode;

};

/* TEST */
var arr1 = [1, 2, 3, 4, 5, 6, 9, 11, 14, 18, 22];
var tree1 = insertBalanced(arr1);
tree1.printTreeStruct();
console.log(tree1 instanceof BST);

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var tree2 = insertBalanced(arr2);
tree2.printTreeStruct();