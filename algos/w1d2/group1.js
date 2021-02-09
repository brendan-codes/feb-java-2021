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
            if (node) {
                node.next = this.head; // node point to null
                this.head = node; // point at the node's location
            } else {
                return null;
            }
        }
        // createa  new node with given data, add it to the head. return void
    addDataToFront(data) {
        var new_node = new Node(data);
        this.addToFront(new_node);
    }
}
var node = new Node(10);
var mySLL = new SLL();


mySSL.addToFront(node);