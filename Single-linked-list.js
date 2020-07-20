class _Node {
  constructor(value, next) {
    (this.value = value), (this.next = next);
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }
  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    } else {
      // move over looking for the end
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      // at the end, add a new node
      tempNode.next = new _Node(item, null);
    }
  }
  find(item) {
    // start at the head
    let currentNode = this.head;
    // if the list is empty
    if (!this.head) {
      return null;
    }
    // look for the item
    while (currentNode.value !== item) {
      // return null if you are at the end and you haven't found it - exit!
      if (currentNode.next === null) {
        return null;
      } else {
        currentNode = currentNode.next;
      }
    }
    // found it
    return currentNode;
  }
  remove(item) {
    // if the list is empty, return null
    if (!this.head) {
      return null;
    }
    // if the node to be removed is the head, make this.head.next the new head
    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }
    //otherwise, start at the beginning and look for it!
    let currentNode = this.head;
    // keep track of previous node
    let previousNode = this.head;
    while (currentNode.next !== null && currentNode.value !== item) {
      // save previous node
      previousNode = currentNode;
      // advance
      currentNode = currentNode.next;
    }
    // if the item isn't found, currentNode will become null when we exit the loop
    if (currentNode === null) {
      console.log("Item is not in this linked list");
      return;
    }
    // remove the item by connecting previous to next (cutting it out)
    previousNode.next = currentNode.next;
  }
}

module.exports = { LinkedList };
