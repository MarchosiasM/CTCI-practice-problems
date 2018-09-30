const deleteMidNode = require('./deleteMidNode.prac.1');

var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};



var a = new LinkedList('a');
var b = new LinkedList('b');
var c = new LinkedList('c');
var d = new LinkedList('d');
var e = new LinkedList('e');
var f = new LinkedList('f');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

describe('Chapter 2, Problem 3, Delete Middle Node', () => {
  it('returns a new linked list', () => {
    console.log(a);
    expect(deleteMidNode(a)).not.toBe(a);
    console.log(deleteMidNode(a));

  });
  it('Accepts the head node, and deletes the center node in an odd-numbered list', () => {
    expect(deleteMidNode(a)).not.toEqual(a);
  });
});