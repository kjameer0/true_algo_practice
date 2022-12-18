/*Given an array of integers arr.

We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).

Let's define a and b as follows:

a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
Note that ^ denotes the bitwise-xor operation.

Return the number of triplets (i, j and k) Where a == b.

*/
var countTriplets = function (arr) {
  if (arr.length < 2) return 0;
  var xors = [arr[0]];
  for (var l = 1; l < arr.length; l++) xors[l] = xors[l - 1] ^ arr[l];
  console.log(xors);
  var dp = [0, arr[0] === arr[1]];
  for (var idx = 2; idx < arr.length; idx++) {
    var k = idx,
      rightXor = 0;
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
  console.log(dp);
  return dp[arr.length - 1];
};

//console.log(countTriplets([2, 3, 1, 6, 7]));
function countBits(n) {
  let ans = new Array(n + 1).fill(0);
  let x = 0,
    b = 1;
  // # [0, b) is calculated
  while (b <= n) {
    // # generate [b, 2b) or [b, n) from [0, b)
    while (x < b && x + b <= n) {
      ans[x + b] = ans[x] + 1;
      x += 1;
    }
    x = 0; //# reset x
    b = b << 1; //# b = 2b
  }
  return ans;
}
