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

// === STANDALONE FUNCTIONS ===

// STACK - IS SORTED
// using only one extra stack for storage, check if a given stack is sorted
// return the stack back to it's original order when you are done
// assume node.data are integers
function isStackSorted(stack) {
    var newStack = new slStack();

    while (!stack.isEmpty()) {
        if (this.top.next.data > this.top.data) {

        }
        var tempNode1 = stack.pop();
        newStack.push(tempNode);
    }
    // add back all data from the Temp Stack to the original stack
    while (!newStack.isEmpty()) {
        stack.push(newStack.pop());
    }
    return stack;
}

// STACK - GREATER OF TWO STACKS
// return the stack with the greater sum of numbers
// return both stacks to their original order
// assume node.data are integers
// you make write helper methods to break this problem down into smaller steps
function greaterOfTwoStacks(stack1, stack2) {
    // create total for stack 1
    var newStack1 = new slStack();
    var total1 = 0;
    while (!stack1.isEmpty()) {
        var tempNode = stack1.pop();
        total1 += tempNode.data;
        newStack1.push(tempNode);
    }
    while (!newStack1.isEmpty()) {
        stack1.push(newStack1.pop());
    }
    // create total for stack 2
    var newStack2 = new slStack();
    var total2 = 0;
    while (!stack2.isEmpty()) {
        var tempNode = stack2.pop();
        total2 += tempNode.data;
        newStack2.push(tempNode);
    }
    while (!newStack2.isEmpty()) {
        stack2.push(newStack2.pop());
    }
    // check which total is greater
    if (total2 > total1) {
        return "stack2" + stack2;
    } else {
        return "stack1" + stack1;
    }
}

var stack1 = new slStack();

stack1.push(new Node(1));
stack1.push(new Node(3));
stack1.push(new Node(5));
stack1.push(new Node(6));
stack1.push(new Node(9));

var stack2 = new slStack();

stack2.push(new Node(3));
stack2.push(new Node(2));
stack2.push(new Node(4));
stack2.push(new Node(1));
stack2.push(new Node(5));






function isPalindrome(queue) {
    let temp = new Queue();
    let reverseString = ""; // -> "";
    let normalString = ""; // <--;

    while (!queue.isEmpty()) {
        let node = queue.dequeue();
        reverseString = node.data + reverseString;
        normalString += node.data;
        temp.enqueue(node);
    }

    while (!temp.isEmpty()) {
        queue.enqueue(temp.dequeue());
    }

    console.log(normalString);
    console.log(reverseString);

    return reverseString === normalString;
}

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