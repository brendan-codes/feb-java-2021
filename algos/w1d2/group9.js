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
        if (this.head.data == node.data) {
            return void
        } else {
            this.data = node.data;
        }

    }

    // createa  new node with given data, add it to the head. return void
    addDataToFront(data) {}
}




var node = new Node(10);
var mySLL = new SLL();
mySLL.addDataToFront(node)
console.log(mySLL)


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
        if (this.head == node.data) {
            console.log('node is here');
            return;
        } else {
            this.head = node.data;
        }
        return this;
    }

    // createa  new node with given data, add it to the head. return void
    addDataToFront(data) {}
}




var node = new Node(10);
var mySLL = new SLL();
mySLL.addToFront(10)
console.log(mySLL)