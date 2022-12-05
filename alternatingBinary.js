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

/*
Explanation: O(n) time
you can either:
1. move a bit from the front to the back of the string
2. swap a bit from 0 to 1 or vice versa
minimize the number of 2 moves to get an alternatig string of bits

you can rotate the string s s.length times before you start repeating
combinations. so just append the entire string to itself and use a sliding window
the window is valid if it is of length s.length.
so to build up to a valid window we get two reference strings:
1. 10101010 ref1 let dif1 = 0 to track differences between s and ref1
2. 01010101 ref0 let dif0 = 0 to track differences between s and ref0
these two strings represent the two possible alternating strings that
the original string s can turn into.
so at every iteration through the s string
1. if the newest character doesnt match ref1, dif1++;
2. if the newest character doesnt match ref0, dif0++;
if(end -start >original s.length) {
  if starting character !== ref1 dif1--
  if starting character !== ref0 dif0--
  start++
}
if(length of window is original string length) min(min, dif1, dif0)

return min


 */
