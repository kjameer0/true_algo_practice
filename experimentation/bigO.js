let arr2 = [1, 2, 3, 4, 5, 6];
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}
//O(n)
console.log(sum(arr2));
// return arr.reduce((accum, current) => (accum += current), 0);
