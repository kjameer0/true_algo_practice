var checkInclusion = function (s1, s2) {
  let permTable = new Map();
  for (let i = 0; i < s1.length; i++) {
    if (!permTable.has(s1[i])) {
      permTable.set(s1[i], 1);
    } else {
      permTable.set(s1[i], permTable.get(s1[i]) + 1);
    }
  }
  let tableFors2 = new Map();
  let start = 0;
  for (let end = 0; end < s2.length; end++) {
    let currentLetter = s2[end];
    if (!tableFors2.has(currentLetter)) {
      tableFors2.set(currentLetter, 1);
    } else tableFors2.set(currentLetter, tableFors2.get(currentLetter) + 1);
    if (!permTable.has(currentLetter)) {
      while (start <= end) {
        tableFors2.set(s2[start], tableFors2.get(s2[start]) - 1);
        start++;
      }
    } else if (permTable.has(currentLetter)) {
      while (tableFors2.get(currentLetter) > permTable.get(currentLetter)) {
        tableFors2.set(s2[start], tableFors2.get(s2[start]) - 1);
        start++;
      }
    }
    if (s1.length === end - start + 1) return true;
  }
  return false;
};

//is there a relationship between size and length
//yes actually, the difference between length and size is the number of duplicates
//console.log(checkInclusion("aboa", "eidababbabbaaooo"));
//console.log(checkInclusion("aab", "eithbaba"));
// console.log(checkInclusion("rmqqh", "nrsqrqhrymf"));
var checkInclusion2 = function (s1, s2) {
  const len1 = s1.length,
    len2 = s2.length;
  if (len1 > len2) return false; //not possible to form a window with s2
  const count = Array(26).fill(0);
  for (let i = 0; i < len1; i++) {
    count[s1.charCodeAt(i) - 97]++;
    count[s2.charCodeAt(i) - 97]--;
  }
  //at this point the first s1.length characters are recored by
  // frequency so s2 letters are negative and s1 letters are positive
  if (!count.some((e) => e !== 0)) return true;
  for (let i = len1; i < len2; i++) {
    count[s2.charCodeAt(i) - 97]--;
    count[s2.charCodeAt(i - len1) - 97]++;
    if (!count.some((e) => e !== 0)) return true;
  }
  return false;
};

console.log(checkInclusion2("ab", "eidgaooo"));

//create array to track how many of each character
//add the chars from s1 to arr and subtract chars from s2
//that way if the window lands on just the string we want
//the negatives from the seconds string will offset
//the positives from the first string
