// DLLNodes have a .next and .prev
class DLLNode {
    constructor(data) {
        this.data = data;
        this.prev = null;
        this.next = null;
    }
}

// DLLists have both a .head and .tail pointer
class DLList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    // == Main Methods ==

    // return true or false if a node exists with data === val
    exists(val) {
        if (this.head == null) {
            return null;
        }
        var runner = this.head;
        while (runner) {
            if (runner.data == val) {
                return true;
            }
            runner = runner.next;
        }
        return false;
    }

    // remove and return the first node with data === val, if it exists
    // is it the head?-
    // is it the tail?-
    // is it both?-
    // is the node even there?-
    // does the list even have nodes?
    removeVal(val) {
        if (this.head == null) {
            return null;
        }
        if (this.head.data == val) {
            return this.removeHead();
        }
        if (this.tail.data == val) {
            return this.removeTail();
        }
        if (this.head == this.tail) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        }
        var runner = this.head;
        while (runner) {
            if (runner.data == val) {
                runner.next.prev = runner.prev;
                runner.prev.next = runner.next;
                runner.next = null;
                runner.prev = null;
                this.length--;
                return runner;
            }
            runner = runner.next;
        }
        return null;
    }

    prepend(target, node) {
        if (this.head !== null) { // Must have at least one node
            var curNode = this.head;
            if (curNode.data === target) { // Edge case: first node only
                node.next = curNode; // Connect nodes
                curNode.prev = node;
                this.head = node; // Move this.head to new node
                this.length++;
            } else {
                while (curNode.next !== null) {
                    curNode = curNode.next; // Move to next node
                    if (curNode.data === target) {
                        // Link this new node to the others
                        node.next = curNode;
                        node.prev = curNode.prev;
                        // Link other nodes to this new node
                        curNode.prev.next = node;
                        curNode.prev = node;
                        this.length++;
                        break; // Exit while loop assuming only before first instance of target
                    }
                }
            }
        }
    }

    prependClean(target, node) {
        var runner = this.head; // set a runner
        if (runner.data === target) {
            this.addHead(node);
            return;
        }
        while (runner) { // loop
            if (runner.data !== target) { // check runner data against the target
                runner = runner.next; // move forward if no match
            } else { // else we found a match
                node.next = runner; // point the node at the matched runner
                node.prev = runner.prev; // point the node's prev to the matched runner's prev
                node.prev.next = node; // link previous node next
                runner.prev = node; // link runner to node
                this.length++; // length
                return;
            }
        }
    }

    // push to head
    addHead(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
        }
        this.length++;
    }

    // pop from tail
    removeTail() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail; // set a temp
            this.head = null; // disconnect the head
            this.tail = null; // disconnect the tail
            this.length--; // decrement
            return temp;
        }
        var temp = this.tail; // set a temp
        this.tail = this.tail.prev; // move the tail back
        this.tail.next = null; // null out the new tail's next
        temp.prev = null; // null out the temp's prev
        this.length--; // decrement
        return temp;
    }

    // return is empty
    isEmpty() {
        return this.head === null;
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {}

    // pop from head
    removeHead() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            var temp = this.tail; // set a temp
            this.head = null; // disconnect the head
            this.tail = null; // disconnect the tail
            this.length--; // decrement
            return temp;
        }
        var temp = this.head; // set a temp
        this.head = this.head.next; // move the tail back
        this.head.prev = null; // null out the new tail's next
        temp.next = null; // null out the temp's prev
        this.length--; // decrement
        return temp;
    }
}