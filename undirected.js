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

const hasPath = (graph, src, dst, visited) => {
  console.log(visited, { src, dst });
  if (src === dst) return true;
  if (visited.has(src)) return false;

  visited.add(src);

  const neighbors = graph[src];
  for (const neighbor of neighbors) {
    if (hasPath(graph, neighbor, dst, visited)) {
      return true;
    }
  }

  return false;
};

const edges = [
  ['i', 'j'],
  ['k', 'i'],
  ['m', 'k'],
  ['k', 'l'],
  ['o', 'n'],
];

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = createGraph(edges);
  const visited = new Set();
  return hasPath(graph, nodeA, nodeB, visited);
};

console.log(undirectedPath(edges, 'j', 'm'));
