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
    // conisder the edge case where you do not find the target
    prepend(target, node) {
        if (prev_Node == null) {
            return;
    }
    Node new_node = new Node(new_target);   //??allocate node
    //psuedo code:
    //check if the given prev_node is NULL
    //Make next of new node as next of prev_node
    //Make the next of prev_node as new_node
    // Make prev_node as previous of new_node
    // Change previous of new_node's next node




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