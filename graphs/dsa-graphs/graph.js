/** Node class for graph. */

class Node {
  constructor(value, adjacent = new Set()) {
    this.value = value;
    this.adjacent = adjacent;
  }
}


/** Graph class. */

class Graph {
  constructor() {
    this.nodes = new Set();
  }

  /** add Node instance and add it to nodes property on graph. */
  addVertex(vertex) {
    this.nodes.add(vertex);
  }

  /** add array of new Node instances and adds to them to nodes property. */
  addVertices(vertexArray) {
    for (let vertex of vertexArray) {
      this.nodes.add(vertex);
    }
  }

  /** add edge between vertices v1,v2 */
  addEdge(v1, v2) {
    v1.adjacent.add(v2);
    v2.adjacent.add(v1);
  }

  /** remove edge between vertices v1,v2 */
  removeEdge(v1, v2) {
    v1.adjacent.delete(v2);
    v2.adjacent.delete(v1);
  }

  /** remove vertex from graph:
   *
   * - remove it from nodes property of graph
   * - update any adjacency lists using that vertex
   */
  removeVertex(vertex) {
    this.nodes.delete(vertex);
    for (let node in this.nodes) {
      if (node.adjacent.has(vertex)) {
        node.adjacent.remove(vertex);
      }
    }
  }

  /** traverse graph with DFS and returns array of Node values */
  depthFirstSearch(start, values = [], seen = new Set()) {
    //use stack since it's dfs
    //avoid cycles - keep an array of seen
    let stack = [start];
    if (stack.length > 0) {
      let currentVertex = stack.pop();
      seen.add(currentVertex);
      values.push(currentVertex.value);
      for (let vertex of currentVertex.adjacent.values()) {
        if (!seen.has(vertex)) {
          this.depthFirstSearch(vertex, values, seen);
        }
      }
    }
    return values;
  }

  /** traverse graph with BDS and returns array of Node values */
  breadthFirstSearch(start, queue=[start], values = [], seen = new Set()) {
    //queues, first in first out
    //push values to the end of the queue, take out
    if (queue.length > 0) {
      let currentVertex = queue.shift();
      seen.add(currentVertex);
      values.push(currentVertex.value);
      for (let vertex of currentVertex.adjacent) {
        if (!seen.has(vertex)) {
          seen.add(vertex);
          queue.push(vertex);
        }
      }
      this.breadthFirstSearch(start, queue, values, seen);
    }
    return values;
  }

  /** find the distance of the shortest path from the start vertex to the end vertex */
  distanceOfShortestPath(start, end) { }
}

module.exports = { Graph, Node }
