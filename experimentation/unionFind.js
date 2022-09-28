const countComponents = function (n, edges) {
  const UF = Array.from({ length: n }, (_, i) => i);
  edges.forEach(([e1, e2]) => union(e1, e2));
  console.log(UF);
  return UF.filter((c, i) => c == i).length;

  function union(c1, c2) {
    const p1 = find(c1),
      p2 = find(c2);
    if (p1 != p2) UF[p1] = p2;
  }

  function find(c) {
    if (c != UF[c]) UF[c] = find(UF[c]);
    return UF[c];
  }
};
console.log(
  countComponents(7, [
    [0, 1],
    [1, 2],
    [2, 0],
    [3, 4],
    [5, 3],
    [5, 6],
  ])
);
