// Every node has another pointer, to the previous node

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push

  push(val) {
    // create a new node with the value passed to the function

    let newNode = new Node(val);

    // if the head property is null -> set the head and tail to be the newly created node

    if (!this.head) {
      this.tail = newNode;
      this.head = newNode;
    }

    // set the next property on the tail to be that node
    this.tail.next = newNode;
    // set the previous property on the newly created node to be the tail
    newNode.prev = this.tail;

    // set the tail to be the newly created node
    this.tail = newNode;

    // increment the length
    this.length++;

    // return the doubly linked list
    return this;
  }

  pop() {
    // If there is no head, return undefined
    if (!this.head) return undefined;
    // store the current tail in a variable to return later

    let poppedNode = this.tail;

    // if the length is 1, set the head and tail to be null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    }
    // update the tail to be the previous Node

    this.tail = poppedNode.prev;

    // set the newTail's next to null
    this.tail.next = null;
    poppedNode.prev = null;

    // Decrement the length
    this.length--;
    // Return the value removed
    return poppedNode;
  }

  shift() {
    // if length is 0, return undefined
    if (this.length === 0) return undefined;
    // store the current head property in a variable (old head)
    let oldHead = this.head;
    // length = 1 -> head null, tail null
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      // update the head to be the next of the old head

      this.head = oldHead.next;

      // set the head's prev property to null
      this.head.prev = null;

      // set the old head's next to null
      oldHead.next = null;
    }

    // length -1
    this.length--;

    // return old head

    return oldHead;
  }

  unshift(val) {
    // create a new node with the value passed to the function
    let newNode = new Node(val);
    // length = 0 -> head, tail = new node

    if (this.length === 0) {
      this.tail = newNode;
      this.head = newNode;
    } else {
      // -- prev of head = new node
      let oldHead = this.head;
      // -- next of new node = head
      this.head = newNode;
      this.head.next = oldHead;
      oldHead.prev = this.head;
      // -- update the head = new node
    }
    this.length++;

    // increment the length
    // return the list
    return this;
  }
  get(i) {
    if (i >= this.length || i < 0) {
      return null;
    }
    if (!this.head) {
      return null;
    }

    const averageNum = this.length / 2;
    let counter;
    let currentNode;
    if (i <= averageNum) {
      counter = 0;
      currentNode = this.head;
      while (counter !== i) {
        currentNode = currentNode.next;
        counter++;
      }

      if (!currentNode) {
        return null;
      }
    } else {
      counter = this.length - 1;
      currentNode = this.tail; // from the beginning

      while (counter !== i) {
        currentNode = currentNode.prev;
        counter--;
      }

      if (!currentNode) {
        return null;
      }
    }
    return currentNode;
  }

  set(i, val) {
    let foundNode = this.get(i);
    if (!foundNode) {
      return false;
    } else {
      foundNode.val = val;
      return true;
    }
  }

  insert(i, val) {
    if (i < 0 || i > this.length) return false;
    if (i === 0) return this.unshift(val);

    if (i === this.length) return this.push(val);

    let newNode = new Node(val);
    let beforeNode = this.get(i - 1);
    let afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;
    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) return undefined;

    if (i === 0) return this.shift();

    if (i === this.length - 1) return this.pop();

    let removeNode = this.get(i);

    beforeNode = removeNode.prev;

    afterNode = removeNode.next;

    beforeNode.next = afterNode;

    afterNode.prev = beforeNode;

    removeNode.next = null;
    removeNode.prev = null;
    this.length--;
    return removeNode;
  }
}
let list = new DoublyLinkedList();
list.push(1);
list.push(2);
list.push(3);
