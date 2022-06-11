var removeElement = function (nums, val) {
  if (nums.length === 0) return 0;
  let start = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[start] = nums[i];
      start++;
    }
  }
  return start;
};

//solution:
//loop through the whole array
//set up a pointer at the beginning(start) and i (loops through array)
//if i is unequal to val then it can be in the final array
//so move that value to the beginning of the array
//on the first iteration it will just swap to its own spot because i and start are both zero
//start will be the number of values that are unequal to the val
console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
//[0,1,4,0,3]
// console.log(removeElement([2], 3));
// console.log(removeElement([2, 3, 3, 2], 3));
