const Graph = require('../util/Graph');
const checkRoute = require('./routeBetweenNodes.prac.5');
// const Queue = require('../util/Queue');
/* TEST */
const graph = new Graph();
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
// console.log(checkRoute('A', 'E', graph), false);
// console.log(checkRoute('B', 'A', graph), true);
// console.log(checkRoute('D', 'E', graph), true);

describe('checkRoute', () => {
  it('returns true if there\'s a path', () => {

    expect(checkRoute('A', 'C', graph)).toBe(true);
    expect(checkRoute('A', 'E', graph)).toBe(false);
    expect(checkRoute('A', 'B', graph)).toBe(true);
    expect(checkRoute('B', 'A', graph)).toBe(true);
    expect(checkRoute('D', 'E', graph)).toBe(true);
  });
});