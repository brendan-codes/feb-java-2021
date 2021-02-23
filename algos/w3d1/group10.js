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
        const newNode = new Node;
        if (this.length === 0) {
            this.head = newNode;
            this.tail = mewNode;
        } else {
            newNode.next = this.head;



        }
    }

    // pop from tail
    removeTail() {
        if (this.length === 0) return undefined;
        let temp = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = temp.prev;
            this.tail.next = null;
            temp.prev = null;

        }
        this.length--;
        return temp;

    }

    // return is empty
    isEmpty() {}

    // return length
    size() {}

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {}

    // pop from head
    removeHead() {}
}