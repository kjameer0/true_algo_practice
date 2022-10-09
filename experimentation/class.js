class Bubble {
  //constructor sets up basic instance of object
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  smash() {
    this.x = this.x * 2;
    this.y = this.y * 2;
  }
}

var canFinish = function (numCourses, prerequisites) {
  const order = [];
  const queue = [];
  const graph = new Map();
  const indegree = Array(numCourses).fill(0);
  for (const [e, v] of prerequisites) {
    // build graph map e = class v = class required
    if (graph.has(v)) {
      graph.get(v).push(e);
    } else {
      graph.set(v, [e]);
    }
    // build indegree array
    indegree[e]++;
  }
  console.log(graph);
  console.log(indegree);
  for (let i = 0; i < indegree.length; i++) {
    if (indegree[i] === 0) queue.push(i);
  }

  while (queue.length) {
    const v = queue.shift();
    if (graph.has(v)) {
      for (const e of graph.get(v)) {
        indegree[e]--;
        if (indegree[e] === 0) queue.push(e);
      }
    }
    order.push(v);
  }
  console.log(order, indegree);
  return numCourses === order.length;
};

console.log(
  canFinish(5, [
    [1, 2],
    [0, 1],
    [2, 3],
    [4, 1],
    [1, 0],
  ])
);
