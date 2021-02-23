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
        if(this.head){
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

    //  <-()->
    //      <-()->

    // pop from tail
    removeTail() {
        let temp = this.tail;
        this.tail.prev = this.tail;
        this.tail.next =null;
        temp.prev = null;
        return temp;

        this.length--
    }

    // return is empty
    isEmpty() {
        if(this.length == 0){
            return true;
        } else {return false;}
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