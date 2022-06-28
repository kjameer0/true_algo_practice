var maxProfit = function (prices) {
  let currentMax = 0;
  let left = 0;
  let right = 1;
  while (right < prices.length) {
    let gap = prices[right] - prices[left];
    if (prices[left] < prices[right]) {
      currentMax = currentMax > gap ? currentMax : gap;
      right++;
    } else if (prices[left] >= prices[right]) {
      left = right;
      right = left + 1;
    }
  }
  return currentMax;
};
//left right
//let current max
// while right <length
//if left < right compare current max
//right++
//if left >= right left = right
