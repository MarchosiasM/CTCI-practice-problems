// First we need a linked list

class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const removeDups = (node) => {
  let bufferPast = null;
  const buffer = new Set();
  while (node.next) {
    if (buffer.has(node.value)) {
      // Set the next property of the previous node to the next, cutting this
      // duplicate node out of the list.
      bufferPast.next = node.next;
    }
    buffer.add(node.value);
    bufferPast = node;
    node = node.next;
  }
  console.log(buffer);
};

const printNodes = (node) => {
  console.log(node.value);
  if (!node.next) {
    return;
  }
  printNodes(node.next);
};

const aNode = new LinkedList('a');
const bNode = new LinkedList('b');
const cNode = new LinkedList('c');
const dNode = new LinkedList('d');
const eNode = new LinkedList('e');

aNode.next = bNode;
bNode.next = cNode;
cNode.next = dNode;
dNode.next = eNode;

printNodes(aNode);

const dupeNode = new LinkedList('dupe');
const dupeNode2 = new LinkedList('dupe');

aNode.next = bNode;
bNode.next = dupeNode;
dupeNode.next = cNode;
cNode.next = dupeNode2;
dupeNode2.next = dNode;

printNodes(aNode);

removeDups(aNode);

printNodes(aNode);

