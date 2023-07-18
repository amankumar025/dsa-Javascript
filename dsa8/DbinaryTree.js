class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = this.right = null;
    }
}

function str2tree(s) {
    if (!s || s.length === 0) {
        return null;
    }

    const stack = [];
    let num = '';

    for (let i = 0; i < s.length; i++) {
        const char = s[i];

        if (char === '(') {
            if (num !== '') {
                const node = new TreeNode(parseInt(num, 10));
                stack.push(node);
                num = '';
            }
        } else if (char === ')') {
            if (num !== '') {
                const node = new TreeNode(parseInt(num, 10));
                if (stack.length > 0) {
                    const parent = stack[stack.length - 1];
                    if (!parent.left) {
                        parent.left = node;
                    } else {
                        parent.right = node;
                    }
                }
                num = '';
            }

            // Finish building current subtree, move back to parent
            stack.pop();
        } else {
            // Collect digits to form a number
            num += char;
        }
    }

    // Check if there's a remaining number (root node)
    if (num !== '') {
        const root = new TreeNode(parseInt(num, 10));
        return root;
    }

    return stack.length > 0 ? stack[0] : null;
}

// Function to flatten the binary tree to an array for testing
function flattenBinaryTree(root) {
    const result = [];
    function dfs(node) {
        if (!node) return;
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return result;
}

// Test the function
const s = "4(2(3)(1))(6(5))";
const root = str2tree(s);
console.log(flattenBinaryTree(root)); // Output: [4, 2, 3, 1, 6, 5]
