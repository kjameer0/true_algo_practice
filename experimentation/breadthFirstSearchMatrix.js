let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];
function beef(arr) {
  let visited = [];
  let queue = [[0, 0]];
  let rows = arr.length;
  let cols = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    visited.push(Array(arr[i].length).fill(false));
  }
  let res = [];
  let r, c;
  while (queue.length) {
    [r, c] = queue.shift();
    if (visited[r][c]) continue;
    visited[r][c] = true;
    res.push(arr[r][c]);
    if (r - 1 >= 0) queue.push([r - 1, c]);
    if (c + 1 < cols) queue.push([r, c + 1]);
    if (r + 1 < rows) queue.push([r + 1, c]);
    if (c - 1 >= 0) queue.push([r, c - 1]);
  }
  return res;
}
console.log(beef(arr));
