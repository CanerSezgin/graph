// has path between 2 nodes in Directed Acyclic Graph

const graph = {
  f: ['g', 'i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: [],
};

const hasPathRecursive = (graph, src, dst) => {
  if (src === dst) return true;

  for (const neighbor of graph[src]) {
    if (hasPathRecursive(graph, neighbor, dst) === true) {
      return true;
    }
  }

  return false;
};

const hasPathBreadthFirst = (graph, src, dst) => {
  const visited = [];
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();
    visited.push(current);
    console.log("BreadthFirst", { visited });
    if (current === dst) return true;

    const neighbors = graph[current];
    for (const neighbor of neighbors) {
      queue.push(neighbor);
    }
  }

  return false;
};

const hasPathDepthFirst = (graph, src, dst) => {
  const visited = [];
  const stack = [src];

  while (stack.length > 0) {
    const current = stack.pop();
    visited.push(current);
    console.log("DepthFirst", { visited });
    if (current === dst) return true;

    for (const neighbor of graph[current]) {
      stack.push(neighbor);
    }
  }

  return false;
};

console.log({
  recursive: hasPathRecursive(graph, 'f', 'h'),
  depthFirst: hasPathDepthFirst(graph, 'f', 'h'),
  breadthFirst: hasPathBreadthFirst(graph, 'f', 'h'),
});
