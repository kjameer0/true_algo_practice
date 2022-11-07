function odd(arr) {
  let max = -Infinity;
  arr.forEach((e) => {
    if (e % 2 === 1) {
      max = Math.max(e, max);
    }
  });
  return max;
}
