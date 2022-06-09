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
  }
  return permTable;
};

//is there a relationship between size and length
//yes actually, the difference between length and size is the number of duplicates
console.log(checkInclusion("gtyhug", "dfgrtryhgutgmhut"));
//console.log(checkInclusion("aab", "eithbaba"));
//console.log(checkInclusion("adc", "dcda"));
