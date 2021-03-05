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

    // return true or false is val exists within the current tree
    // if current is undefined, current = this.root
    find(val, current = this.root) {
        if (current == null) {
            return false;
        } else if (current.val == val) {
            return true;
        }
        if (val < current.val) {
            return this.find(val, current.left);
        } else if (val > current.val) {
            return this.find(val, current.right);
        }
    }

    // remove and return the smallest node of a given tree
    removeSmallest(current = this.root) {
        if (current == null) {
            return;
        } else if (current.left == null) {
            this.root = current.right;
            current.right = null;
            return current;
        }
        while (current) {
            if (!current.left.left) {
                var temp = current.left;
                current.left = current.left.right;
                temp.right = null;
                return temp;
            }
            current = current.left;
        }
    }

    remove(val, current = this.root, prev = this.root) {
        if(current == null){
            return null;
        }
        if(current.val == val){
            if(current.val < prev.val){
                prev.left = current.right;
            }else if (current.val > prev.val){
                prev.right = current.right;
            }
            current.right = null;
            this.getSmallestFromSubtree().left = current.left;
            current.left = null;
            return current;
        }else if (current.val < val){
            if(current!=this.root){
                prev = current;
            }
            return this.remove(val, current.right);
        }else if (current.val > val){
            if(current!=this.root){
                prev = current;
            }
            return this.remove(val, current.left);
        }
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
thithi