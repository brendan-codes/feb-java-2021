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
        var current = this.top;
        this.top = newNode;
        newNode.next = current;
        this.length++;
    }

    // remove and return from top
    pop() {
        var myNode = this.top;
        this.top = this.next;
        this.length--;
        return myNode;
    }

    // aka check top, return the value
    peek() {
        var myNode = this.top;
        return myNode.data;
    }

    // check if empty, return boolean
    isEmpty() {
        if (!this.top) {
            return true;
        } else {
            return false;
        }
    }

    // length getter, return int
    getlength() {
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
// function totalStack(stack){}

var thisStack = new slStack();
var myNode = new Node(12);
var myNode1 = new Node(18);
var myNode2 = new Node(30);
thisStack.push(myNode);
thisStack.push(myNode1);
thisStack.push(myNode2);
console.log(thisStack.peek());
console.log(thisStack.isEmpty());
console.log(thisStack.getlength());