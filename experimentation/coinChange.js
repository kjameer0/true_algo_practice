var coinChange = function (coins, amount) {
  //hashmap amount#idx

  let map = new Map();
  function backtrack(amount, total) {
    if (map.has(amount)) return map.get(amount);
    if (amount === 0) return total;
    if (amount < 0) return Infinity;
    let min = Infinity;
    for (let i = 0; i < coins.length; i++) {
      let res = backtrack(amount - coins[i], total + 1);
      min = Math.min(min, res);
    }
    map.set(amount, min);
    return map.get(amount);
  }
  return backtrack(amount, 0);
};

console.log(coinChange([1, 2, 5], 11));

var arrangeCoins = function (n) {
  let stairs = 0;
  while (stairs <= n) {
    n -= stairs;
    stairs++;
  }
  return stairs - 1;
};

console.log(arrangeCoins(9));
