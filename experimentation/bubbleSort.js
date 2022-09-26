function bubSort(arr) {
  let hasSwapped = true;
  while (hasSwapped) {
    hasSwapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        hasSwapped = true;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
  return arr;
}

// Optimized javaScript implementation
// of Bubble sort
// An optimized version of Bubble Sort
function bubbleSort(arr, n) {
  var i, j, temp;
  var swapped;
  for (i = 0; i < n - 1; i++) {
    swapped = false;
    for (j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        swapped = true;
      }
    }
    if (swapped == false) break;
  }
  return arr;
}

function bubble2(arr) {
  let sortedBeginning = arr.length;
  while (0 < sortedBeginning--) {
    let hasSwapped = false;
    for (let i = 0; i < sortedBeginning; i++) {
      if (arr[i] > arr[i + 1]) {
        hasSwapped = true;
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
    if (!hasSwapped) break;
  }
  return arr;
}
console.log((-2).toString(2));
