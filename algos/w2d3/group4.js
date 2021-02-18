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
        if (this.isEmpty()) {
            this.length++;
            this.front = node;
            this.back = node;
            return;
        } else {
            this.length++;
            this.back.next = node;
            this.back = node;
        }
    }

    // remove nodes from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "The queue is already empty";
        } else {
            this.length--;
            var temp = this.front;
            this.front = temp.next;
            temp.next = null;
            return temp;
        }
    }

    // check the front of the queue without removing it
    peek() {
        if (this.isEmpty()) {
            return "Queue is empty";
        } else {
            return this.front.data;
        }
    }

    // return true / false if queue is empty
    isEmpty() {
        if (this.front == null) {
            return true;
        } else {
            return false;
        }
    }

    // return length
    count() {
        return this.length;
    }
}

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

var newQueue = new Queue();
var someNode = new Node(15);
var someNode2 = new Node(16);
var someNode3 = new Node(17);
var someNode4 = new Node(18);
var someNode5 = new Node(19);
newQueue.enqueue(someNode);
newQueue.enqueue(someNode2);
newQueue.enqueue(someNode3);
newQueue.enqueue(someNode4);
newQueue.enqueue(someNode5);
console.log(newQueue.count());
console.log(newQueue);

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue, dequeue, peek, isempty, and length
function readQueue(queue) {
    if (queue.isEmpty()) {
        return "This queue is EMPTY";
    } else {
        var tempQueue = new Queue();
        while (queue.count() != 0) {
            tempQueue.enqueue(queue.front);
            console.log(queue.front.data);
            queue.dequeue();
        }
        while (tempQueue.count() != 0) {
            queue.enqueue(tempQueue.dequeue());
        }
    }
}

readQueue(newQueue);
readQueue(newQueue);
console.log(newQueue);