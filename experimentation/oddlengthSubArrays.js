// var sumOddLengthSubarrays = function (arr) {
//   const map = new Map();
//   let mainSum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let sum = 0;
//     for (let j = i; j < arr.length; j++) {
//       sum += arr[j];
//       if ((j - i + 1) % 2 === 1) {
//         mainSum += sum;
//         const sub = arr.slice(i, j + 1);
//         console.log(sub);
//         sub.forEach((element) => {
//           map.set(element, (map.get(element) || 0) + 1);
//         });
//       }
//     }
//   }
//   console.log(map.get(2), `len ${arr.length}`);
//   return mainSum;
// };

function answerQueries(nums, queries) {
  nums = nums.sort((a, b) => a - b);
  let total = 0;
  function binary(nums, target) {
    let left = 0,
      right = nums.length - 1;
    while (left < right) {
      let mid = Math.floor((left + right) / 2);
      if (nums[mid] == target) return mid + 1;
      else if (nums[mid] > target) right = mid - 1;
      else left = mid + 1;
    }
    return nums[left] > target ? left : left + 1;
  }
  for (let i = 0; i < nums.length; i++) {
    total += nums[i];
    nums[i] = total;
  }
  for (let i = 0; i < queries.length; i++) {
    queries[i] = binary(nums, queries[i]);
  }
  return queries;
}

console.log(answerQueries([4, 5, 2, 1], [3, 10, 21]));
