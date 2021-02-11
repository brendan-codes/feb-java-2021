class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.count = 0;
    }

    // if val is contained within the current list, delete it.
    // return void
    // assume there are no duplicates
    // consider the edge case if you have to delete the head node
    // consider the edge case your list is empty
    // consider the edge case that your list does not contain the val
    delete(data) {
            var runner = this.head;

            if (this.size() < 1) {
                return "0 size";
            }

            while (runner) {
                if (runner.next.data == data) {
                    console.log("\nwhat is runner? \n", runner);
                    console.log("\nwhat is runner.next? \n", runner.next);
                    runner = runner.next.next;

                    // runner.head = null;
                }
                runner = runner.next;
            }
        }
        // Return the total amount of nodes in the list
    size() {
            var current = this.head;
            if (this.head == null) return this.count;
            while (current) {
                this.count++;
                current = current.next;
                // console.log(this.count);
                if (!current) {
                    return this.count;
                }
            }
        }
        // console log (print) the data of every node in the current list
    read() {
        var current = this.head; // set curret as the head, if it exists or not

        while (current) {
            // if current, log and move to current.next
            console.log(current.data);
            current = current.next;
        }
    }

    // find: return true / false if current list contains a data equal to value
    contains(value) {
        var runner = this.head; // start at the head
        while (runner) {
            // while we have a runner
            // return true if data === value
            if (runner.data === value) {
                return runner; // true;
            }
            runner = runner.next; // otherwise advance the runner
        }
        return false; // if the while loop completes, return false
    }

    // Remove from front: remove and return the first node in the SLL
    removeFromFront() {
        if (this.isEmpty()) return null; // nothing to remove

        var removed = this.head; // save the head in a temp variable
        this.head = this.head.next; // move the head
        removed.next = null; // make removed no longer reference the list
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
        return this;
    }

    // when a pointer is to the LEFT of an equal sign, we are CHANGING it
    // when a pointer is to the RIGHT of an equal sign, we are READING it

    // create a new node with given data, add it to the head. return void
    addDataToFront(data) {
        // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }
}

var mySLL = new SLL();
// SLL.head -> null

mySLL.addToFront(new Node(13));
// SLL.head -> (13) -> null

mySLL.addToFront(new Node(17));
mySLL.addToFront(new Node(44));
// SLL.head -> (17) -> (13) -> null

// mySLL.addToFront(new Node(22)).addToFront(new Node(55));
console.log(mySLL.size());
console.log(mySLL.delete(17));
// console.log(mySLL.contains(55));
// console.log(mySLL.contains(20));
console.log("--- after remove --- ");
mySLL.read();