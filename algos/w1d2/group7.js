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
        node.next = this.head;;
        this.head = node;
    }

    // createa  new node with given data, add it to the head. return void
    addDataToFront(data) {
        var node = new Node(data);
        node.next = this.head;
        this.head = node;
    }
}


var node = new Node(10);
var mySLL = new SLL();
mySLL.addDataToFront(node); //tried to print, forgot in liveshare, sharer has to have extension lol
console.log(mySLL.head.data);
mySLL.addDataToFront(1); // testing data type
console.log(mySLL.head.data); // printing data type
console.log(mySLL.head.next.data); // printing data type in 2nd node