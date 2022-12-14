var countTriplets = function (arr) {
  if (arr.length < 2) return 0;
  var xors = [arr[0]];
  for (var i = 1; i < arr.length; i++) xors[i] = xors[i - 1] ^ arr[i];
  var dp = [0, arr[0] === arr[1]];
  for (var idx = 2; idx < arr.length; idx++) {
    var k = idx;
    var rightXor = 0;
    dp[idx] = dp[idx - 1];
    for (var j = k; j > 0; j--) {
      rightXor ^= arr[j];
      for (var i = j - 1; i >= 0; i--) {
        var leftXor = xors[j - 1];
        if (i > 0) leftXor ^= xors[i - 1];
        if (leftXor === rightXor) {
          dp[idx]++;
        }
      }
    }
  }
  return dp[arr.length - 1];
};
