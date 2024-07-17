var postorderTraversal = function(root) {
    if (!root) {
        return [];
    }

    const stack1 = [root];
    const stack2 = [];
    const result = [];

    while (stack1.length > 0) {
        const currentNode = stack1.pop();
        stack2.push(currentNode);

        if (currentNode.left) {
            stack1.push(currentNode.left);
        }
        if (currentNode.right) {
            stack1.push(currentNode.right);
        }
    }

    while (stack2.length > 0) {
        const currentNode = stack2.pop();
        result.push(currentNode.val);
    }

    return result;
};