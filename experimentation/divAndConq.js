function merge(left, right) {
  let res = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) res.push(left.shift());
    else res.push(right.shift());
  }
  return [...res, ...left, ...right];
}
function mergeSort(arr) {
  if (arr.length === 1) return arr;
  else {
    let mid = Math.floor(arr.length / 2);
    let right = arr.splice(mid, mid);
    return merge(mergeSort([...arr]), mergeSort(right));
  }
}

let arr = [3, 4, 2, 1, 5, 6, 2, 11];
console.log(mergeSort(arr));

function merge2(left, right) {
  //only works if subarrays are sorted or len === 1
  let res = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      res.push(left.shift());
    } else res.push(right.shift());
  }
  return [...res, ...left, ...right];
}

function mergeSort2(arr) {
  if (arr.length < 2) return arr;
  let mid = Math.floor(arr.length / 2);
  let right = arr.splice(mid, mid);
  return merge2(mergeSort2(arr), mergeSort2(right));
}

console.log(mergeSort2([4, 3, 2, 1]));
