var topKFrequent = function (words, k) {
  let table = {};
  console.log(words);
  words.forEach((e) => {
    if (table[e]) table[e]++;
    else table[e] = 1;
  });
  console.log(Object.keys(table));
  return Object.keys(table)
    .sort()
    .sort((a, b) => {
      return table[b] - table[a];
    })
    .splice(0, k);
};

let arr = [
  "the",
  "day",
  "is",
  "sunny",
  "the",
  "the",
  "the",
  "sunny",
  "is",
  "is",
];
let arr2 = ["bo", "aaa", "bb", "a"];
console.log(topKFrequent(arr, 4));
