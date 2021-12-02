/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  /** minDepth(): return the minimum depth of the tree -- that is,
   * the length of the shortest path from the root to a leaf. */

  minDepth() {
    if(!this.root) return 0;
    let count = this.root ? 1 : 0; 
    function helper(node) {
      if(!node.left || !node.right) return 0;
      count++;
      return node.left ? helper(node.left) : helper(node.right);
    }
    helper(this.root);
    return count;
  }

  /** maxDepth(): return the maximum depth of the tree -- that is,
   * the length of the longest path from the root to a leaf. */

  maxDepth() {
    if(!this.root) return 0;
    let count = this.root ? 1 : 0; 
    function helper(node) {
      if(!node.left && !node.right) return 0
        count++;
      if(node.right){
        helper(node.right)
      }
      if(node.left){
        helper(node.left)
      }
    }
    helper(this.root);
    return count;
  }

  /** nextLarger(lowerBound): return the smallest value in the tree
   * which is larger than lowerBound. Return null if no such value exists. */

  nextLarger(lowerBound){
    //return null if there is no tree
    if (!this.root) return null;
    //update next largest while traversing through the tree and only update if 
    // node.val > lowerBound && node.val <next
    let next = Infinity;
    function traverse(node){
      if (!node) return;
      if (node.val>lowerBound && node.val<next){
        next = node.val;
      }
      traverse(node.right);
      traverse(node.left);
    }
    traverse(this.root);
    return next===Infinity ? null : next;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
