class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
        this.length = 0;
    }
    read() {
        var current = this.head; // set curret as the head, if it exists or not
        while (current) { // if current, log and move to current.next
            console.log(current.data);
            current = current.next;
        }
    }

    // bonus: print nth to last
    // if the linke list has a nth to last value, print it
    // return nothing
    printNthToLast(n) {
        let runner = this.head;
        // check boundary
        if (n < 0 || n > this.length) {
            return console.log("out of range");
        }
        // else if (n === 0) {
        //   // check if n is the head
        //   while (runner) { // if current, log and move to current.next
        //     console.log(runner.data);
        //     runner = runner.next;
        //   }
        // }
        else {
            // find the nth element
            for (let i = 0; i < n; i++) {
                runner = runner.next;
            }
            // print from nth to last
            while (runner) {
                console.log(runner.data);
                runner = runner.next;
            }
        }
    }

    printSecondToLastValue() {
        let start = this.head.next;
        while (start) {
            console.log(start.data);
            start = start.next;
        }
        // pass the 2nd to function
        // printNthToLast(1);
    }

    // reverse linked list in place
    // you may not swap values between nodes
    // input:  head -> (1) -> (2) -> (3) ->
    // output: head -> (3) -> (2) -> (1) ->
    reverse() {
        let pre = null;
        pre.next = this.head;
        //while iterate through the list, point each element backword
        let cur = this.head;
        let runner = cur;
        while (runner.next) {
            cur.next = pre;
            pre = pre.next;
            runner = runner.next
            cur = runner;
        }
        this.head = cur;

    }

    delete(data) {
        // create a runner
        let runner = this.head;
        // check if head is empty
        if (!runner) {
            return;
        }
        // check if head is target
        if (runner.data == data) {
            this.removeFromFront();
            return;
        }

        // while next exists
        while (runner.next) {
            // check if runner next is data
            if (runner.next.data == data) {
                // remove it and return
                runner.next = runner.next.next;
                this.length--;
                return;
            }
            // otherwise traverse
            runner = runner.next;
        }
    }

    delete2(val) {
        var runner = this.head;
        var prev = null;

        if (runner !== null && runner.data == val) {
            this.head = runner.next;
            this.length--;
            return;
        }

        while (runner && runner.data !== val) {
            prev = runner;
            runner = runner.next;
        }

        if (runner === null) {
            return;
        }
        //runner is now our node to be deleted
        prev.next = runner.next;
        this.length--;
    }

    size() {
        return this.length;
    }



    contains(value) {
        // start at the head
        var runner = this.head;

        // while we have a runner
        while (runner) {

            // return true if data === value
            if (runner.data === value) {
                return true;
            }
            // otherwise advance the runner
            runner = runner.next;
        }

        // if the while loop completes, return false
        return false;
    }

    removeFromFront() {
        if (this.isEmpty()) return null; // nothing to remove

        var removed = this.head; // save the head in a temp variable
        this.head = this.head.next; // move the head
        removed.next = null; // make removed no longer reference the list
        this.length--;
        return removed;
    }

    isEmpty() {
        if (this.head === null) {
            return true;
        }
        return false;
    }

    addToFront(node) {
        node.next = this.head;
        this.head = node;
        this.length++;
    }

    addDataToFront(data) {
        let node = new Node(data);
        node.next = this.head;
        this.head = node;
        this.length++;
    }
}


var myNewSLL = new SLL();
myNewSLL.addToFront(new Node(5));
myNewSLL.addToFront(new Node(22));
myNewSLL.addToFront(new Node(17));
myNewSLL.addToFront(new Node(27));
myNewSLL.addToFront(new Node(55));
myNewSLL.printSecondToLastValue();
myNewSLL.printNthToLast(1);
nullcur
runner = cur.next;
curpre