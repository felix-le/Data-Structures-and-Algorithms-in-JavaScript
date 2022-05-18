/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    
};

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;

    //Length
    this.length = 0;
  }

  //Push-front
  pushFront(value) {
    let node = new Node(value);

    node.next = this.head;

    this.head = node;

    this.length++;
  }

  //Pop-front
  popFront() {
    if (this.head != null) {
      this.head = this.head.next;
    }
    this.length--;
  }

  //Push-back
  pushBack(value) {
    let node = new Node(value);

    if (this.head === null) {
      this.head = node;
    } else {
      let currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
    this.length++;
}};

function findElement(index) {
  let currentNode = this.head;
  let count = 0;

  while (currentNode) {
    if (count === index) {  // found the element
      return currentNode;
    }

    count++;  // increment counter
    currentNode = currentNode.next;  // move to next node
  }

  return -1;
};