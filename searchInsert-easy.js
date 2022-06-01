var searchInsert = function (nums, target) {
  let [left, right] = [0, nums.length - 1];
  let mid;
  while (left <= right) {
    console.log(left, right);
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return mid;
    else if (nums[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 2));
