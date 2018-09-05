const Graph = require('../util/Graph');
const Queue = require('../util/Queue');

const checkRoute = (value1, value2, graph) => {
  const q1 = new Queue();
  const q2 = new Queue();
  const visited1 = {};
  const visited2 = {};
  visited1[value1] = true;
  visited2[value2] = true;
  if (graph.hasNode(value1)) {
    for (let edge in graph.findEdges(value1)) {
      q1.add(edge);
    }
  }
  if (graph.hasNode(value2)) {
    for (let edge in graph.findEdges(value2)) {
      q2.add(edge);
    }
  }
  let next1;
  let next2;
  while (!q1.isEmpty() || !q2.isEmpty()) {
    if (!q1.isEmpty()) {
      next1 = q1.remove();
      if (next1 === value2) {
        return true;
      }
      if (visited1[next1] === undefined) {
        visited1[next1] = true;
        if (graph.hasNode(next1)) {
          for (let edge in graph.findEdges(next1)) {
            q1.add(edge);
          }
        }
      }
    }
    if (!q2.isEmpty()) {
      next2 = q2.remove();
      if (next2 === value1) {
        return true;
      }
      if (visited2[next2] === undefined) {
        visited2[next2] = true;
        for (let edge in graph.findEdges(next2)) {
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