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

    // return true or false if val exists within the current tree
    // if current is undefined, current = this.root
    find(value, current = this.root) {
        if (current == null) {
            return false;
        } else if (current.val > value) { // go left
            return this.find(value, current.left); // <-- move current to current.left
        } else if (current.val < value) { // go right
            return this.find(value, current.right); // <-- move current to current.right
        } else if (current.val == value) {
            return true
        }
    }

    // remove and return the smallest node of a given tree
    removeSmallest(current = this.root) {
        // return if root is null
        if (!current) return;
        if (current.left.left == null) {
            var temp = current.left;
            current.left = current.left.right;
            temp.right = null;
            return temp
        }
        return this.removeSmallest(current.left)
    }

    insert(node, current) {
        // default current to root if no current exists
        if (current === undefined) {
            current = this.root;
        };

        // if empty tree, new node becomes root
        if (current === null) {
            this.root = node;
            return;
        };

        if (current.val > node.val) { // go left
            // check if null and insert
            if (current.left === null) { // <-- base case for inserting left
                current.left = node;
                return;
            } else {
                // otherwise recurse left
                return this.insert(node, current.left); // <-- move current to current.left
            }
        } else if (current.val < node.val) { // go right
            // check if null and insert
            if (current.right === null) { // <-- base case for inserting left
                current.right = node;
                return;
            } else {
                // otherwise recurse right
                return this.insert(node, current.right);
            }
        }
    };

    // recursive
    getLargestFromSubtree(current) {
        // if no tree, tree is root
        if (current === undefined) {
            current = this.root;
        }

        // if tree becomes null, return null
        if (current === null) {
            return null;
        }

        // if there is no further nodes, return tree
        if (current.right === null) {
            return current.val;
        }

        // else recurse to the right and try again
        return this.getLargestFromSubtree(current.right);
    }

    // iterative
    getSmallestFromSubtree() {
        // create runner
        var runner = this.root;

        // return if root is null
        if (!runner) return;

        // loop to the left if it exists
        while (runner.left) {
            runner = runner.left;
        }
        // when the while ends, return runner.val
        return runner.val;
    }
};

// Recursion is:
// - function that calls itself
// - and modifies the inputs
// - so that the inputs lead to a 'base case' and end the recursive call

var myBST = new BST();
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(9));
myBST.insert(new BSTNode(11));
myBST.insert(new BSTNode(12));
myBST.insert(new BSTNode(7));
myBST.insert(new BSTNode(35));
myBST.insert(new BSTNode(20));
console.log(myBST.removeSmallest());