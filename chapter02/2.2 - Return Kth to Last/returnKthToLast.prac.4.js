var linkedList = function (value) {
  this.value = value;
  this.next = null;
};


// 1st to the last is the last
// Print out when you found the right node's value
const findKthToLast = (k, head) => {
  if (k < 0 || head === null) {
    return 0;
  }
  const sum = findKthToLast(k, head.next) + 1;
  if (sum === k) {
    console.log('Found the kth to the last item, ', head.value, ', for k = ', k);
  } else {
    return sum;
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