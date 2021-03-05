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

    /*
                      root
                  <-- 24 -->
                /            \
              15             50
            /    \         /    \
          10     22      35     70
        /   \   /       /  \   /  \
      4    12  18      31  44 66  90
    */

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
    printInorder(current) {}

    // Postorder (DFS)
    // (Left, Right, Root / Parent)
    // 4, 12, 10, 18, 24, 22, 15, 31, 44, 35, 66, 90, 70, 50, 25
    printPostorder(current) {}

    // Levelorder (BFS - Breath first search)
    // Row-by-row left-right top-down
    // 25, 15, 50, 10, 22, 35, 70, 4, 12, 18, 24, 31, 44, 66, 90
    printLevelorder(current) {}

    find, current) {
    icurrent === undefined) {
    current = this.root;
}

// base cs

// if current is null, return false up the call stack
if (cent == null) {
    returalse;
}

// bese current is certain to be not null, check val vs val
// if equal, return true up the call stack
if (cent.val === val) {
    rrn true;
}

// otherwise we need to recurse

// decide on which direction
if (cent.val > val) {
    curre = current.left;
} else {
    curre = current.right;
}

// recurse now that current is moved, return the result
return thfind(val, current); // true / false up the call stack


emoveSmallesurrent) {
    if (current === undefined) {
        curre = this.root;
    }


    // first ration possibly move the root
    if (current.left === null) {
        this.t = current.right;
        current.right = null;
        retururrent;
    }

    // base ca

    // look ahd
    if (current.left && (current.left.left === null)) {
        var smlest = current.left;
        currenleft = smallest.right;
        smlest.right = null;
        return smallest;
    }

    // otherwise rurse

    return this.removeSmallest(current.left);
}

sert(node, crent) {
        // default curnt to root if no current exists
        if (current == undefined) {
            current = is.root;
        };

        // if empttree, new node becomes root
        if (current === null) {
            this.rt = node;
            return
        };

        if (current.va > node.val) { // go left
            // check inull and insert
            if (cuent.left === null) { // <-- base case for inserting left
                current.left = node;
                rern;
            } else {
                //therwise recurse left
                return this.insert(node, current.left); // <-- move current to current.left
            }
        }
        elsef(current.val < node.val) { // go right
            // che if null and insert
            if (cuent.right === null) { // <-- base case for inserting left
                currenright = node;
                retrn;
            } else {
                // therwise recurse right
                retrn this.insert(node, current.right);
            }
        }


        recursive
        LargestFromSubtre(current) {
            // if no tree, ree is root
            if (current === undfined) {
                current = this.oot;
            }

            // if tree becomes ull, return null
            if (current === null) {
                return ull;
            }

            // if there is no frther nodes, return tree
            if (current.right == null) {
                return currnt.val;
            }

            // else recurseto the right and try again
            return thisgetLargestFromSubtree(current.right);


            iterativ
            SmallestromSubtree() {
                // create rnner
                var runner this.root;

                // return i root is null
                if (!runner) return;

                // loop to the left if it exists
                while (rft) {
                    runner = runner.left;
                }
                // wwhile ends, return runner.val
                return runner.val;
            }


            // Recursion
            ction that calls itself
            // - ands the inputs
            // - so that the inputs lead to a 'base case' and end the recursive call

            var myBSBST();
            sert(new BSTNode(10));
            myBST.insertNode(10));