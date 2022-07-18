var maxProfit = function (prices) {
  let max = 0;
  let lowest = Infinity;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < lowest) lowest = prices[i];
    else {
      max = max >= prices[i] - lowest ? max : prices[i] - lowest;
    }
  }
  return max;
};
