var merge = function (nums1, m, nums2, n) {
  let end = n + m - 1; //first spot to place largest number
  let endNums1 = m - 1;
  let endNums2 = n - 1;
  while (endNums1 >= 0 && endNums2 >= 0) {
    let l = nums1[endNums1];
    let r = nums2[endNums2];
    if (r > l) {
      nums1[end--] = r;
      endNums2--;
    } else {
      nums1[end--] = l;
      endNums1--;
    }
  }
  while (endNums2 >= 0) {
    nums1[end--] = nums2[endNums2--];
  }
  return nums1;
};
console.log(merge([10, 20, 30, 0, 0, 0], 3, [5, 8, 9], 3));

/*
algorithm:
1. set up pointers to look at the ends of each array
2. set pointer to look at where the first position to place largest
number is
3. while there are numbers to look at left in both arrays
  4. check if nums1 or nums 2 is greater
  5. place the greater value where the end pointer is
  6. move pointers back 1
7. while the second array still has shit not looked at
  8.put that shit into the first array at the end pointer
*/
