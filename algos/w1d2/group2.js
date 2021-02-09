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

    addToFront(node) {
            if (!this.head) {
                return;
            }
            let nextNode = this.head;
            while (nextNode.next != null) {
                nextNode = nextNode.next;
            }
            nextNode.next = node;
        } //

    // create a  new node with given data, add it to the head. return void
    addDataToFront(data) {
            this.head = new Node(data);
        } // new Node
}


var node = new Node(10);
var mySLL = new SLL();
mySLL.addDataToFront(20);
mySLL.addToFront(node);
mySLL.addToFront(new Node(30));
mySLL.addToFront(new Node(15))