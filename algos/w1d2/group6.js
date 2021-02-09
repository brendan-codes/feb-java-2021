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

    isEmpty() {
        if (this.head) {
            return true;
        } else {
            return false;
        }
    }

    // add given node to the head, if it exists. return void
    addToFront(node) {

        // node
        // this.head


        // if (this.head != null) {
        //     // this.next = new Node;
        //     return void;
        // } else (this.head == null) {
        //     this.head = node;

        node.next = this.head;
        this.head = node;
        // }
    }




    addDataToFront(data) {}
}
addDataToFront(data) {}
}
addDataToFront(data) {}
}


var node = new Node(10);
var mySLL = new SLL();