class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (!this.root) {
      this.root = new Node(val);
      return this
    }

    let current = this.root;
    //if smaller than node, move left
    //if larger than node, move right
    //insert when no more nodes
    while (current) {
      if (val < current.val) {
        if (!current.left) {
          current.left = new Node(val);
          return this;
        } else {
          current = current.left;
        }
      } else {
        if (!current.right) {
          current.right = new Node(val);
          return this;
        } else {
          current = current.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (node === null) {
      this.root = new Node(val);
      return this;
    }
    if (val < node.val) {
      if (node.left === null) {
        node.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.left);
    } else {
      if (node.right === null) {
        node.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val, current = this.root) {
    while (current) {
      if (val === current.val) {
        return current;
      }
      current = (val < current.val) ? current.left : current.right;
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, current = this.root) {
    if (!current) return undefined;
    if (current.val === val) {
      return current;
    }
    return (current.val < val
      ? this.findRecursively(val, current.right)
      : this.findRecursively(val, current.left)
    );
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, visited = []) {
    let stack = [node];
    while (stack.length > 0) {
      let current = stack.pop();
      visited.push(current.val);
      if (current.left) {
        this.dfsPreOrder(current.left, visited);
      }
      if (current.right) {
        this.dfsPreOrder(current.right, visited);
      }
    }
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, visited = []) {
    if (node === null) return;
    if (node.left) {
      this.dfsInOrder(node.left, visited)
    }
    visited.push(node.val);
    if (node.right) {
      this.dfsInOrder(node.right, visited)
    }
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, visited = []) {
    if (node === null) return;
    if (node.left) {
      this.dfsPostOrder(node.left, visited)
    }
    if (node.right) {
      this.dfsPostOrder(node.right, visited)
    }
    visited.push(node.val);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }
}

module.exports = BinarySearchTree;
