// Queue
// FIFO (First in, first out)

class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
        this.length = 0;
    }

    // add nodes to the rear of the queue
    enqueue(node) {
        if (this.back === null) {
            this.back = node;
            this.front = node;
        } else {
            this.back.next = node;
            this.back = node;
        }
        this.length++;
    }

    // remove nodes from the front of the queue
    dequeue() {
        if (this.front === null) {
            return null;
        } else if (this.length == 1) {
            this.front = null;
            this.back = null;
            this.length--;
            return;
        }
    }

    // check the front of the queue without removing it
    peek() {
        return this.front.data;
    }

    // return true / false if queue is empty
    isEmpty() {
        if (this.front === null) {
            return true;
        }
        return false;
    }

    // return length
    length() {
        return this.length;
    }
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