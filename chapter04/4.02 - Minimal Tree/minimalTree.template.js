// Approach: divide and conquer, array and insert into tree
var Queue = require('./../util/Queue');
var BST = require('./../util/BST');

var insertBalanced = function (array) {
};

/* TEST */
var arr1 = [1, 2, 3, 4, 5, 6];
var tree1 = insertBalanced(arr1);
tree1.printTreeStruct();

var arr2 = [1, 2, 3, 4, 5, 6, 7];
var tree2 = insertBalanced(arr2);
tree2.printTreeStruct();