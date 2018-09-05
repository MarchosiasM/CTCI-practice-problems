var linkedList = function (value) {
  this.value = value;
  this.next = null;
};


// 1st to the last is the last
// Print out when you found the right node's value
const findKthToLast = (k, head) => {
  // Go through every element, when you find a node null, return 0.
  // For each value up until then, add one to the returned value, 
  // when the returned value + 1 === k, print the value of the current node
  if (head === null) {
    return 0;
  }
  const iterable = findKthToLast(k, head.next) + 1;

  if (iterable === k) {
    console.log(head.value);
  } else {
    return iterable;
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

findKthToLast(10, a);

findKthToLast(-1, a);

findKthToLast(0, a);

findKthToLast(1, a);