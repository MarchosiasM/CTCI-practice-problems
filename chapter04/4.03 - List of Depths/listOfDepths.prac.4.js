const LinkedList = require('../util/LinkedList')
const Queue = require('../util/Queue');

const listOfDepths = (head) => {
    // Initialize 
    let leadingQ = new Queue();
    let trailingQ = new Queue();
    const arrayOfLists = [];
    leadingQ.add(head);
    let currLinkedList = null;
    // Process the tree
    while (!leadingQ.isEmpty()) {
        // Add children to trailing Q
        const currentNode = leadingQ.remove();
        if (currentNode.left !== null) {
            trailingQ.add(currentNode.left);
        }
        if (currentNode.right !== null) {
            trailingQ.add(currentNode.right);
        }
        let newList = new LinkedList(currentNode.value);
        newList.next = currLinkedList;
        currLinkedList = newList;
        // Wrap up when you're done with this layer
        if (leadingQ.isEmpty()) {
            arrayOfLists.push(currLinkedList);
            currLinkedList = null;
            leadingQ = trailingQ;
            trailingQ = new Queue();
        }

    }
    return arrayOfLists;
};

module.exports = listOfDepths;