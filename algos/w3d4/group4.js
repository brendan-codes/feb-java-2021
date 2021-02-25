// DLLNodes have a .next and .prev
class slStack {
    constructor() {
      this.top = null; // this.head, this.end
      this.length = 0;
    }

    // add to top
    push(newNode) {
      if (this.top === null) {
        this.top = newNode;
      } else {
        newNode.next = this.top;
        this.top = newNode;
      }
      this.length++;
    }

    // remove from top
    pop() {
      if (this.top === null) return null;

      const removed = this.top; // store previous top
      this.top = this.top.next; // move top pointer
      removed.next = null; // remove pointer from stored node
      this.length--; // decrement length

      return removed; // return the node
    }

    // aka check top
    peek() {
      return this.top;
    }

    // check if empty
    isEmpty() {
      return this.top === null;
    }

    // "1" == 1 true
    // "1" === 1 false

    // length getter
    getLength() {
      return this.length;
    }
  }


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

    // reverse a doubly linked list

    reverse() {
      var tempStack = new slStack();
      while (this.head !== null) {
        tempStack.push(this.removeHead());
      }
      while (tempStack.top) {
        this.addTail(tempStack.pop());
      }
    }


    // partition this DLL by the given pivot
    // so that all nodes with values lower than pivot are to the left
    // and all nodes with values higher than pivot are to the right

    // - DLL only contains numeric integer values

    // - Nodes may not be in two Lists at the same time,
    //   but you are able to make new DLLs, stacks, queues, or arrays to temporarily store nodes

    // - A pivot is just a numeric value which may or may not be in the list
    partition(pivot) {
        let bigger = new slStack;
        let smaller = new slStack;
        let runner = this.head;
        while(runner){
          if(runner.data<pivot){

          }
        }

    }


    // return true or false if a node exists with data === val
    exists(val) {
      var forwardRunner = this.head;
      var backwardRunner = this.tail;
      var count = Math.ceil(this.length / 2);
      while (count) {
        if (forwardRunner.data === val || backwardRunner.data === val) {
          return true;
        }
        forwardRunner = forwardRunner.next;
        backwardRunner = backwardRunner.prev;
        count--;
      }
      return false;
    }

    // remove and return the first node with data === val, if it exists
    removeVal(val) {
      var runner = this.head;
      if (!runner) {
        return runner;
      }
      // remove head and tail
      if (runner === this.tail && runner.data === val) {
        this.head = null;
        this.tail = null;
        this.length--;
        return runner;
      }
      // remove just head
      if (runner.data === val) {
        this.head = runner.next;
        this.head.prev = null;
        runner.next = null;
        this.length--;
        return runner;
      }
      while (runner) {
        // remove runner
        if (runner.data === val) {
          // remove runner at tail
          if (runner === this.tail) {
            // return this.removeTail();
            this.tail = runner.prev;
            runner.prev.next = null;
            runner.prev = null;
            length--;
            return runner;
          }
          runner.prev.next = runner.next;
          runner.next.prev = runner.prev;
          runner.next = null;
          runner.prev = null;
          this.length--;
          return runner;
        }
        runner = runner.next;
      }
    }

    prepend(target, node) {
      if (this.head !== null) { // Must have at least one node
        var curNode = this.head;
        if (curNode.data === target) { // Edge case: first node only
          node.next = curNode; // Connect nodes
          curNode.prev = node;
          this.head = node; // Move this.head to new node
          this.length++;
        } else {
          while (curNode.next !== null) {
            curNode = curNode.next; // Move to next node
            if (curNode.data === target) {
              // Link this new node to the others
              node.next = curNode;
              node.prev = curNode.prev;
              // Link other nodes to this new node
              curNode.prev.next = node;
              curNode.prev = node;
              this.length++;
              break; // Exit while loop assuming only before first instance of target
            }
          }
        }
      }
    }

    prependClean(target, node) {
      var runner = this.head; // set a runner
      if (runner.data === target) {
        this.addHead(node);
        return;
      }
      while (runner) { // loop
        if (runner.data !== target) { // check runner data against the target
          runner = runner.next; // move forward if no match
        } else { // else we found a match
          node.next = runner; // point the node at the matched runner
          node.prev = runner.prev; // point the node's prev to the matched runner's prev
          node.prev.next = node; // link previous node next
          runner.prev = node; // link runner to node
          this.length++; // length
          return;
        }
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
  var dll = new DLList();
  dll.addHead(new DLLNode(34));
  dll.addHead(new DLLNode(4));
  dll.addHead(new DLLNode(5));
  dll.addHead(new DLLNode(8));
  dll.addHead(new DLLNode(2));
  dll.addHead(new DLLNode(9));
  console.log("Original List", dll);
  dll.reverse();
  console.log("Reverse List", dll);