function sortedSquaredArray(array) {
  // Write your code here. -10 -2 0 5 6 7 8 9
  let res = Array(array.length);
  let left = 0;
  let right = array.length - 1;
  for (let index = array.length - 1; index >= 0; index--) {
    let r = array[right] ** 2;
    let l = array[left] ** 2;
    if (l > r) {
      res[index] = l;
      left++;
    } else {
      res[index] = r;
      right--;
    }
  }
  return res;
}
