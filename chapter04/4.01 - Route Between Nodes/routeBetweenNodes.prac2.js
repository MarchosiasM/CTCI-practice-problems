const Graph = require('../util/Graph');
const Queue = require('../util/Queue');

const checkRoute = (node1, node2, graph) => {
// Let's do a bi-directional BFS. 
  const q1 = new Queue();
  const q2 = new Queue();
  const visited1 = { };
  const visited2 = { };
  // Add the edges of our first nodes to their respective queue's
  for (let edge in graph.findEdges(node1)) {
    q1.add(edge);
  }
  visited1[node1] = true;
  for (let edge in graph.findEdges(node2)) {
    q2.add(edge);
  }
  visited2[node2] = true;
  // Now let's work through the queue, adding edges we come across
  // as we go. This loop can stay functional as long as the queue
  // has edges.
  // Steps: Take the next item in the queue.
  // Is this the node we're looking for?
  // Add its edges to the queue. (If not in the visited list).
  // Add those edges to the visited list.
  while (!q1.isEmpty() || !q2.isEmpty()) {
    let nextNode = q1.remove();
    // console.log('Checking ', nextNode);
    if (graph.hasNode(nextNode)) {
      console.log('Checking to see if node ', nextNode, ' is connected to ', node2);
      if (nextNode === node2) {
        return true;
      }
      for (let edge in graph.findEdges(nextNode)) {
        if (!(visited1[edge] === undefined)) {
          visited1[edge] = true;
          q1.add(edge);
        }
      }
    }
    let nextNode2 = q2.remove();
    // console.log('Checking ', nextNode2);
    if (graph.hasNode(nextNode2)) {
      console.log('Checking to see if node ', nextNode2, ' is connected to ', node1);
      if (nextNode2 === node1) {
        return true;
      }
      for (let edge in graph.findEdges(nextNode2)) {
        if (!(visited2[edge] === undefined)) {
          visited2[edge] = true;
          q2.add(edge);
        }
      }
    }
  }
  return false;
};

/* TEST */
var graph = new Graph();
graph.addNode('A');
graph.addNode('B');
graph.addNode('C');
graph.addNode('D');
graph.addNode('E');

graph.addEdge('A', 'B');
graph.addEdge('A', 'C');
graph.addEdge('B', 'C');

graph.addEdge('D', 'E');


console.log(checkRoute('A', 'C', graph), true);
console.log(checkRoute('A', 'E', graph), false);
console.log(checkRoute('B', 'A', graph), true);
console.log(checkRoute('D', 'E', graph), true);