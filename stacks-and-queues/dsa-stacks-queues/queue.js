// const LinkedList = require("../../arrays-linked-lists/dsa-arrays-linked-lists-solution/linked-list")

/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  first = null;
  last = null;
  size = 0;
  

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    let newNode = new Node(val);
    
    //if queue empty
    if (this.size ===0){
      this.first = newNode;
      this.last = newNode;
    } else{
      this.last.next = newNode;
      this.last = newNode;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if(this.size===0){
      throw new Error("Queue is empty");
    }

    let val = this.first.val;
    this.first=this.first.next;
    this.last = this.size ===1 ? null : this.last;
    this.size--;
    return val;

  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this.first.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return this.size===0 ? true : false;
  }
}

module.exports = Queue;
