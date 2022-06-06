//largest possiblt table size
var lengthOfLongestSubstring = function (s) {
  let result = 0;
  let table = new Map();
  let start = 0;
  for (let end = 0; end < s.length; end++) {
    if (table.has(s[end])) {
      start = Math.max(start, table.get(s[end]) + 1);
    }
    table.set(s[end], end);
    result = Math.max(result, end - start + 1);
  }
  return result;
};

console.log(lengthOfLongestSubstring("dferdrtthj"));
