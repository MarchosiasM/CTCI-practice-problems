const Queue = require('../util/Queue');

const checkRoute = (nodeA, nodeB, graph) => {
  const qA = new Queue();
  const qB = new Queue();
  qA.add(nodeA);
  qB.add(nodeB);
  const visitedBuffer = [nodeA, nodeB];
  while (!qA.isEmpty() || !qB.isEmpty()) {
    // First remove an item from qA, then add it's children to the end of
    // q if it hasn't been visited and add to visited buffer. Then check
    // to see if it's the node we're looking for, if it is, return true,
    // If not, move on.
    if (!qA.isEmpty()) {
      const currNode = qA.remove();
      if (currNode === nodeB) {
        return true;
      }
      for (let edge in graph.findEdges(currNode)) {
        if (!visitedBuffer[edge]) {
          qA.add(edge);
          visitedBuffer[edge] = true;
        }
      }
    }
    if (!qB.isEmpty()) {
      const currNode = qB.remove();
      if (currNode === nodeA) {
        return true;
      }
      for (let edge in graph.findEdges(currNode)) {
        if (!visitedBuffer[edge]) {
          qA.add(edge);
          visitedBuffer[edge] = true;
        }
      }
    }
  }
  return false;
};


module.exports = checkRoute;