const largestComponent = (graph) => {
  let longest = 0;
  const visited = new Set();

  for (const node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > longest) longest = size;
  }
  return longest;
};

const exploreSize = (graph, current, visited) => {
  if (visited.has(String(current))) return 0;

  visited.add(String(current));
  let size = 1;

  for (const neighbor of graph[String(current)]) {
    size += exploreSize(graph, neighbor, visited);
  }
  return size;
};

const graph = {
  0: [8, 1, 5],
  1: [0],
  5: [0, 8],
  8: [0, 5],
  2: [3, 4],
  3: [2, 4],
  4: [3, 2],
};

console.log(largestComponent(graph));
