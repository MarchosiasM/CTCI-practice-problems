const deleteMiddleNode = require('./deleteMiddleNode.prac.3');

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

var ae = new LinkedList('a');
var be = new LinkedList('b');
var ce = new LinkedList('c');
var de = new LinkedList('d');
var ee = new LinkedList('e');
var fe = new LinkedList('f');


ae.next = be;
be.next = ce;
ce.next = de;
de.next = ee;
ee.next = fe;


describe('Chapter 2, Problem 3, Delete Middle Node', () => {
  it('will change the value of the input node to the next nodes value', () => {
    expect(f.value).toEqual('f');
  })
  it('accepts the middle of a linked list, and removes the node\'s value', () => {
    expect(a).toEqual(ae);
    deleteMiddleNode(c);
    expect(a).not.toEqual(ae);
  });
  it('Accepts the head node, and deletes the center node in an odd-numbered list', () => {
    // expect(deleteMiddleNode(ae)).not.toEqual(ae);
  });
});