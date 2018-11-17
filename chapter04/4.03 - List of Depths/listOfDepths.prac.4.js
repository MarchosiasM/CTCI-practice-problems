var Queue = require('../util/Queue');
var LinkedList = require('../util/LinkedList');
var listOfDepths = function (head) {
    var currLevel = new Queue();
    var nextLevel = new Queue();
    currLevel.add(head);
    var currNode;
    var arrayOfLists = [];
    var levelList;
    while (!currLevel.isEmpty()) {
        currNode = currLevel.remove();
        if (levelList == null) {
            levelList = new LinkedList(currNode.value);
        }
        else {
            var newNode = new LinkedList(currNode.value);
            newNode.next = levelList;
            levelList = newNode;
        }
        if (currNode.right !== null) {
            nextLevel.add(currNode.right);
        }
        if (currNode.left !== null) {
            nextLevel.add(currNode.left);
        }
        if (currLevel.isEmpty()) {
            arrayOfLists.push(levelList);
            levelList = null;
            if (nextLevel.isEmpty()) {
                return arrayOfLists;
            }
            currLevel = nextLevel;
            nextLevel = new Queue();
        }
    }
    return arrayOfLists;
};
module.exports = listOfDepths;
