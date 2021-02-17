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
        newNode.next = this.top;
        this.top = newNode;
        this.length++;
        return this;
    }

    // remove and return from top
    pop() {
        var removed = this.top;
        this.top = this.top.next;
        removed.next = null;
        this.length--;
        return removed.data;
    }

    // aka check top, return the value
    peek() {
        return this.top.data;
    }

    // check if empty, return boolean
    isEmpty() {
        if (this.top) {
            return false;
        } else {
            return true;
        }
    }

    // length getter, return int
    findLength() {
        return this.length;
    }

    // buh buh bonus challenge: totalStack

    // write the standalone function totalStack
    // given a slStack of integers, total the data values
    // return the toal
    // you may use one stack or array as additional storage
    // the given stack must be returned back to it's original order
    // you may only use public stack methods push pop peek isempty
}

function totalStack(stack) {
    var current = stack.top;
    var temp = 0;
    var total = 0;
    var tempslStack = new slStack();
    var currentTemp = tempslStack.top

    //adding data from each this.top total counter, while popping data to a temp stack in reverse order
    while (current) {
        console.log("in the first while loop")
        total += stack.peek();
        temp = stack.pop();
        tempslStack.push(temp);
    }
    // add back all data from the Temp Stack to the original stack
    while (currentTemp) {
        console.log("in the second while loop")
        temp = tempslStack.pop();
        stack.push(temp);
    }
    return total;
}

var myslStack = new slStack();

myslStack.push(new Node(13));
myslStack.push(new Node(14));
myslStack.push(new Node(15));
myslStack.push(new Node(16));

myslStack.push(new Node(17));


console.log(myslStack.pop());
console.log(myslStack.peek());
console.log(myslStack.isEmpty());
console.log(myslStack.findLength());
console.log(totalStack(myslStack));