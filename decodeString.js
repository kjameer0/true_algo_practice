var decodeString = function (s) {
  const stack = [];
  let num = "",
    curStr = "";

  for (const c of s) {
    if (c >= "0" && c <= "9") {
      num += c;
    } else if (c === "[") {
      stack.push(num);
      stack.push(curStr);
      num = "";
      curStr = "";
    } else if (c === "]") {
      console.log(curStr, stack);
      curStr = stack.pop() + curStr.repeat(Number(stack.pop()));
    } else {
      curStr += c;
    }
  }

  return curStr;
};
console.log(decodeString("3[a2[c]]"));
