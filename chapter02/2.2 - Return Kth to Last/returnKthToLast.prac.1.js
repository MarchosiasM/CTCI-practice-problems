var linkedList = function (value) {
  this.value = value;
  this.next = null;
};

const findKthToLast = (pos, head) => {
  let currNode = head;
  if (pos < 0) {
    console.log('Please enter a valid position');
    return false;
  }
  let length = 0;

  // Create a runner to find the length of the linked list
  while (currNode != null) {
    length += 1;
    currNode = currNode.next;
  }
  currNode = head;
  // Once you have the length, you can remove the kth to the last item
  const loc = (length - pos - 1);
  if (loc >= 0) {
    let i = 0;
    while (i <= loc) {
      if (i === loc) {
        return currNode.value;
      }
      currNode = currNode.next;
      i += 1;
    }
  }
  return false;
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

console.log(findKthToLast(3, a), '4');

console.log(findKthToLast(10, a), false);

console.log(findKthToLast(-1, a), false);

console.log(findKthToLast(0, a), '7');

console.log(findKthToLast(1, a), '6');