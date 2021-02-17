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
        this.top = newNode;
        this.length++;
    }

    // remove and return from top
    pop() {
        if (this.top !== null) {
            var remove = this.top;
            this.top = this.top.next;
            this.length--;
            return remove;

        }
    }

    // aka check top, return the value
    peek() {
        console.log(this.top.data);
        return this.top.data;
    }

    // check if empty, return boolean
    isEmpty() {
        if (this.length == 0) {
            return true;
        }
        return false;
    }

    // length getter, return int
    length() {
        if (this.top) {
            return this.length;
        }
    }
}



// buh buh bonus challenge: totalStack

// write the standalone function totalStack
// given a slStack of integers, total the data values
// return the toal
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function totalStack(stack) {}

var myStack = new slStack();

myStack.push(new Node(1));
myStack.peek();
myStack.push(new Node(2));
myStack.push(new Node(3));
myStack.peek();
myStack.pop();
myStack.peek();
mos.t