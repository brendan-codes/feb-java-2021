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
        if(target == this.head.data){
            this.addHead(node);
            return;
        }
        var current = this.head;
        while(current && current.data!=target){
            current = current.next;
        }
        if(current){
            node.next = current;
            node.prev = current.prev;
            current.prev = node;
            node.prev.next = node;
            this.length++;
        }
    }



    append(target, node){
        if(target == this.tail.data){
            this.addTail(node);
            return;
        }
        var current = this.head;
        while(current && current.data!=target){
            current = current.next;
        }
        if(current){
            node.next = current.next;
            node.prev = current;
            current.next = node;
            node.next.prev = node;
            this.length++;
        }
    }

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
    addTail(node) {
        if (!this.head) { // empty list
            this.head = node;
            this.tail = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
        }
        this.length++;
    }

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
