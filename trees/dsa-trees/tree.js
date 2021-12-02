/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  /** sumValues(): add up all of the values in the tree. */

  sumValues() {
    let stack=[this.root];
    let sum=0;
    if (this.root){
      while (stack.length) {
        let current = stack.pop();
        sum+=current.val;
        for (let child of current.children){
          stack.push(child);
        }
      }
    }
    return sum;
  }

  /** countEvens(): count all of the nodes in the tree with even values. */

  countEvens() {
    if (!this.root) return 0;
    let count = this.root.val %2 ===0 ? 1 : 0;

    function countHelper(node){
      for (let child of node.children){
        if (child.val % 2 ===0){
          count++;
        }
        if (child.children.length>0){
          countHelper(child);
        }
      }
    }
    countHelper(this.root);
    return count;
  }

  /** numGreater(lowerBound): return a count of the number of nodes
   * whose value is greater than lowerBound. */

  numGreater(lowerBound) {
    if (!this.root) return 0;
    let count = this.root.val>lowerBound ? 1 : 0; 

    function helper(node){
      for (let child of node.children){
        if (child.val>lowerBound){
          count++;
        }
        if (child.children.length>0){
          helper(child);
        }
      }
    }
    helper(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
