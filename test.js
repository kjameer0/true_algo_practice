var isPalindrome = function (s) {
  let max = 0;
  let maxString = "";
  for (let left = 1; left < s.length - 2; left++) {
    let start = left;
    let end = left;
    if (s[left + 1] === s[left]) {
      end = left + 1;
    }
    if (s[left - 1] === s[left]) {
      start = left - 1;
    }
    while (s[start] === s[end]) {
      start--;
      end++;
    }
    console.log(start, end);
    maxString =
      maxString.length >= end - start + 1 ? maxString : s.slice(start, end + 1);
    console.log(maxString);
  }
  return maxString;
};
console.log(isPalindrome("bbbbd"));

//baa

//find out if something is a palindrome
