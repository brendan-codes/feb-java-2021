class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}
class slStack {
    constructor(data) {
            this.top = null
            this.length = 0
        }
        // add to top
    push(newNode) {
        // check if top is empty or not
        if (this.top) {
            newNode.next = this.top;
        }
        this.top = newNode;
        this.length++;
    }

    // remove and return from top
    pop() {
        if (!this.top) { return null }
        // if top points to a node have that return that node? and point top to the next?
        if (this.top) {
            var toBeRemoved = this.top;
            this.top = toBeRemoved.next;
            toBeRemoved.next = null;
            console.log("toBeRemoved ->", toBeRemoved);
            this.length--;
            return toBeRemoved;
        }
    }

    peek() {
        // look at the top
        if (this.top) {
            // console.log("top data ", this.top.data);
            return this.top.data;
        }
    }


    isEmpty() {}

    length() {}

    // buh buh bonus challenge: totalStack

    // write the standalone function totalStack
    // given a slStack of integers call stack, total the data values
    // return the total
    // you may use one stack or array as additional storage
    // the given stack must be returned back to it's original order
    // you may only use public stack methods push pop peek isempty
    // function totalStack(stack){}
}

var myStack = new slStack();
console.log(myStack);

myStack.push(new Node(11));
myStack.push(new Node(22));
myStack.push(new Node(33));
console.log(myStack);

myStack.pop();
console.log(myStack);

console.log(myStack.peek());

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

    }

    // remove and return from top
    pop() {}

    // aka check top, return the value
    peek() {}

    // check if empty, return boolean
    isEmpty() {}

    // length getter, return int
    length() {}
}
stack = new slStack();
node1 = new Node(15);



// buh buh bonus challenge: totalStack

// write the standalone function totalStack
// given a slStack of integers, total the data values
// return the toal
// you may use one stack or array as additional storage
// the given stack must be returned back to it's original order
// you may only use public stack methods push pop peek isempty
function totalStack(stack) {}
thith