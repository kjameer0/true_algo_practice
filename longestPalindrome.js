var longestPalindrome = function (s) {
  let map = new Map();
  let oddLetter = 0;
  let evenLetter = 0;
  let singleLetter = false;
  for (let i = 0; i < s.length; i++) {
    if (!map.has(s[i])) map.set(s[i], 1);
    else if (map.has(s[i])) map.set(s[i], map.get(s[i]) + 1);
  }
  map.forEach((value, key) => {
    if (value % 2 === 1) {
      if (!singleLetter) {
        oddLetter += value;
        singleLetter = true;
      } else oddLetter += value - 1;
    } else if (value % 2 === 0) evenLetter += value;
  });
  return evenLetter + oddLetter;
};

//space time analysis
// O 2n worst case if all characters are unique
//O n space because at worst all of the charcters are stored to memory

var longestPalindrome = function (s) {
  let chars = new Set();
  let count = 0;
  for (let char of s) {
    if (chars.has(char)) {
      count += 2;
      chars.delete(char);
    } else chars.add(char, 1);
  }
  return count + (chars.size > 0 ? 1 : 0);
};
