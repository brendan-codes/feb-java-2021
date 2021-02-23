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
    prepend(target, node) {}

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


    addTail(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            var prevTail = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.tail.prev = prevTail;
        }
        this.length++;
    }

    // pop from head
    removeHead() {
        if (this.head == null) return; // empty list
        if (this.head === this.tail) { // one node
            let temp = this.tail; // set a temp
            this.head = null; // disconnect the head
            this.tail = null; // disconnect the tail
            this.length--; // decrement
            return temp;
        } else {
            let temp = this.head; // set a temp
            this.head = this.head.next; // move the head forward
            this.head.prev = null; // null out the new head's prev
            temp.next = null; // null out the temp's next
            this.length--; // decrement
            return temp;
        }
    }
}

var myDLL = new DLList();
myDLL.addHead(new DLLNode(4));
myDLL.addHead(new DLLNode(3));
myDLL.addHead(new DLLNode(2));
myDLL.addHead(new DLLNode(1));
myDLL.addTail(new DLLNode(5));
myDLL.removeHead();
console.log(myDLL);