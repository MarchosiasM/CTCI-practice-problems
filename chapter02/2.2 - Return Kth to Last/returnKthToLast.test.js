const findKthToLast = require('./returnKthToLast.prac.6');
const linkedList = require('../util/LinkedList');


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

describe('Chapter 2: Problem 2, find Kth to Last', () => {
  it('With 1 as the last element, returns the 3rd to last when you input 3 as an argument', () => {
    expect(findKthToLast(3, a).payload).toEqual('5');
  });
  it('When your arg exceeds the length of the linked list or is negative, payload will be null', () => {
    expect(findKthToLast(10, a).payload).toBeNull();
    expect(findKthToLast(-1, a).payload).toBeNull();
  });
  it('Returns the last element when the argument is 1', () => {
    findKthToLast(1, a);
  });

});
