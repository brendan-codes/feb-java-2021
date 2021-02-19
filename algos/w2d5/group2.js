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

    stackSum() {
        var stackCopy = this;
        var sum = 0;
        while (stackCopy.top) {
            sum += stackCopy.top.data;
            stackCopy.pop();
        }
        return sum;
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
    var secondStack = new slStack();
    secondStack.push(stack.pop());
    while (stack.top) {
        if (stack.top.data > secondStack.top.data) {
            secondStack.push(stack.pop());
        } else {
            return false;
        }
    }
    while (secondStack.top) {
        stack.push(secondStack.pop())
    }
    return true;
}

// STACK - GREATER OF TWO STACKS
// return the stack with the greater sum of numbers
// return both stacks to their original order
// assume node.data are integers
// you may write helper methods to break this problem down into smaller steps

function greaterOfTwoStacks(stack1, stack2) {
    if (stack1.stackSum() > stack2.stackSum()) {
        console.log("stack1");
        console.log("what is stack1.stackSum()", stack1.stackSum());
        return stack1
    } else {
        console.log("stack2");
        return stack2
    }
}

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

var myStack = new slStack();
myStack.push(new Node(4));
myStack.push(new Node(3));
myStack.push(new Node(2));
myStack.push(new Node(1));

var stackTwo = new slStack();
stackTwo.push(new Node(5))
stackTwo.push(new Node(6))
stackTwo.push(new Node(7))
stackTwo.push(new Node(8))

console.log(isStackSorted(myStack));
console.log(greaterOfTwoStacks(myStack, stackTwo));