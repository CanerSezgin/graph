const edges = [
  ['w', 'x'],
  ['x', 'y'],
  ['z', 'y'],
  ['z', 'v'],
  ['w', 'v'],
];

const createGraph = (edges) => {
  const graph = {};

  for (const edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];

    graph[a].push(b);
    graph[b].push(a);
  }

  return graph;
};

const findShortestPath = (edges, src, dst) => {
  const graph = createGraph(edges);
  const visited = new Set([src]);
  const queue = [{ node: src, distance: 0 }];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current.node === dst) return current.distance;

    for (const neighbor of graph[current.node]) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push({ node: neighbor, distance: current.distance + 1 });
      }
    }
  }

  return -1;
};

console.log(findShortestPath(edges, 'w', 'z'));
