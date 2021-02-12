// morning algos
// singly linked list

class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class SLL {
    constructor() {
            this.head = null;
            this.length = 0;
        }
        // console.log the data of every node in the current list
    read() {
            var runner = this.head
            while (runner) {
                console.log(runner.data)
                runner = runner.next

            }

        }
        //find: return true/false if current list contains a data equal to value
    contains(value) {
            var runner = this.head
            while (runner) {
                if (runner.data === value) {
                    return true
                }
                runner = runner.next
            }
            return false

        }
        // Remove from front: remove and return the first node in SLL
    removeFromFront() {
            var temp = this.head
            this.head = this.head.next
            temp.next = null
            this.length--;
            return temp


        }
        // null sll.head--> () <-- () <-- () <--sll.tail null

    // return true or false if this.head is null
    isEmpty() {
            if (this.head) {
                return true
            } else {
                return false;
            }
        }
        // add given node to the head, if it exists, return void
    addTnt(node) {
            node.next = this.head // set the new node's next to the head
            this.head = node // move the head to the new node
            this.lenght++;
        }
        // create new node with given data, add it to the head, return void
    addDoFront(data) {
            var newNode = new Node(data) // create a new node with the data
            newNode.next = this.head // set the new node's next to the head
            this.head = newNode // move the head to the new node
        }
        // if the linked list has a second to last value, print it.
        // return nothing
        // input: head --> 1 --> 5 --> 11 --> 7 --> 8
        // print 7


    // deleteV2(val) {
    //     var current = this.head;
    //     var prev = null;

    //     if (current != null && current.data == val) {
    //         this.head = current.next;
    //         return;
    //     }

    //     while (current && current.data !== val) {
    //         prev = current;
    //         current = current.next;
    //     }

    //     if (runner.next === null) {
    //          console.log(prev)
    //         return;
    //     }

    // }

    printSecondToLast() {
        var runner = this.head;
        var prev = null;

        while (runner && runner.next) { // while both current and NEXT are valid
            // console.log('what is runner?', runner, '\n');

            prev = runner; // this runner before iteration is
            runner = runner.next // move runner forward an avoid infinite loop 😁😁
        }
        // console.log('this is the second to last ->', prev.data);
        return prev.data;
    }

    printNthToLast(n) {

        }
        // reverse the linked list in place without swapping values between nodes
        // reverse linked list in place
        // you may not swap values between nodes
        // input:  head -> (1) -> (2) -> (3) ->
        // output: head -> (3) -> (2) -> (1) ->
    reverse() {
        var prev = null;
        var current = this.head;
        var next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;

            current = current.next // mover runner1

        }
        this.head = prev; // point to last node at the END
    }
}

var mySLL = new SLL()
mySLL.addDataToFront(10)
mySLL.addDataToFront(100)
mySLL.addDataToFront(1000)
mySLL.addDataToFront(10000)
mySLL.addDataToFront(100000)
mySLL.addDataToFront(1000000)

mySLL.read()
mySLL.removeFromFront()
mySLL.read()
console.log(mySLL.contains(100))
console.log(mySLL.contains(50))

console.log("printSecondToLast ->", mySLL.printSecondToLast());

mySLL.reverse();
mySLL.read()



// var node = new Node(10)
// node.data = 10
// node.next = new Node()

// var head = {
//     data: 7,
//     next: {

//     }
// }
// var runner = head
// while(runner.next != null){
//     runner = runner.next
// }

// console.log(runner.data) // prints 5