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
//
    // == Main Methods ==

    // add node before target
    // target is the value of a node in the list
    // consider the edge case where you may have to move the head
    // conisder the edge case where you do not find the target
    prepend(target, node) {
      if(this.isEmpty()){
            this.head = node;
            this.tail = node;
      }
      // find the prev node of the target node
      //
      let runner = this.head
      if(target == this.head.data) {
        this.addHead(node);
        return node.data;
      }
      while(runner) {
        if(runner.data === target) {
          //target node prev ---> node
          runner.prev.next = node
          node.prev = runner.prev;
          node.next = runner;
          runner.prev = node;
          this.length++;
          return node.data;
        }
        runner = runner.next;
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
            this.tail.next = node;
            node.prev = this.tail;
            // this.tail = node;
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

var myList = new DLList();
// myList.addHead(new DLLNode(5));
// myList.addHead(new DLLNode(10));
myList.addHead(new DLLNode(30));
myList.addHead(new DLLNode(20));
myList.addHead(new DLLNode(10));
myList.prepend(30, new DLLNode(15));

console.log("----\n");
console.log(myList);
