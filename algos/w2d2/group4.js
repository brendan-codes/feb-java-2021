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
    push(newNode) {
        let node = new Node(newNode);
        node.next = this.top;
        this.top = node;
        this.length++;
    }

    // remove and return from top
    pop() {
        if (this.isEmpty()) {
            return null;
        }
        var toRemove = this.top;
        this.top = this.top.next;
        toRemove.next = null;
        this.length--;
        return this.top;
    }

    // aka check top, return the value
    peek() {
        if (this.top != null) {
            return this.top.data;
        } else {
            return null;
        }
    }

    // check if empty, return boolean
    isEmpty() {
        if (this.top === null) {
            return true;
        }
        return false;
    }

    // length getter, return int
    length() {
        return this.length;
    }
}

// buh buh bonus challenge: totalStack

// write the standalone function totalStack
// given a slStack of integers, total the data values
// return the toal
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function totalStack(stack) {} {

}
re