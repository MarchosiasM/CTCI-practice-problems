const Queue = require('../util/Queue');


const checkRoute = (nodeA, nodeB, graph) => {
  const qA = new Queue();
  const qB = new Queue();
  qA.add(nodeA);
  qB.add(nodeB);
  const bufferA = {};
  const bufferB = {};
  bufferA[nodeA] = true;
  bufferB[nodeB] = true;
  let currEdge1;
  let currEdge2;
  while (!qA.isEmpty() || !qB.isEmpty()) {
    if (!qA.isEmpty()) {
      currEdge1 = qA.remove();
      if (currEdge1 === nodeB) {
        return true;
      }
      for (let edge in graph.findEdges(currEdge1)) {
        if (!bufferA[edge]) {
          qA.add(edge);
          bufferA[edge] = true;
        }
      }
    }
    if (!qB.isEmpty()) {
      currEdge2 = qB.remove();
      if (currEdge2 === nodeA) {
        return true;
      }
      for (let edge in graph.findEdges(currEdge2)) {
        if (!bufferB[edge]) {
          qB.add(edge);
          bufferB[edge] = true;
        }
      }
    }
  }

  return false;
};

module.exports = checkRoute;