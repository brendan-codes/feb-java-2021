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

    insert(node, current = this.root) {
        if(current == null){
            this.root = node;
            return;
        }
        if (node.val < current.val) {
            if (current.left == null) {
                current.left = node;
                return;
            } else {
                return this.insert(node, current.left);
            }
        } else if (node.val > current.val) {
            if (current.right == null) {
                current.right = node;
                return;
            } else {
                return this.insert(node, current.right);
            }
        }
    }

    hasValue(val, current=this.root){
        console.log(current.val);
        if(current == null){
            return false;
        } else if(current.val == val){
            return true;
        }
        if (val < current.val) {
            return this.hasValue(val, current.left);
        } else if (val > current.val) {
            return this.hasValue(val, current.right);
        }
    }

    // recursive
    getLargestFromSubtree(current = this.root) {
        if (current.right == null) {
            return current;
        } else {
            return this.getLargestFromSubtree(current.right);
        }
    }

    // iterative
    getSmallestFromSubtree() {
        var current = this.root;
        while (current.left) {
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
myBST.insert(new BSTNode('h'));
myBST.insert(new BSTNode('j'));
myBST.insert(new BSTNode('n'));
myBST.insert(new BSTNode('l'));
myBST.insert(new BSTNode('a'));
myBST.insert(new BSTNode('z'));
myBST.insert(new BSTNode('t'));
myBST.insert(new BSTNode('o'));
console.log(myBST.getLargestFromSubtree());
console.log(myBST.getSmallestFromSubtree());
console.log(myBST.hasValue('l'));