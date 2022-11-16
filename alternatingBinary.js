var minFlips = function (s) {
  let len = s.length;
  s += s;
  let min = Infinity,
    dif1 = 0,
    dif0 = 0,
    ref1 = "";
  for (let i = 0; i < s.length; i++) {
    ref1 += i % 2 === 0 ? "1" : "0";
  }
  let end,
    start = 0;
  for (end = 0; end < s.length; end++) {
    if (s[end] !== ref1[end]) dif1++;
    if (s[end] === ref1[end]) dif0++;
    if (end - start + 1 > len) {
      if (s[start] !== ref1[start]) dif1--;
      else dif0--;
      start++;
    }
    if (end - start + 1 === len) min = Math.min(min, dif1, dif0);
  }
  return min;
};
