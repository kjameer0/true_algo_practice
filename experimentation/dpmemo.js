var lengthOfLongestSubstring = function (s) {
  let map = new Map();
  let max = 0;
  let start = 0;
  for (let i = 0; i < s.length; i++) {
    console.log(map, start);
    let char = s[i];
    if (map.has(char)) {
      start = Math.max(map.get(s[i]) + 1);
    }
    map.set(char, i);
    max = Math.max(i - start + 1, max);
  }
  return max;
};

console.log(lengthOfLongestSubstring("abba"));
