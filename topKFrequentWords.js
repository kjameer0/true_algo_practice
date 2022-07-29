const {
  PriorityQueue,
  MinPriorityQueue,
  MaxPriorityQueue,
} = require("@datastructures-js/priority-queue");
var topKFrequent = function (words, k) {
  let res = [];
  let table = {};
  let q = new MaxPriorityQueue({
    compare: (a, b) => {
      if (a[1] === b[1]) return b[0].localeCompare(a[0]);
      else return a[1] - b[1];
    },
  });
  for (let x of words) {
    if (!table[x]) table[x] = 1;
    else table[x]++;
  }
  for (let y in table) {
    q.enqueue([y, table[y]]);
    if (q.size() > k) q.dequeue();
  }
  while (q.size()) res.push(q.dequeue()[0]);
  return res.reverse();
};
