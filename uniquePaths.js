var uniquePaths = function (m, n) {
  let grid = [];
  for (let i = 0; i < m; i++) grid.push(Array(n).fill(0));
  function trav(x, y) {
    if (x < 0 || x >= m) return;
    if (y < 0 || y >= n) return;
    else {
      if (x === m - 1 || y === n - 1) {
        grid[x][y] = 1;
        return;
      }
    }
  }
};
