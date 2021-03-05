// https://www.cs.usfca.edu/~galles/visualization/BST.html
// http://btv.melezinek.cz/binary-search-tree.html

class BSTNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
};

class BST {
    constructor() {
        this.root = null;
    }

    isEmpty(){
        return this.root === null;
    };

    insert(node, current=this.root) {
        if (current===null) {
            this.root = node;
        }
        else if(node.val < current.val) {
            current = current.left;
            this.insert(node, current=current);
        }
        else if (node.val > current.val) {
            current = current.right;
            this.insert(node, current=current);
        }
    };

    // recursive
    getLargestFromSubtree(current) {

    }

    // iterative
    getSmallestFromSubtree() {}
};

// Recursion is:
// - function that calls itself
// - and modifies the inputs
// - so that the inputs lead to a 'base case' and end the recursive call

var myBST = new BST();
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(5));
myBST.insert(new BSTNode(7));
myBST.insert(new BSTNode(3));
myBST.insert(new BSTNode(8));
console.log(myBST)