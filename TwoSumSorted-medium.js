var twoSum = function (numbers, target) {
  //for each element in the array, binary search for the complement
  for (let left = 0; left < numbers.length; left++) {
    let low = left + 1;
    let high = numbers.length - 1;
    let complement = target - numbers[left];
    while (low <= high) {
      let mid = Math.floor((low + high) / 2);
      if (numbers[mid] === complement) return [left + 1, mid + 1];
      else if (numbers[mid] < complement) low = mid + 1;
      else high = mid - 1;
    }
  }
};
console.log(twoSum([2, 7, 11, 15], 9));
