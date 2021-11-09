const matrix = [
  [0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 0, 0, 1, 0, 0],
];

const explore = (matrix, r, c, visited) => {
  const rowInbouds = 0 <= r && r < matrix.length;
  const colInbouds = 0 <= c && c < matrix[0].length;

  if (!rowInbouds || !colInbouds) return 0;

  const key = `${r},${c}`;
  const value = matrix[r][c];
  if (visited.has(key)) return 0;
  if (!value) return 0;

  visited.add(key);
  let size = 1;

  [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ].forEach((coords) => {
    const neighR = r + coords[0];
    const neighC = c + coords[1];

    size += explore(matrix, neighR, neighC, visited);
  });

  return size;
};

const minimumIsland = (matrix) => {
  const visited = new Set();
  let minIsland = Infinity;

  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < matrix[0].length; c++) {
      const size = explore(matrix, r, c, visited);
      if (size && size < minIsland) {
        minIsland = size;
      }
    }
  }

  return minIsland;
};

console.log(minimumIsland(matrix));
