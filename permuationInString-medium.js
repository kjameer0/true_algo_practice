var checkInclusion = function (s1, s2) {
  const permutationReference = {};
  for (let i = 0; i < s1.length; i++) {
    if (!permutationReference.hasOwnProperty(s1[i])) {
      permutationReference[s1[i]] = 1;
    } else permutationReference[s1[i]]++;
  }
  let s2Ref = {};
  for (let start = 0; start < s2.length; start++) {
    let currentLetter = s2[start];
    if (permutationReference[currentLetter]) {
      if (s2Ref[currentLetter]) s2Ref[currentLetter]++;
      else s2Ref[currentLetter] = 1;
    } else s2Ref = {};
    if (
      Object.keys(s2Ref).length === Object.keys(permutationReference).length
    ) {
      for (let prop in s2Ref) {
        if (s2Ref[prop] !== permutationReference[prop]) {
          s2Ref = {};
          break;
        }
      }
      if (
        Object.keys(s2Ref).length === Object.keys(permutationReference).length
      ) {
        return true;
      }
    }
  }
  return false;
};

console.log(checkInclusion("adc", "dcda"));
