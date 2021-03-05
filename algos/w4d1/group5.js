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

    insert(node, current=this.root){
        if(this.isEmpty()){
            this.root = node;
            return;
        }
        if(node.val < current.val){
            if(current.left == null){
                current.left = node;
                return;
            }else{
                this.insert(node, current.left);
            }
        }
        else{
            if(current.right == null){
                current.right = node;
                return;
            }else{
                this.insert(node, current.right);
            }
        }
    }

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
myBST.insert(new BSTNode(1));
myBST.insert(new BSTNode(4));
myBST.insert(new BSTNode(6));
myBST.insert(new BSTNode(9));
console.log("myBST is : ",myBST);