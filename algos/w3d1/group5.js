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

    // push to head
    addHead(node) {


        // check if node is already at head
        if (!this.isEmpty()) {
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
            this.length++;
        } else {
            this.head = node;
            this.tail = node;
            this.length++;
        }
    }

    // pop from tail
    removeTail() {
        if (this.isEmpty()) return;
        // pop and return
        var popped = this.tail;
        if (this.size() == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return popped;
        } else {
            this.tail = popped.prev;
            this.tail.next = null;
            popped.prev = null; //this.tail.next.prev = null;
            this.length--;
            return popped;
        }
    }

    // return is empty
    isEmpty() {
        if (this.head == null && this.tail == null) return true;
        //if (this.length == 0) return true;
        return false;
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
        if (!this.isEmpty()) {
            node.prev = this.tail;
            this.tail.next = node;
            this.tail = node;
            this.length++;
        } else {
            this.head = node;
            this.tail = node;
            this.length++;
        }
    }

    // pop from head
    removeHead() {
        if (this.isEmpty()) return;
        // pop and return
        var popped = this.head;
        if (this.size() == 1) {
            this.head = null;
            this.tail = null;
            this.length--;
            return popped;
        } else {
            this.head = popped.next;
            this.head.prev = null;
            popped.next = null; //this.head.prev.next = null;
            this.length--;
            return popped;
        }
    }
}

var myDLL = new DLList();

myDLL.isEmpty();

myDLL.addHead(new DLLNode(11));
myDLL.addHead(new DLLNode(22));
myDLL.addTail(new DLLNode(33));

console.log(myDLL.size());

console.log(myDLL);

// console.log(myDLL.removeTail());

// console.log(myDLL.size());

// console.log(myDLL);

console.log("-----\n");

// console.log('popped node -> ', myDLL.removeHead());
console.log('popped node -> ', myDLL.removeTail());
console.log(myDLL);