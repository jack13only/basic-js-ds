const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
module.exports = class Queue {
  constructor() {
    // this.list = null
    this.head = null;
    this.length = 0;
  }

  getUnderlyingList() {
    return this.list
  }

  enqueue(value) {
    let list = new ListNode(value)

    if (this.length === 0) {
      this.head = list
    } else {
      let current = this.head

      while(current.next) {
        current = current.head
      }

      current.next = new ListNode(value)
    }
    this.length++;
  }

  dequeue() {
    let output = this.list.value
    this.list = this.list.next
    return output
  }

}
