/* CLASS */
var LinkedList = function (value) {
  this.value = value;
  this.next = null;
};

const { removeDups, cloneList } = require('./removeDups.prac.5');

describe('Chapter 2, section 1', () => {
  describe('Helper function, cloned list', () => {
    it('returns a list that is distinct from the original, but equal', () => {
      var a = new LinkedList('a');
      var b = new LinkedList('b');
      var c = new LinkedList('c');
      var d = new LinkedList('d');
      var e = new LinkedList('e');

      a.next = b;
      b.next = c;
      c.next = d;
      d.next = e;

      expect(cloneList(a)).toEqual(a);
      expect(cloneList(a)).not.toBe(a);
    });
  });
  describe('given linked lists', () => {
    var a = new LinkedList('a');
    var b = new LinkedList('b');
    var c = new LinkedList('c');
    var d = new LinkedList('d');
    var e = new LinkedList('e');

    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;

    it('returns the original linked list when there are no duplicates ', () => {
      expect(removeDups(a)).toEqual(a);
    });

    it('returns a linkedlist that is distinct from the original', () => {
      expect(removeDups(a)).not.toBe(a);
    });

    it('correctly filters out duplicates', () => {
      var f = new LinkedList('f');
      var g = new LinkedList('g');
      var h = new LinkedList('g');
      var i = new LinkedList('g');
      var j = new LinkedList('g');

      f.next = g;
      g.next = h;
      h.next = i;
      i.next = j;

      const fe = new LinkedList('f');
      const ge = new LinkedList('g');

      fe.next = ge;

      expect(removeDups(f)).toEqual(fe);

    });
  });
});
/* TESTS */



var k = new LinkedList('g');
var l = new LinkedList('g');
var m = new LinkedList('g');
var n = new LinkedList('b');
var o = new LinkedList('g');

k.next = l;
l.next = m;
m.next = n;
n.next = o;

removeDups(k);
