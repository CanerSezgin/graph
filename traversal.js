// Adjacency List
const graph = {
  a: ['c', 'b'],
  b: ['d'],
  c: ['e'],
  d: ['f'],
  e: [],
  f: [],
};

const depthFirstSearch = (graph, startingNode) => {
  return {
    stack() {
      const visited = [];
      const stack = [startingNode];

      while (stack.length > 0) {
        const current = stack.pop();
        visited.push(current);

        for (let neighbor of graph[current]) {
          stack.push(neighbor);
        }
      }

      return visited;
    },
    recursion() {
      const visited = [];

      const rec = (graph, startingNode) => {
        visited.push(startingNode);
        for (let neighbor of graph[startingNode]) {
          rec(graph, neighbor);
        }
      };

      rec(graph, startingNode);
      return visited;
    },
  };
};

const breadthFirstSearch = (graph, startingNode) => {
  const visited = [];
  const queue = [startingNode];

  while (queue.length > 0) {
    const current = queue.shift();
    visited.push(current);

    for (let neighbor of graph[current]) {
      queue.push(neighbor);
    }
  }
  return visited;
};

console.log(depthFirstSearch(graph, 'a').stack());
console.log(depthFirstSearch(graph, 'a').recursion());
console.log(breadthFirstSearch(graph, 'a'));
