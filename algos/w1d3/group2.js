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
        var runner = head;
        while (runner.next) {
            console.log(data);
            runner = runner.next;

        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var runner = this.head;
        while (runner.next) {
            return true
            runner = runner.next;
        } else {
            return false;
        }
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty) {
            return "the SLL is empty";
        }
        var runner = this.head;
        this.head = this.head.next;
        return runner.data;

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

let list = new SLL();
list.addDataToFront(10);
list.addDataToFront(20);
list.addDataToFront(30);
list.addDataToFront(40);
list.read();