var subarrayGCD = function (nums, k) {
  let count = 0;
  const gcdStore = new Map();
  function gcd(n, m) {
    if (gcdStore.has(`#${n}#${m}`)) return gcdStore.get(`#${n}#${m}`);
    let larg = Math.max(n, m);
    let small = Math.min(n, m);
    while (larg !== 0 && small !== 0) {
      let y = larg % small;
      larg = small;
      small = y;
    }
    gcdStore.set(`#${n}#${m}`, Math.max(small, larg));
    return gcdStore.get(`#${n}#${m}`);
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % k === 0) {
      let last = i;
      let div;
      while (last < nums.length && nums[last] % k === 0) {
        let current = nums[last];
        div = gcd(div, current);
        if (div === k) count++;
        last++;
      }
    }
  }
  return count;
};
