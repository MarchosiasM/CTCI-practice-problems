var BST = require('../util/BST');
const listOfDepths = require('./listOfDepths.prac.1.js');

// var listOfDepths = function (bst) {
//   var listOfLists = [];
//   var list = null;
//   var newNode;
//   var q = new Queue();
//   var nextq = new Queue();
//   var currNode = bst;

//   q.add(currNode);
//   while (!q.isEmpty()) {
//     currNode = q.remove();
//     newNode = new LinkedList(currNode.value);
//     newNode.next = list;
//     list = newNode;
//     if (currNode.left !== null) {
//       nextq.add(currNode.left);
//     }
//     if (currNode.right !== null) {
//       nextq.add(currNode.right);
//     }
//     if (q.isEmpty()) {
//       listOfLists.push(list);
//       list = null;
//       q = nextq;
//       nextq = new Queue();
//     }
//   }
//   return listOfLists;
// };


describe('Chapter 4, problem 3: List of depths', () => {
  var tree = new BST(4);
  tree.insert(2);
  tree.insert(6);
  tree.insert(1);
  tree.insert(3);
  tree.insert(5);
  tree.insert(7);
  it('returns 3 linked lists if the depth of the tree is 3', () => {
    expect(listOfDepths(tree).length).toBe(3);
  });
});