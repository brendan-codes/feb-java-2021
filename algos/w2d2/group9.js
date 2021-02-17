// Stacks

// A stack is a LIFO data structure
// LAST IN, FIRST OUT
// LIFO

// push - add to top
// pop - remove from top
// peek - check the top
// isEmpty - check if the stack is empty, true/false
// length - return size of stack

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class slStack {
    constructor() {
        this.top = null;
        this.len = 0;
    }

    // add to top
    push(newNode) {
        newNode.next = this.top;
        this.top = newNode;
        this.len++;
    }

    // remove and return from top
    pop() {
        var popped = this.top;
        this.top = this.top.next;
        this.len--;
        popped.next = null;
        return popped;
    }

    // aka check top, return the value
    peek() {
        if (this.top) {
            return this.top.data;
        }
        console.log("stack is empty");
    }

    // check if empty, return boolean
    isEmpty() {
        if (this.len > 0) {
            return false;
        }
        return true;
    }

    // length getter, return int
    length() {
        return this.len;
    }
}

// buh buh bonus challenge: totalStack

// write the standalone function totalStack
// given a slStack of integers, total the data values
// return the toal
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function totalStack(stack) {
    // make another stack
    // iterate through the current stack, peek the top, add that to our sum, then pop the top and add it to the temp stack
    // iterate through temp stack and then pop the top and add it to the current stack
    var tempStack = new slStack;
    var sum = 0;
    console.log("check top: " + stack.peek() + " check length: " + stack.length());
    while (!stack.isEmpty()) {
        sum += stack.peek();
        console.log("sum: " + sum + " peek: " + stack.peek());
        tempStack.push(stack.pop());
    }
    console.log("temp stack top: " + tempStack.peek() + " temp stack length: " + tempStack.length());
    while (!tempStack.isEmpty()) {
        console.log("pushing: " + tempStack.peek());
        stack.push(tempStack.pop());
    }
    console.log("check top: " + stack.peek() + " check length: " + stack.length());
    return sum;
}

var myslstack = new slStack();
myslstack.push(new Node(13));
myslstack.push(new Node(3));
myslstack.push(new Node(4));
myslstack.push(new Node(10));
// myslstack: 10 -> 4 -> 3 -> 13, length 4
// totalstack's tempStack: 13 -> 3 -> 4 -> 10, length 4
console.log(totalStack(myslstack));