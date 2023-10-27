export function TrieNode(char, parent) {
  this.char = char;
  this.parent = parent;
  this.children = {};
  this.isWord = false;
}

export function Trie() {
  this.root = new TrieNode('', null);
  this.insert = function(word) {
    let node = this.root;
    for (let i = 0; i <  word.length; i++) {
      let char = word[i];
      if (node.children[char]) {
        node = node.children[char];
        continue;
      }
      node.children[char] = new TrieNode(char, node);
      node = node.children[char];
    }
    node.isWord = true;
  }
}
