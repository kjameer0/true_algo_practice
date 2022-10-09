class Node {
  constructor(val) {
    this.value = val || "";
    this.children = {};
    this.end = false;
  }
}

class WordDictionary {
  constructor(val) {
    this.root = new Node(val);
  }
  addWord(word) {
    let root = this.root;
    for (let char of word) {
      if (!root.children[char]) {
        root.children[char] = new Node(char);
      }
      root = root.children[char];
    }
    root.end = true;
  }
  search(word) {
    function dfs(root, i) {
      if (i === word.length) return root.end || false;
      const char = word[i];
      if (char === ".") {
        for (let j of root.children) {
          if (dfs(root.children[j], i + 1)) return true;
        }
      } else if (root.children[char]) return dfs(root.children[char], i + 1);
      return false;
    }
    return dfs(this.root, 0);
  }
}
