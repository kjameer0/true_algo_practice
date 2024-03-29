// Given a collection of intervals, [start, end], merge and return the overlapping intervals sorted in ascending order of their start times.

// Example
// intervals = [[7, 7], [2, 3], [6, 11], [1, 2]]

// The interval [1, 2] merges with [2, 3] while [7, 7] merges with [6, 11]. There are no more overlapping intervals. The answer is [[1, 3], [6, 11]].

// Function Description
// Complete the function getMergedIntervals in the editor below.
var merge = function (intervals) {
  let res = [];
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  });
  let start = intervals[0][0];
  let end = intervals[0][1];
  let sCurr, eCurr;
  for (let i = 0; i < intervals.length; i++) {
    sCurr = intervals[i][0];
    eCurr = intervals[i][1];
    if (sCurr > end) {
      res.push([start, end]);
      start = sCurr;
      end = eCurr;
    } else {
      let vals = [start, end, sCurr, eCurr].sort((a, b) => a - b);
      start = vals[0];
      end = vals[vals.length - 1];
    }
  }
  res.push([start, end]);
  return res;
};

function mergeOverlappingIntervals(array) {
  // Write your code here.
  array = array.sort((a, b) => a[0] - b[0]);
  let res = [];
  let merge, cur;
  cur = array[0];
  for (let i = 0; i < array.length - 1; i++) {
    if (cur[1] >= array[i + 1][0]) {
      merge = [cur[0], Math.max(cur[1], array[i + 1][1])];
      cur = merge;
    } else {
      res.push(cur);
      cur = array[i + 1];
    }
  }
  res.push(cur);
  return res;
}
