var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left <= right) {
    console.log("before", left, right, mid);
    mid = Math.floor((left + right) / 2);
    console.log(mid);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
    console.log("after", left, right, mid);
  }
  return left;
};
console.log(searchInsert([1, 3, 5, 6, 8, 10], 77));
