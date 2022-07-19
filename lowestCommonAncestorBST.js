var lowestCommonAncestor = function (root, p, q) {
  if (p.val < root.val && q.val < root.val)
    return lowestCommonAncestor(root.left, p, q);
  else if (p.val > root.val && q.val > root.val)
    return lowestCommonAncestor(root.right, p, q);
  else return root;
};

//if both nodes are greater or less then current, they MUST have
//another common parent, because a BST can only have a greater
//and less than child, so if theyre both greater, then something
//else must be above them as a parent
var lowestCommonAncestor2 = function (root, p, q) {
  let res;
  function trav(root, p, q) {
    if (!root) return;
    else {
      if (p.val < root.val && q.val < root.val) trav(root.left, p, q);
      else if (p.val > root.val && q.val > root.val) trav(root.right, p, q);
      else {
        res = root;
        return;
      }
    }
  }
  trav(root, p, q);
  return res;
};
