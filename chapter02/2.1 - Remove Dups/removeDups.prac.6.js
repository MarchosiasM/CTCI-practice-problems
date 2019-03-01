const removeDups = (head) => {
    const tempBuffer = new Set();
    tempBuffer.add(head.value);
    let currNode = head.next;
    let lastNode = head;
    let nextNode = currNode['next'];
    while (currNode !== null) {
        if (!tempBuffer.has(currNode['value'])) {
            tempBuffer.add(currNode['value']);
            lastNode = currNode;
        } else {
            lastNode['next'] = nextNode;
        }
        currNode = nextNode;
        if (currNode !== null) {
            nextNode = currNode['next'];

        }
    }
    return head;
};

module.exports = removeDups;