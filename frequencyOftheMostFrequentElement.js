/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxFrequency = function (nums, k) {
  nums = nums.sort((a, b) => a - b);
  let max = 1;
  let r = 0,
    l = 0;
  let total = 0;
  while (r < nums.length) {
    total += nums[r];
    while (nums[r] * (r - l + 1) > total + k) {
      total -= nums[l++];
    }
    max = Math.max(max, r - l + 1);
    r++;
  }
  return max;
};
/*
 this

 */
