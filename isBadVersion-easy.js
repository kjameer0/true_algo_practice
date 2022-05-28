var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    let [left, right] = [1, n];
    let mid;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) return mid;
        else right = mid;
      } else {
        if (isBadVersion(mid + 1)) return mid + 1;
        else left = mid + 1;
      }
    }
  };
};
