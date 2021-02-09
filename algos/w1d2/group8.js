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
        if (this.head) {
            node.next = this.head;
            this.head = node;
        } else {
            this.head = node;
        }
    }

    // createa  new node with given data, add it to the head. return void
    addDataToFront(data) {
        var newNode = new Node(data);
    }
}


var noden = new Node(10);
var mySLL = new SLL();