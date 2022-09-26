function permutation(arr) {
  let res = [];
  function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    return;
  }
  function backtrack(start, arr, end = arr.length) {
    if (start === arr.length - 1) {
      res.push(arr);
      return;
    } else {
      for (let i = start; i < end; i++) {
        swap(arr, start, i);
        backtrack(start + 1, arr.slice());
        swap(arr, start, i);
      }
    }
  }
  backtrack(0, arr);
  return res;
}

let arr = [];
console.log(permutation(arr));
//swapping front number
//running with

//find the permutation with current number is infront
//run function with next number swapped to front
