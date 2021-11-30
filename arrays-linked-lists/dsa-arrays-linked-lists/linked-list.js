"use strict";

/** Node: node for a singly linked list. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  head = null;
  tail = null;
  length = 0;

  constructor(vals = []) {
    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
 
    let newNode = new Node(val);

    if (this.head === null){
      this.head = newNode;
    }

    if (this.tail !== null) {
      this.tail.next = newNode;
    }
    
    this.tail = newNode;
    this.length++;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    
    let newNode = new Node(val);
    newNode.next = this.head;

    this.head = newNode;
    this.length++;

    if (this.tail === null) this.tail = newNode;
  }

  /** pop(): return & remove last item. */

  pop() {
    //find 2nd to last item, make its next null and update to tail
    //return old tail
    let current = this.head;
    let last = this.tail;

    if (this.length ===1){
      this.head = null;
      this.tail = null;
      this.length--;
      return last.val;
    }

    while (current !== null){
      if (current.next === this.tail){
        current.next = null;
        this.tail = current;
        this.length--;
        return last.val;
      }
      current = current.next;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    let first = this.head;

    if (this){
      this.head = this.length>1 ? this.head.next : null;
      this.tail = this.length>1 ? this.tail : null;
      this.length--;
      return first.val;
    }
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0;
    let current = this.head;
    if (idx<this.length){
      while(count<idx){
        current = current.next;
        count++;
      }
      return current.val;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let count = 0;
    let current = this.head;
    if (idx<this.length){
      while(count<idx){
        current = current.next;
        count++;
      }
      current.val=val;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let count = 0;
    let current = this.head;
    let newNode = new Node(val);
    
    if (this.length===0){
      this.head = newNode;
      this.tail = newNode;
    } else if (idx===this.length){
      this.tail.next = newNode;
      this.tail=newNode;
    } else if (idx<this.length){
      while(count<idx-1){
        current = current.next;
        count++;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
    this.length++;
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let count = 0;
    let current = this.head;

    //1-item list
    if (this.length===1){
      this.head = null;
      this.tail = null;
      this.length--;
      return current.val;
    }

    //more item lists
    if (idx<this.length){
      while(count<idx-1){
        current = current.next;
        count++;
      }
      //remove from head
      if (idx===0){
        this.head=this.head.next;
        //remove from tail
      } else if (idx ===this.length-1){
        this.tail=current;
      }
      const removed = current.next;
      current.next = current.next.next;
      this.length--;
      return removed.val;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    let current = this.head;
    let sum = 0;
    let count = 0;
    while (current!==null){
      sum+=current.val;
      count++;
      current = current.next;
    }
    return count ? sum/count : 0 ;
  }
}

module.exports = LinkedList;
