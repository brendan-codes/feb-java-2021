class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {

    static nodes = 0;

    constructor() {
        this.head = null;
    }

    // node.next = 0x5d4ddbca74
    // sll.head = 0x5d4ddbca73
    // Delete node with value 6
    // [15] -> (10) -> (8) -> (11)
    // if val is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edgee case if you have to delete the head node -
    // consider the edge case your list is empty -
    // consider the edge case that your list does not contain the val
    delete(data) {
        if (this.head == null) {
            return "This list is empty.";
        }
        if (this.head.data === data) {
            nodes--;
            this.removeFromFront();
        }
        runner = this.head;
        while (runner) {
            if (runner.next.data === data) {
                runner.next = runner.next.next;
                nodes--;
                return "Completed."
            }
            runner = runner.next;
        }
        return "Node does not exist in this list."
    }

    // Return the total amount of nodes in the list
    size() {
        console.log(nodes);
        return nodes;
    }

    // console log (print) the data of every node in the current list
    read() {
        var current = this.head; // set curret as the head, if it exists or not

        while (current) { // if current, log and move to current.next
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        // start at the head
        var runner = this.head;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        // if the while loop completes, return false
        return false;
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null; // nothing to remove

        var removed = this.head; // save the head in a temp variable
        this.head = this.head.next; // move the head
        removed.next = null; // make removed no longer reference the list
        nodes--;
        return removed;
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
        nodes++;
        return this;
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        nodes++;
        this.head = node; // move the head to the new node
    }
}

var randomNode = new Node(13);


var mySLL = new SLL();
// SLL.head -> null

mySLL.addToFront(randomNode);
// SLL.head -> (13) -> null

mySLL.addToFront(new Node(17));
// SLL.head -> (17) -> (13) -> null


mySLL.addToFront(new Node(22)).addToFront(new Node(55));
mySLL.read();
console.log(mySLL.contains(55));
console.log(mySLL.contains(20));