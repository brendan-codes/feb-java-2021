class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // console log (print) the data of every node in the current list
    read() {
        var runner = this.head;

        while (runner !== null) {
            console.log(runner.data + "this is data");
            runner = runner.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var runner = this.head;

        while (runner !== null) {
            if (runner.data == value) {
                return true;
            }
            runner = runner.next
        }
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {}


    // return true or false if this.head is null
    isEmpty() {
        if (this.head) {
            return true;
        } else {
            return false;
        }
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {
        node.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }
}

var node = new Node(10);
var mySLL = new SLL();

mySLL.addToFront(new Node(13));
mySLL.addToFront(new Node(17));
mySLL.addToFront(new Node(18));
mySLL.addToFront(new Node(22));

console.log(mySLL.contains(13));
console.log(mySLL.contains(14));
mySLL.read();