class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  // Push method
  push(data) {
    let node = new Node(data); // create a new node
    if (this.head === null) {
      // if the list is empty ==> head and tail are the same node
      this.head = node; // head is the new node
      this.tail = node; // tail is the new node
    } else {
      this.tail.next = node; // the new node is the next node of the tail
      this.tail = node; // the new node is the new tail
    }
    this.length++; // increase the length of the list
    return this; // return the list
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head; // set current to the head
    let newTail = current; // set newTail to the head
    while (current.next) {
      // while there is a next node
      newTail = current; // set newTail to the current node
      current = current.next; // set current to the next node
    }
    // when the loop is done, current is the last node
    this.tail = newTail; // set the new tail to the newTail
    this.tail.next = null; // set the next node of the new tail to null
    this.length--; // decrease the length of the list
    if (this.length === 0) {
      // if the list is empty
      this.head = null; // set the head to null
      this.tail = null; // set the tail to null
    }
    return current; // return the last node
  }
  shift() {
    if (!this.head) return undefined; // if list = empty => return undefined
    let currentHead = this.head; // get the head
    this.head = currentHead.next; // assign the head to the next node.
    if (this.length === 0) {
      this.tail = null; // set the tail is null
    }
    return currentHead;
  }

  unshift(data) {
    // if list = empty -> set the val is the head and tail
    let node = new Node(data);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    }
    // if list != empty -> set the head of the head is new node and the tail is current head.

    node.next = this.head;
    this.head = node;
    this.length++;
    return this;
  }
  // GET - Retrieving a node by it's position in the Linked List!
  get(index) {
    // If the index is less than zero or greater than or equal to the length of the list, return null
    if (index >= this.length || index < 0) {
      return null;
    }
    // If list is empty return null
    if (!this.head) {
      return null;
    }

    // loop  through the list until you reach the index and return the node at that specific index
    let count = 0;
    let currentNode = this.head; // set current node is the first node

    while (count !== index) {
      currentNode = currentNode.next;
      count++;
    }

    return currentNode;
  }

  set(index, val) {
    // validate index

    if (index >= this.length || index < 0) {
      return false;
    }
    // If list is empty return null
    if (!this.head) {
      return false;
    }
    // if the node is not found, return false
    let counter = 0;
    let current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }

    // if the node is found, set the value of that node to be the value passed to the function and return true

    if (!current) {
      return false;
    }
    current.data = val;
    return true;
  }

  // set(index, val) {
  //   var foundNode = this.get(index);
  //   if (foundNode) {
  //     foundNode.data = val;
  //     return true;
  //   }
  //   return false;
  // }

  insert(i, val) {
    // adding a node to the Linked List at a specific position

    if (i < 0 || i > this.length) return false;

    if (i === this.length) {
      return !!this.push(val);
    }
    if (i === 0) {
      // if the position is 0
      return !!this.unshift(val);
    }

    const prev = this.get(i - 1);
    const temp = prev.next;

    let newNode = new Node(val);
    prev.next = newNode;
    newNode.next = temp;

    this.length++;
    return true;
  }

  remove(i) {
    if (i < 0 || i >= this.length) return undefined;

    if (i === this.length - 1) {
      return this.pop();
    }
    if (i === 0) {
      returnthis.shift();
    }
    //get the prev node
    let prev = this.get(i - 1);
    // get the removed node
    let removed = prev.next;

    //assign value from removed to prev
    prev.next = removed.next;

    this.length--;
    return removed;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;

    let initNext;
    let initPrev;

    for (let i = 0; i < this.length; i++) {
      // Input
      // A is head of B
      // B is next of A

      // Out put

      // B is head of A
      // A is next of B

      // --> Create 2 variables for next and prev

      // set next is initial value
      // set prev is initial value;

      // set value for node.next
      initNext = node.next; //get value for node.next - stored the initial value of next
      node.next = initPrev; // set the value prev to be next value ==> a new next value = prev value

      // set value for node

      initPrev = node; //  get value of node - stored initial prev value
      node = initNext; // set the value next to be prev value ==> a new prev value = next value
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while (current) {
      arr.push(current.data);
      current = current.next;
    }
    console.log(arr);
  }
}

let list = new SinglyLinkedList();
list.push(100);
list.push(201);
list.push(250);
list.push(350);
