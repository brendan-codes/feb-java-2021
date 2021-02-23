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


    // temp = previousHead
    //This.head = node , tail

    addHead(node) {
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.length++;
        } else {
            this.head.prev = node;
            node.next = this.head;
            this.head = node;
            this.length++;
        }
    }

    // pop from tail
    removeTail() {
        if (this.isEmpty()) {
            return -1;
        }
        else {
            this.tail = this.tail.prev;
            this.tail.next = null;
            this.length--;
        }
    }

    // return is empty
    isEmpty() {
        return (this.head == null);
        // if (this.head == null) {
        //     return true;
        // } else {
        //     return false;
        // }
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) { }

    // pop from head
    removeHead() { }
}

var dll = new DLList();
dll.addHead(new DLLNode(6));
dll.addHead(new DLLNode(4));
dll.addHead(new DLLNode(2));
dll.addHead(new DLLNode(7));
dll.addHead(new DLLNode(1));
dll.removeTail();
console.log(dll);