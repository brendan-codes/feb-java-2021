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
            this.front = this.back;
        } else {
            this.back.next = node;
            this.back = this.back.next;
        }
        this.length++;
    }

    // remove nodes from the front of the queue
    dequeue() {
        if (this.front === null) return null;

        const removed = this.front;
        this.front = this.front.next;
        removed.next = null;
        if (this.front == null) {
            this.back = null;
        }
        this.length--;
        return removed;
    }

    // check the front of the queue without removing it
    peek() {
        return this.front;
    }

    // return true / false if queue is empty
    isEmpty() {
        return this.front === null;

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

// print every value in the queue
// you may only use one queue or stack for additional storage
// return the queue back to it's original order when you are done
// you are not allowed to linearly traverse the queue
// only use public methods enqueue, dequeue, peek, isempty, and length
function readQueue(queue) {
    // var str = "Queue: front "
    // var cur = queue.front;
    // while (cur != null) {
    //     str += cur.data + "->";
    //     cur = cur.next;
    // }
    // str += "NULL tail";
    // console.log(str);


    var newQ = new Queue();
    while (!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        newQ.enqueue(tempNode);
    }
    return newQ;
}





var myQ = new Queue()

console.log(myQ.isEmpty());

myQ.enqueue(new Node(11));
myQ.enqueue(new Node(12));
myQ.enqueue(new Node(13));
readQueue(myQ);
// console.log(myQ.peek());

// myQ.dequeue();

// console.log(myQ);
// console.log(myQ.peek());

// console.log(myQ.isEmpty());

// myQ.dequeue();
// myQ.dequeue();

// console.log(myQ.isEmpty());