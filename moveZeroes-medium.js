var moveZeroes = function (nums) {
  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[left++] = nums[i];
    }
  }
  for (let j = left; j < nums.length; j++) {
    nums[j] = 0;
  }
};
console.log(moveZeroes([0, 1, 0, 3, 12]));
