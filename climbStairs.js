var climbStairs = function (n, ref = {}) {
  if (n in ref) return ref[n];
  if (n <= 2) return n;
  ref[n] = climbStairs(n - 1, ref) + climbStairs(n - 2, ref);
  return ref[n];
};

console.log(climbStairs(5));
