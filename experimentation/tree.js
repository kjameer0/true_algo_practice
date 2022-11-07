function makeTree(n) {
  for (let i = 1; i <= n; i++) {
    let leftSpace = n - i;
    console.log(" ".repeat(leftSpace) + "*".repeat(i + i - 1));
  }
}
makeTree(10);
