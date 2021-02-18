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
                this.length++;
            } else {
                this.back = node;
                node.next = this.front;
                this.length++;
            }
        }
        // null <- this.front <- node <- this.back
        // remove nodes from the front of the queue
    dequeue() {
        this.length--;
    }

    // check the front of the queue without removing it
    peek() {
        console.log(this.front.data);
    }

    // return true / false if queue is empty
    isEmpty() {

    }

    // return length
    count() {}
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

//Create the Queue and test code
var myQueue = new Queue;
myQueue.enqueue(new Node(1));
myQueue.peek();
myQueue.enqueue(new Node(2));
myQueue.peek();
myQueue.enqueue(new Node(3));
myQueue.peek();
myQueue.dequeue();
myQueue.peek();