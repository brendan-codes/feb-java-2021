var numberOfNodes = 0;

class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
        numberOfNodes++;
    }
}

class SLL {

    constructor() {
        this.head = null;
    }



    // ------------------------------------------------------------------------------------------------------
    //// THURSDAY
    // ------------------------------------------------------------------------------------------------------
    // if val is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the val
    // If current.next.value = value, then change the read path
    delete(data) {
        var runner = this.head;

        if (runner.data == data) {
            this.removeFromFront();
        }

        while (runner.next) {
            console.log("in while")
            if (runner.next.data == data) {
                console.log("found a match")
                runner.next = runner.next.next;
                return;
            }
            runner = runner.next;
        }
    }

    // Return the total amount of nodes in the list
    size() {
        console.log(`There are ${numberOfNodes} nodes`);
    }


    // ------------------------------------------------------------------------------------------------------
    //// WEDNESDAY
    // ------------------------------------------------------------------------------------------------------

    // console log (print) the data of every node in the current list
    read() {
        var current = this.head;

        while (current) {
            console.log("Data of this node: " + current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var runner = this.head;

        while (runner) {
            if (runner.data == value) {
                return true;
            }
            runner = runner.next
        }
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null;

        var removed = this.head;
        this.head = this.head.next;
        removed.next = null;
        return removed;
    }

    // ------------------------------------------------------------------------------------------------------
    //// TUESDAY
    // ------------------------------------------------------------------------------------------------------

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
        node.next = this.head;
        this.head = node;
    }

    // createa  new node with given data, add it to the head. return void
    addDataToFront(data) {
        var newNode = new Node(data);
        newNode.next = this.head
        this.head = newNode; // move the head to the new node
    }


}


var mySLL = new SLL();

mySLL.addToFront(new Node(13));
mySLL.addToFront(new Node(17));
mySLL.addToFront(new Node(18));
mySLL.addToFront(new Node(22));
mySLL.addDataToFront(27);

mySLL.read();

console.log(mySLL.contains(13));
console.log(mySLL.contains(14));

mySLL.size();

mySLL.delete(13);

mySLL.size();