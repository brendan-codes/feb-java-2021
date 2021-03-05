//// https://www.cs.usfca.edu/~galles/visualization/BST.html
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
        if (this.isEmpty()) {
            return false;
        }
        // if (current === null) {
        //   return false;
        // }

        // while(current) {
        //   if (val === current.val) {
        //     return true;
        //   } else if (val > current.val){
        //       current = current.right;
        //   } else if (val < current.val) {
        //     current = current.left;
        //   }
        // }
        // return false;

        if (current.val === val) {
            return true;

        } else if (current.val > val) { // go left

            if (current.left === null) { // <-- base case 
                return false;
            } else {
                // otherwise recurse left
                return this.find(val, current.left); // <-- move current to current.left
            }
        } else if (current.val < val) { // go right

            if (current.right === null) { // <-- base 
                return false;
            } else {
                // otherwise recurse right
                return this.find(val, current.right);
            }
        }
    }

    // Savion

    //     find(val, current) {
    //     // default current to root if no current exists
    //     if (current === undefined) {
    //         current = this.root;
    //     };

    //     // check if current is the value
    //     if(current.val === val){
    //         return true;
    //     }
    //     if (current.val !== val){
    //         if (current.val > val){
    //             if (current.right === null){
    //                 return false;
    //             } else {
    //                 current = current.right
    //             }
    //         }
    //         if (current.val < val){
    //             if (current.left === null){
    //                 return false;
    //             } else {
    //                 current = current.left
    //             }
    //         }
    //         }
    //     }
    //     }

    // remove and return the smallest node of a given tree
    removeSmallest(current=this.root) {
      // if (current === undefined) {
      // current = this.root;
      // }
      // while(current.left) {
      //   current = current.left;
      // }
      // let ret = current.val;
      // current = null
      // return ret;
        if (current.left === null) {
            let ret = current.val;
            current = null;
            return ret;
        }
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
myBST.insert(new BSTNode(4));
myBST.insert(new BSTNode(1));
myBST.insert(new BSTNode(17));
myBST.insert(new BSTNode(2));
myBST.insert(new BSTNode(7));
myBST.insert(new BSTNode(3));
myBST.insert(new BSTNode(9));
myBST.insert(new BSTNode(5));
console.log("my BST : ", myBST);
console.log(myBST.find(3));
console.log(myBST.removeSmallest());
console.log(myBST.getSmallestFromSubtree());