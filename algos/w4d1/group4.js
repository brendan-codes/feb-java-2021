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

    isEmpty() {
        return this.root === null;
    };

    insert(node, current=this.root) {
        if (this.isEmpty()){
            this.root = node;
        }
        while (current) {
            if (node.val > current.val){
                if (current.right == null){
                    current.right = node;
                    break;
                }
                current = current.right;
            }
            if (node.val < current.val){
                if (current.left == null){
                    current.left = node;
                    break;
                }
                current = current.left;
            }
        }
    };

    // recursive
    getLargestFromSubtree(current=this.root) {
i        // Base Case
        if (current.right == null){
            return current;
        }
        // Forward Motion
        // Call itself
        return this.getLargestFromSubtree(current.right);
    }

    // iterative
    getSmallestFromSubtree(current=this.root) {
        if (this.isEmpty()){
            return null;
        }
        while(current.left){
            current = current.left;
        }
        return current;
    }
};

// Recursion is:
// - function that calls itself
// - and modifies the inputs
// - so that the inputs lead to a 'base case' and end the recursive call

var myBST = new BST();
myBST.insert(new BSTNode(10));