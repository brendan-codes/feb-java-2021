// Queue
// FIFO (First in, first out)

class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
        this.length = 0;
    }

    // add nodes to the rear of the queue
    // [d,n] -> [d,n]
    enqueue(node) {
        if (!this.front) {
            this.front = node;
            this.back = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
        this.length++;
    }

    // remove nodes from the front of the queue
    dequeue() {
        if (length === 0) {
            return -1;
        } else {
            this.front = null;
        }
    }

    // check the front of the queue without removing it
    peek() {}

    // return true / false if queue is empty
    isEmpty() {}

    // return length
    length() {}
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue, dequeue, peek, isempty, and length
function readQueue(queue) {}

var thisQueue = new Queue();
var node1 = new Node(15);
var node2 = new Node(18);
var node3 = new Node(29);
thisQueue.enqueue(node1);
thisQueue.enqueue(node2);
thisQueue.enqueue(node3);
thisQueue.dequeue();
console.log(thisQueue);