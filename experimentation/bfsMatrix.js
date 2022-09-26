let mat = [
  [1, 0, 0],
  [1, 1, 1],
  [1, 1, 1],
];
let updateMatrix = function (mat) {
  let q = [];
  let rows = mat.length;
  let cols = mat[0].length;
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) q.push([i, j, 0]);
      else mat[i][j] = Infinity;
    }
  }
  let dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (q.length) {
    let pos = q.shift();
    if (mat[pos[0]][pos[1]] > pos[2]) mat[pos[0]][pos[1]] = pos[2];
    dir.forEach((d) => {
      let r = pos[0] + d[0];
      let c = pos[1] + d[1];
      if (r >= 0 && r < rows && c >= 0 && c < cols) {
        if (mat[r][c] === Infinity) q.push([r, c, pos[2] + 1]);
      }
    });
  }
  return mat;
};
//console.log(updateMatrix2(mat));

function updateMatrix2(mat) {
  let rows = mat.length;
  let cols = mat[0].length;
  let q = [];
  for (let i = 0; i < mat.length; i++) {
    for (let j = 0; j < mat[0].length; j++) {
      if (mat[i][j] === 0) q.push([i, j, 0]);
      else mat[i][j] = Infinity;
    }
  }
  let dir = [
    [1, 0],
    [-1, 0],
    [0, 1],
    [0, -1],
  ];
  while (q.length) {
    let pos = q.shift();
    if (mat[pos[0]][pos[1]] > pos[2]) {
      mat[pos[0]][pos[1]] = pos[2];
    }
    dir.forEach((d) => {
      let next = [pos[0] + d[0], pos[1] + d[1], pos[2] + 1];
      if (next[0] > -1 && next[0] < rows) {
        if (next[1] > -1 && next[1] < cols) {
          if (mat[next[0]][next[1]] === Infinity) q.push(next);
        }
      }
    });
  }
  return mat;
}

let matDistance = function (mat) {
  //what value am i passing between calls?
  //do i still use a queue
  let rows = mat.length;
  let cols = mat[0].length;
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (mat[i][j] === 0) continue;
      mat[i][j] = Infinity;
      if (i - 1 >= 0) mat[i][j] = Math.min(mat[i][j], 1 + mat[i - 1][j]);
      if (j - 1 >= 0) mat[i][j] = Math.min(mat[i][j], mat[i][j - 1]);
    }
  }
  for (let i = rows - 1; i >= 0; i--) {
    for (let j = cols - 1; j >= 0; j--) {
      if (mat[i][j] === 0) continue;
      if (i + 1 < rows) mat[i][j] = Math.min(mat[i][j], 1 + mat[i + 1][j]);
      if (j + 1 < cols) mat[i][j] = Math.min(mat[i][j], 1 + mat[i][j + 1]);
    }
  }
  return mat;
};
// console.log([1, 0, 0], [1, 1, 1], [1, 1, 1]);
// console.log(
//   matDistance([
//     [1, 0, 0],
//     [1, 1, 1],
//     [1, 1, 1],
//   ])
// );

var updateMatrix3 = function (mat) {
  const m = mat.length,
    n = mat[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (mat[i][j] === 0) continue;
      mat[i][j] = Infinity;
      if (i - 1 >= 0) mat[i][j] = Math.min(mat[i][j], 1 + mat[i - 1][j]);
      if (j - 1 >= 0) mat[i][j] = Math.min(mat[i][j], 1 + mat[i][j - 1]);
    }
  }
  console.log(mat);
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (mat[i][j] === 0) continue;
      if (i + 1 < m) mat[i][j] = Math.min(mat[i][j], 1 + mat[i + 1][j]);
      if (j + 1 < n) mat[i][j] = Math.min(mat[i][j], 1 + mat[i][j + 1]);
    }
  }

  return mat;
};
console.log(
  updateMatrix3([
    [1, 0, 0],
    [1, 1, 1],
    [1, 1, 1],
  ])
);
