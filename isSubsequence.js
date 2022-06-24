var isSubsequence = function (s, t) {
  let sCount = 0;
  for (let i = 0; i < t.length; i++) {
    if (s[sCount] === t[i]) sCount++;
  }
  return sCount === s.length;
};
