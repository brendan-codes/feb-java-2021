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

    // size
    // height (max depth)

    // - does it exist?
    // AND
    // - is it the root?
    // AND
    // - does it have one child?
    // - does it have no children?
    // - does it have two children?
    // hints: - try swapping with the smallest of the right subtree or the largest of the left subtree.
    //        - you may swap values

    // findAndDelete
    delete(val, current) {
        // if current is undefined, set as root
        if (current === undefined) {
            current = this.root;
        };

        // if root is null, give up
        if (current === null) {
            return;
        };

        // check if val is smaller or greater
        if (val < current.val) {
            // if smaller, ask again on the left subtree
            return this.delete(val, current.left);
        } else if (val > current.val) {
            // if larger, ask again on the right subtree
            return this.delete(val, current.right);
        }

        //otherwise val is === to current.val

        // one child to the right, or empty
        if (!current.left) {
            current = current.right;
            // one child to the left
        } else if (!current.right) {
            current = current.left;
        }

        // two children

        // get the smallest value from the right subtree
        var temp = this.getSmallestFromSubtree(current.right);

        // swap it with our current (might even be the root, who cares)
        current.val = temp.val;

        // call delete again, on the val we stole out of temp and swapped to current
        // this is always a leaf node with one or less children.
        current.right = this.delete(temp.val, current.right);
    }


    // Preorder (DFS - Depth First Search)
    // (Root / Parent, Left, Right)
    // 25, 15, 10, 4, 12, 22, 18, 24, 50, 35, 31, 44, 70, 66, 90
    printPreorder(current) {
        if (current === undefined) {
            current = this.root;
        }

        if (current) {
            // read everything, then recurse
            console.log(current.val); // 25
            this.printPreorder(current.left); // 15
            this.printPreorder(current.right); // 50
        }
    }

    // Inorder (DFS)
    // (Left, Root / Parent, Right)
    // 4, 10, 12, 15, 18, 22, 24, 25, 31, 35, 44, 50, 66, 70, 90
    printInorder(current) {
        if (current === undefined) {
            current = this.root;
        }

        if (current) {
            // recurse left, then read, then recurse right
            this.printInorder(current.left);
            console.log(current.val);
            this.printInorder(current.right);
        }
    }

    // Postorder (DFS)
    // (Left, Right, Root / Parent)
    // 4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25
    printPostorder(curent) {
        if (current === undefined) {
            current = this.root;
        }

        if (current) {
            // recurse in both directions, then read
            this.printPostorder(current.left);
            this.printPostorder(current.right);
            console.log(current.val);
        }
    }

    // Levelorder (BFS - Breath first search)
    // Row-by-row left-right top-down
    // 25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90
    printLevelorder(current) {
        if (current === undefined) {
            current = this.root;
        };

        var queue = []; // "queue"

        if (current) {
            queue.push(current);
        }

        while (queue.length > 0) {
            var dequeuedNode = queue.shift(); // should probably import our actual queue
            console.log(dequeuedNode.val);

            if (dequeuedNode.left) {
                queue.push(dequeuedNode.left);
            }

            if (dequeuedNode.right) {
                queue.push(dequeuedNode.right);
            }
        }
    }

    find(val, current) {
        if (current === undefined) {
            current = this.root;
        }

        // base cases

        // if current is null, return false up the call stack
        if (current == null) {
            return false;
        }

        // because current is certain to be not null, check val vs val
        // if equal, return true up the call stack
        if (current.val === val) {
            return true;
        }

        // otherwise we need to recurse

        // decide on which direction
        if (current.val > val) {
            current = current.left;
        } else {
            current = current.right;
        }

        // recurse now that current is moved, return the result
        return this.find(val, current); // true / false up the call stack
    }

    removeSmallest(current) {
        if (current === undefined) {
            current = this.root;
        }


        // first iteration possibly move the root
        if (current.left === null) {
            this.root = current.right;
            current.right = null;
            return current;
        }

        // base case

        // look ahead
        if (current.left && (current.left.left === null)) {
            var smallest = current.left;
            current.left = smallest.right;
            smallest.right = null;
            return smallest;
        }

        // otherwise recurse

        return this.removeSmallest(current.left);
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
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(10));
myBST.insert(new BSTNode(10));