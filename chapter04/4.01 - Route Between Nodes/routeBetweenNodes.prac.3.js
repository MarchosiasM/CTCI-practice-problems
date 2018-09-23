var Graph = require('./../util/Graph');
var Queue = require('./../util/Queue');

// concurrently implement BFS on both sides of the graph
// intention is to minimise the levels that the graph has to search

/**
 * input two nodes and a graph, use a bi-directional BFS
 * to to go through the nodes and check to see if there
 * is a path from one node to the other.
 */

const checkRoute = (nodeA, nodeB, graph) => {
  const queueA = new Queue();
  const queueB = new Queue();
  queueA.add(nodeA);
  queueB.add(nodeB);
  const visited = [nodeA, nodeB];
  let foundPath = false;
  while ((!queueA.isEmpty() || !queueB.isEmpty()) && !foundPath) {
    /**
     * For each part, check to see if the current node
     * is the target node. If it isn't, add it's edges
     * to the queue if they're not in the visited array.
     * You don't need two visited arrays. If a node has
     * been visited by one end of the BDBFS then a 
     * search from the other direction will yield the same 
     * result. Add the edges to the visited array while
     * adding them to the queue.
     */
    // This bit searches for nodeB
    if (!queueA.isEmpty()) {
      const currNode = queueA.remove();
      if (currNode === nodeB) {
        foundPath = true;
        console.log('Setting foundPath to true, ', foundPath);
        break;
      }
      for (let edge in graph.findEdges(currNode)) {
        if (!visited[edge]) {
          queueA.add(edge);
          visited[edge] = true;
        }
      }
    }
    if (!queueB.isEmpty()) {
      const currNode = queueB.remove();
      if (currNode === nodeA) {
        foundPath = true;
        console.log('Setting foundPath to true, ', foundPath);
        break;
      }
      for (let edge in graph.findEdges(currNode)) {
        if (!visited[edge]) {
          queueB.add(edge);
          visited[edge] = true;
        }
      }
    }
  }
  return foundPath;
};

module.exports = checkRoute;