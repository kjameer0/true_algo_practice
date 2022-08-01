function longestPeak(array) {
  // Write your code here.
  let max = 0,
    i = 1;
  let l, r;
  while (i < array.length - 1) {
    let isPeak = array[i - 1] < array[i] && array[i + 1] < array[i];
    if (!isPeak) i++;
    else {
      l = i - 2;
      r = i + 2;
      while (l >= 0 && array[l] < array[l + 1]) l--;
      while (r < array.length && array[r] < array[r - 1]) r++;
      max = Math.max(max, r - l - 1);
      i = r;
    }
  }
  return max;
}
