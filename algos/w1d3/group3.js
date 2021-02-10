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
    read(head) {
        if (this.isEmpty) {
            var current = head;
            while (current.next != null) {
                console.log(current.data);
            }
        } else {
            console.log("Head doesn't Exist!");
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
            if (this.isEmpty) {
                var current = head;
                while (current.next != null) {
                    if (current.data === value) {
                        return true;
                    }
                }
                return false;
            }
        }
        //   head -> [2] -> [4] -> [7] -> [null]

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty) {
            var current = head;
            head = head.next;
            return current.data;
        }
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