class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class SLL {
    constructor() {
        this.head = null;
    }

    // return true or false if this.head is null
    isEmpty() {
        if (this.head) {
            return true;
        } else {
            return false;
        }
    }


    // add given node to the head, if it exists. return void
    addToFront(node) {
            node.next = this.head; // set the new node's next to the head
            this.head = node; // move the head to the new node
        }
        // when a pointer is to the LEFT of an equal sign, we are CHANGING it
        // when a pointer is to the RIGHT of an equal sign, we are READING it


    // create a new node with given data, add it to the head. return void
    addDataToFront(data) { // 10
        var newNode = new Node(data); // create a new node with the data
        newNode.next = this.head; // set the new node's next to the head
        this.head = node; // move the head to the new node
    }




}


var node = new Node(10);
var mySLL = new SLL();


node.data = 13;


node.next = new Node(14);



















function doStuff() {
    var x = 10;
    var arr = [];

    while (x) { // if(x)
        arr.push(x);
        x = x - 1;
    }

    console.log(arr); // print?? [10,9,8,7,6...]
};

doStuff();
doStuff();
doStuff();
doStuff();




// Classes
// - blueprints
// - methods
//      honk
//      steer
//      gas pedal
//      brake
// - attributes
//      color
//      size
//      drive
//      hp

// Objects, Instances
// - new keyword

xyz = new Node();