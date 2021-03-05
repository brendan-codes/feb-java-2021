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
    find(val, current) {
        if (this.root === undefined) {
            return false;
        }
        // default current to root if no current exists
        if (current === undefined) {
            current = this.root;
        };

        // check currenmt.val with the node's val
        console.log('what is cuurent?', current.val);

        if (current.val === val) {
            return true;
        }
        // if less than
        else if (current.val > val) {
            if (current.left) {
                return this.find(val, current.left); // <-- move current to current.left
            }
        } else if (current.val < val) {
            if (current.right) {
                return this.find(val, current.right);
            }
        }
        return false;
    }

    // remove and return the smallest node of a given tree
    removeSmallest(current) {
        if (this.root === undefined) {
            return false;
        }
        // default current to root if no current exists
        if (current === undefined) {
            current = this.root;
        };

        // current
        while (current) {
            // always check smallest
            if (current.left) {
                // check the left
                if (!current.left.left) {
                    // remove that node
                    if (current.left.right) {
                        // point to that;
                        console.log(current.left);
                        var deleted = current.left;

                        current.left = current.left.right;
                        deleted.right = null;

                        return deleted;
                    } else {
                        // delete reference to its left
                        var deleted = current.left;

                        current.left = null;
                        console.log('last --->', current.val);
                        return deleted;
                    }
                }
                current = current.left;
            }
            // else {
            //   if (current.right.val < current.val) {

            //   }
            // }
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
myBST.insert(new BSTNode(50));
myBST.insert(new BSTNode(45));
myBST.insert(new BSTNode(55));
myBST.insert(new BSTNode(46));
myBST.insert(new BSTNode(54));
myBST.insert(new BSTNode(44));
console.log(myBST);
console.log(myBST.removeSmallest());
// console.log('46?', myBST.find(46));
console.log('44?', myBST.find(44));
console.log('45?', myBST.find(45));