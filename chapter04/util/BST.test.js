const BST = require('./BST');


describe('BST', () => {
  describe('On initialization', () => {
    const n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const head = new BST(n[5]);
    const head2 = new BST();
    test('creates a node with a value attribute equal to whats passed into it', () => {
      expect(head.value).toEqual(n[5]);
      expect(head.value).not.toEqual(n[0]);
    });
    test('Has an undefined value when nothing is passed in', () => {
      expect(head2.value).toBeUndefined();
    });
    test('left and right nodes should be null', () => {
      expect(head.left).toBeNull();
      expect(head.right).toBeNull();
    });
  });
  describe('When inserting a new value', () => {
    const n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    const head = new BST(n[5]);
    const head2 = new BST();
    head.insert(n[9]);
    head.insert(n[0]);

    test('throw on inserting a non-number', () => {
      const tHead = new BST(n[0]);
      expect(tHead.insert('some string')).toBeNull();
      expect(tHead.insert(null)).toBeNull();
    });
    test('Sorts the new value into a new BST node', () => {
      expect(head.left instanceof BST).toBeTruthy();
      expect(head.right instanceof BST).toBeTruthy();
    });
    test('correctly sorts the new value into the children', () => {
      expect(head.left).not.toBe(null);
      expect(head.right).not.toBe(null);
      expect(head.left.value < head.value).toBeTruthy();
      expect(head.right.value > head.value).toBeTruthy();
      expect(head.left.value < head.right.value).toBeTruthy();
    });
    describe('when the root node is undefined', () => {
      test('correctly assigns the new value to the root node', () => {
        head2.insert(n[5]);
        expect(head2.value).toBe(n[5]);
      });
    });
  });

  const n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const head = new BST(n[5]);
  head.insert(n[1]);
  head.insert(n[8]);
  head.insert(n[6]);
  head.insert(n[7]); // Head contains 5 1 8 6 7
  describe('searching for values', () => {
    it('returns null when the value isn\'t in the list', () => {
      expect(head.find(n[0])).toBeNull();
    });

    it('returns the node of the value if it finds it', () => {
      expect(head.find(n[7]).value).toEqual(n[7]);
      expect(head.find(n[8]) instanceof BST).toBeTruthy();
    });
  });

  describe('when printing your tree structure', () => {
    const helperTestNode = new BST(n[1]);
    const rootLevel = helperTestNode.bundle(helperTestNode.value);
    const expectedResult = ['[', n[1], ']'];
    describe('the print helper', () => {
      it(' returns an array whose elements are the root and prepends `[` and appends `]` to the first node', () => {
        expect(rootLevel).toEqual(expectedResult);
        expect(helperTestNode.bundle(4, 5)).toEqual(['[', 4, 5, ']']);
      });
    });
    describe('the next helper', () => {
      it('returns an array of all the bundles concatenated for printing', () => {
        const bundleOne = helperTestNode.bundle(1, 2);
        const bundleTwo = helperTestNode.bundle(3, 4);
        expect(helperTestNode.gatherLevel([bundleOne, bundleTwo])).toEqual(['[', 1, 2, ']', '[', 3, 4, ']']);
      });
    });
  });
});