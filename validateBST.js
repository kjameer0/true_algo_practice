function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

var isValidBST = function (root) {
  let arr = [];
  let valid = true;
  function traverse(root) {
    if (!root) return;
    else {
      if (root.left) {
        traverse(root.left);
      }
      arr.push(root.val);
      if (arr.length > 1 && arr[arr.length - 1] <= arr[arr.length - 2]) {
        valid = false;
      }
      traverse(root.right);
    }
  }
  traverse(root);
  return valid;
};
