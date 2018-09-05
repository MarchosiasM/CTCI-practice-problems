var linkedList = function (value) {
  this.value = value;
  this.next = null;
};

const findKthToLast = (k, head) => {
  if (head === null) {
    return 0;
  }
  let index = findKthToLast(k, head.next) + 1;

  if (index === k) {
    console.log(k + 'th to the last node is ' + head.value);
  }
  return index;
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