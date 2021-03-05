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
        this.size = 0;
    }

    isEmpty(){
        return this.root === null;
    };

    insert(node, current=this.root){

        if(current != null){
            if(node.val < current.val){
                this.insert(node, current.left);
            }else{
                this.insert(node, current.right);
            }
        }else{
            current = node;
            this.size++;
            return;
        }
    };

    // recursive
    getLargestFromSubtree(current) {}

    // iterative
    getSmallestFromSubtree() {}
};

// Recursion is:
// - function that calls itself
// - and modifies the inputs
// - so that the inputs lead to a 'base case' and end the recursive call

var myBST = new BST();
myBST.insert(new BSTNode(10));