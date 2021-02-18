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
        if (this.length == 0) {
            this.front = node;
            this.back = node;
        } else {
            node.next = this.back;
            this.back = node;
        }
        this.length++;
    }

    // remove nodes from the front of the queue
    dequeue() {
        if (this.length == 0) {
            return;
        } else if (this.length == 1) {
            this.front = null;
            this.back = null;
            this.length--;
            return;
        }
        let runner = this.back;
        while (runner.next != this.front) {
            runner = runner.next;
        }
        runner.next = null;
        this.front = runner;
        this.length--;
    }

    // check the front of the queue without removing it
    peek() {
        return this.front;
    }

    // return true / false
    // if queue is empty
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
function readQueue(queue) {
    let newQ = new Queue;
    while (!queue.isEmpty()) {
        console.log(queue.peek().data);
        newQ.enqueue(queue.peek());
        queue.dequeue();
    }
    while (!newQ.isEmpty()) {
        queue.enqueue(newQ.peek());
        newQ.dequeue();
    }
}