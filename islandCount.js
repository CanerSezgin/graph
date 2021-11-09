const matrix = [
  [0, 1, 0, 0, 1, 0],
  [1, 1, 0, 0, 1, 0],
  [0, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 0],
  [0, 1, 0, 1, 1, 0],
  [0, 0, 0, 0, 0, 0],
];

const explore = (matrix, r, c, visited) => {
  const rowInbounds = 0 <= r && r < matrix.length;
  const colInbounds = 0 <= c && c < matrix[0].length;
  if (!rowInbounds || !colInbounds) return false;

  const key = `${r},${c}`;
  const value = matrix[r][c];

  if (visited.has(key)) return false;
  if (!value) return false;

  visited.add(key);

  [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ].forEach((coords) => {
    const neighR = r + coords[0];
    const neighC = c + coords[1];
    explore(matrix, neighR, neighC, visited);
  });

  return true;
};

const countIslands = (matrix) => {
  const visited = new Set();
  let noOfIslands = 0;

  for (let rowIndex = 0; rowIndex < matrix.length; rowIndex++) {
    const row = matrix[rowIndex];
    for (let colIndex = 0; colIndex < row.length; colIndex++) {
      if (explore(matrix, rowIndex, colIndex, visited)) {
        noOfIslands++;
      }
    }
  }

  return noOfIslands;
};

console.log(countIslands(matrix));
