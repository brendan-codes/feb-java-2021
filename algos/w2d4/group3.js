// === CLASSES ===

// Stack
// LAST IN, FIRST OUT
class slStack {
    constructor() {
        this.top = null; // this.head, this.end
        this.length = 0;
    }

    // add to top
    push(newNode) {
        if (this.top === null) {
            this.top = newNode;
        } else {
            newNode.next = this.top;
            this.top = newNode;
        }
        this.length++;
    }

    // remove from top
    pop() {
        if (this.top === null) return null;

        const removed = this.top; // store previous top
        this.top = this.top.next; // move top pointer
        removed.next = null; // remove pointer from stored node
        this.length--; // decrement length

        return removed; // return the node
    }

    // aka check top
    peek() {
        return this.top;
    }

    // check if empty
    isEmpty() {
        return this.top === null;
    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {
        return this.length;
    }
}

// Queue
// FIRST IN, FIRST OUT
class Queue {
    constructor() {
        this.front = null; // sometimes called head "front of the line"
        this.back = null; // sometimes called rear or tail "back of the line"
        this.length = 0;
    }

    enqueue(node) {
        if (this.back === null) { // if back is null, list is empty
            this.back = node;
            this.front = node;
        } else { // otherwise add to back
            this.back.next = node;
            this.back = node;
        }
        this.length++;
    }

    // remove from the front
    dequeue() {
        if (this.front === null) {
            return null; // if empty return nothing
        };
        if (this.front === this.back) {
            this.back = null;
        };
        let node = this.front;
        this.front = node.next;
        node.next = null;
        this.length--;
        return node;
    }

    // check the front of the queue
    peek() {
        // return this.front ? this.front.data : this.front;
        return this.front;
    }

    // return if empty
    isEmpty() {
        return this.front === null;
    }

    // return length
    count() {
        return this.length;
    }
}

// Node
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

// === HELPER FUNCTIONS ===

// QUEUE - IS PALINDROME
// return true or false if the queue is a palindrome
// a palindrome is a string or number that is equal to itself when reversed

// racecar === racecar
// race !=== ecar

// you may not linearly iterate through your queue
// only use public queue methods (enqueue, dequeue, checkFront, isEmpty, length)
// return the queue back to it's original order

// you may use stacks queues arrays or dictionaries as additional storage
// you may create helper methods to break this challenge down into smaller parts
function isPalindromeV1(queue) {
   // start with queue
   // create 2nd queue by dequeuing from 1st into 2nd (push?)
   // dequeue
   // compare the "arrays" to check

   //creating an array with the same order as the queue
    var arr = []
    while (!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        arr.push(tempNode.data);
    }

    //checking Palindrome via the array
    var right = arr.length - 1;
    for(i = 0; i < arr.length / 2; i++) {
        if (arr[i] != arr[right - i]) {
        console.log(false);
        }
    }
    console.log(true);

    // making original queue in its order
    while (arr.length > 0){
        queue.enqueue(arr.pop());
    }

    return queue;
}

function isPalindromeV2(queue) {

    var newQ = new Queue();
    var newStack = new slStack();
    while (!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        newQ.enqueue(tempNode);
        console.log("newQ: ", newQ);
        newStack.push(tempNode);
        console.log("newStack: ", newStack);
    }
    // readQueue(newQ);

    let returnVal = true;
    let i = 0;
    while (!newQ.isEmpty()){
        console.log("I: ", i);
        let checkQ = newQ.dequeue();
        let checkStack = newStack.pop();
        if(checkQ.data != checkStack.data){
        console.log("checkQ.data ", checkQ.data)
        console.log("checkStack.data ", checkStack.data)
            returnVal = false;
        }
        i++;
        queue.enqueue(checkQ);
    }
    console.log(returnVal);
    return queue;
}



var myQueue = new Queue();
myQueue.enqueue(new Node(1));
myQueue.enqueue(new Node(2));
myQueue.enqueue(new Node(3));
myQueue.enqueue(new Node(2));
myQueue.enqueue(new Node(1));

var myOtherQueue = new Queue();
myOtherQueue.enqueue(new Node(1));
myOtherQueue.enqueue(new Node(40));
myOtherQueue.enqueue(new Node(3));
myOtherQueue.enqueue(new Node(2));
myOtherQueue.enqueue(new Node(1));

console.log(isPalindrome(myQueue)); // true
console.log(isPalindrome(myOtherQueue)); // false

function totalStack(stack) {
    var newStack = new slStack();
    var total = 0;

    while (!stack.isEmpty()) {
        var tempNode = stack.pop();
        total += tempNode.data;
        newStack.push(tempNode);
    }

    while (!newStack.isEmpty()) {
        stack.push(newStack.pop());
    }

    return total;
}

function readQueue(queue) {
    var tempQueue = new Queue();

    while (!queue.isEmpty()) {
        var tempNode = queue.dequeue();
        console.log(tempNode.data);
        tempQueue.enqueue(tempNode);
    }

    while (!tempQueue.isEmpty()) {
        queue.enqueue(tempQueue.dequeue());
    }

    return queue;
}

function readQueue2(queue) {
    var length = queue.count();

    while (length) {
        var node = queue.dequeue();
        console.log(node.data);
        queue.enqueue(node);
        length--;
    }
}