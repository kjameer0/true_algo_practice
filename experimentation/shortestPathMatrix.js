function short(mat, sr, sc, tr, tc) {
  let min = Infinity;
  let vis = [];
  let rows = mat.length;
  let cols = mat[0].length;
  for (let i = 0; i < rows; i++) {
    vis.push(Array(cols).fill(false));
  }
  function travel(r, c, tr, tc, count = 0) {
    if (r === tr && c === tc) min = Math.min(min, count);
    else if (vis[r][c] || mat[r][c] === 0) return;
    else {
      vis[r][c] = true;
      if (r + 1 < rows) travel(r + 1, c, tr, tc, count + 1);
      if (r - 1 >= 0) travel(r - 1, c, tr, tc, count + 1);
      if (c + 1 < cols) travel(r, c + 1, tr, tc, count + 1);
      if (c - 1 < cols) travel(r, c - 1, tr, tc, count + 1);
    }
  }
}
