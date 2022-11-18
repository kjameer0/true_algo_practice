/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var numSubseq = function (nums, target) {
  nums.sort((a, b) => {
    return a - b;
  });
  let i = 0,
    j = nums.length - 1,
    count = 0,
    mod = 10 ** 9 + 7;

  let powers = pow(2, nums.length, mod);

  while (i <= j) {
    if (nums[i] + nums[j] > target) {
      j -= 1;
    } else {
      count = (count + powers[j - i]) % mod;
      i += 1;
    }
  }

  return count % mod;
};

let pow = (base, power, mod) => {
  let powers = [1],
    res = 1;
  for (let i = 1; i <= 50; i++) {
    res = (res * base) % mod;
    powers.push(res);
  }
  console.log(powers);
  return powers;
};
//console.log(numSubseq([3, 3, 6, 7], 10));
function two() {
  let power = 0;
  let n = 1;
  let x = 1;
  while (power <= 30) {
    n = 2 ** power;
    x = 2 ** power % (10 ** 9 + 7);
    console.log(power, n);
    console.log(power, x);
    power++;
  }
}
//two();
console.log(2 ** 31);
