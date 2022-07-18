var preorder = function (root) {
  let res = [];
  let stack = root ? [root] : [];
  while (stack.length > 0) {
    let popped = stack.pop();
    res.push(popped.val);
    stack.push(...popped.children.reverse());
  }
  return res;
};
