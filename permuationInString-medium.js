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
console.log(checkInclusion("aboa", "eidababbabbaaooo"));
//console.log(checkInclusion("aab", "eithbaba"));
// console.log(checkInclusion("rmqqh", "nrsqrqhrymf"));
