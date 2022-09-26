function flatArray(arr, count = 0) {
  if (!arr.length) return [];
  else {
    if (!Array.isArray(arr[0])) return [arr.shift()].concat(flatArray(arr));
    else return flatArray(arr.shift()).concat(flatArray(arr));
  }
}
console.log(flatArray([1, [2, 1], 3]));
/*
go to bottom
if either subtree contains 1
*/
