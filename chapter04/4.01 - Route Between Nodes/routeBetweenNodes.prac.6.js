const Queue = require('../util/Queue');

const checkRoute = (headA, headB) => {
    const queueA = new Queue();
    const queueB = new Queue();
    const checked = new Set();
    queueA.add(headA);
    queueB.add(headB);
    checked.add(headA);
    checked.add(headB);

    let hasPath = false;
    // while (!queueA.isEmpty() || !queueB.isEmpty()) {
    while (!queueA.isEmpty() || !queueB.isEmpty()) {
        console.log('Inside the loop');
        if (!queueA.isEmpty()) { // If queueA is not empty
            const node = queueA.remove(); // Get the next node
            if (node === headB) {  // Check to see if it's = to your target
                hasPath = true;
                return hasPath;
            }               // if not, get the child nodes
            const children = Object.keys(node);
            console.log('Node is ', node);
            
            children.forEach(child => {
                console.log('Child is ', node[child]);
                console.log('The set has the child already, ', checked.has(node[child]));
                if (!checked.has(node[child])) {
                    console.log('adding a node[child] from A');
                    checked.add(node[child]);
                    queueA.add(node[child]);
                }
            });
        }
        if (!queueB.isEmpty()) {
            const node = queueB.remove();
            if (node === headA) {
                hasPath = true;
                return hasPath;
            }
            const children = Object.keys(node);
            children.forEach(child => {
                console.log('The set has the child already, ', checked.has(node[child]))
                if (!checked.has(node[child])) {
                    console.log('adding a node[child] from B');
                    checked.add(node[child]);
                    queueB.add(node[child]);
                }
            });
        }
    }
    return hasPath;
};

module.exports = checkRoute;