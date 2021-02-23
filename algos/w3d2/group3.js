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

    // add node before target
    // target is the value of a node in the list
    // consider the edge case where you may have to move the head
    // consider the edge case where you do not find the target
    prepend(target, node) {
        // start at the head
        if (this.length == 0){
            return "List is empty";
        }
        var runner = this.head;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === target) {
                //
                if (runner.prev == null){
                    this.addHead(node);
                }
                runner.prev.next = node;
                node.prev = runner.prev;
                runner.prev = node;
                node.next = runner;
                return "Node successfully added"
            }
            // otherwise advance the runner
            runner = runner.next;
        }
        return "Target not in DLList";
    }

    append(target, node){
        // start at the tail
        if (this.length == 0){
            return "List is empty";
        }
        var runner = this.tail;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === target) {
                //
                if (runner.next == null){
                    this.addTail(node);
                }
                runner.next.prev = node;
                node.next = runner.next;
                runner.next = node;
                node.prev = runner;
                return "Node successfully added"
            }
            // otherwise advance the runner
            runner = runner.prev;
        }
        return "Target not in DLList";
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

            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
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
        this.tail = tail.prev; // move the tail back
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
    removeHead() {}
}

// set temporary variables
// node0 = currentNode.previous
// node1 = currentNode

// node0.next = node;
// node1.previous = node;

// node.previous = node0;
// node.next = node1;

