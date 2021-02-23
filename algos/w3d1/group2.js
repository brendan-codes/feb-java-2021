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
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else if (this.length == 1) {
            this.head = node;
            this.head.next = this.tail;
            this.tail.prev = node;
        } else {
            var temp = this.head;
            this.head = node;
            this.head.next = temp;
            temp.prev = node;
        }
        this.length++;
    }

    // pop from tail
    removeTail() {
        if (this.isEmpty()) {
            return null;
        } else if (this.length == 1) {
            var temp = this.head;
            this.head = null;
            this.tail = null;
            this.length--;
            return temp;
        } else {
            var temp = this.tail;
            this.tail = this.tail.prev;
            this.tail.next = null;
            temp.prev = null;
            this.length--;
            return temp;
        }
    }

    // return is empty
    isEmpty() {
        if (this.head == null) {
            return true;
        }
        return false;
    }

    // return length
    size() {
        return this.length;
    }

    // == Bonus Methods, just inverted versions of the first set ==

    // push to tail
    addTail(node) {
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
        } else if (this.length == 1) {
            this.tail = node;
            this.tail.prev = this.head;
            this.head.next = node;
        } else {
            var temp = this.tail;
            this.tail = node;
            this.tail.prev = temp;
            temp.next = node;
        }
        this.length++;
    }

    // pop from head
    removeHead() {
        if (this.isEmpty()) {
            return null;
        } else if (this.length == 1) {
            var temp = this.tail;
            this.tail = null;
            this.head = null;
            this.length--;
            return temp;
        } else {
            var temp = this.head;
            this.head = this.head.next;
            this.head.prev = null;
            this.length--;
            return temp;
        }
    }
}

var newDLL = new DLList();

console.log(newDLL.isEmpty());
console.log(newDLL.size());
newDLL.addHead(new DLLNode(1));
newDLL.addHead(new DLLNode(3));
newDLL.addHead(new DLLNode(5));
newDLL.addHead(new DLLNode(6));
newDLL.addHead(new DLLNode(9));
console.log(newDLL.isEmpty());
console.log(newDLL.size());
console.log(newDLL.removeTail());
console.log(newDLL.removeTail());
console.log(newDLL.size());


newDLL.addTail(new DLLNode(-1));
newDLL.addTail(new DLLNode(-2));
console.log(newDLL.size());
console.log(newDLL.tail);

console.log(newDLL.removeHead());
console.log(newDLL.size());