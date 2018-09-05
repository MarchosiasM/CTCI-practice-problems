var linkedList = function(value) {
  this.value = value;
  this.next = null;
};

// 1st to the last is the last
// Print out when you found the right node's value
const findKthToLast = (k, head) => {
  // Recurse, when you hit null, return to the parent element, when the sum equals
  // k, return the value of the node.
  if (head === null) {
    return 0;
  }
  if (k < 0) {
    return;
  }
  const returnSum = findKthToLast(k, head.next) + 1;
  if (returnSum === k) {
    console.log(head.value);
  } else if (returnSum < k) {
    return returnSum;
  }
};

/* TESTS */
var a = new linkedList('1');
var b = new linkedList('2');
var c = new linkedList('3');
var d = new linkedList('4');
var e = new linkedList('5');
var f = new linkedList('6');
var g = new linkedList('7');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;
f.next = g;

findKthToLast(3, a);
console.log('Answer should be 5');

findKthToLast(10, a);
console.log('K too big');

findKthToLast(-1, a);
console.log('K negative');

findKthToLast(0, a);
console.log('K 0, out of bounds');

findKthToLast(1, a);
console.log('Answer should be 7');
