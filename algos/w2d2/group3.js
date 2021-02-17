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
        this.length = 0;
    }

    // add to top
    push(newNode) {}

    // remove and return from top
    pop() {}

    // aka check top, return the value
    peek() {}

    // check if empty, return boolean
    isEmpty() {}

    // length getter, return int
    length() {}
}

// buh buh bonus challenge: totalStack

// write the standalone function totalStack
// given a slStack of integers , atotal the data values
// return the toal
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function totalStack(stack){}