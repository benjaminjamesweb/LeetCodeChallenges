function preorderTraversal(rootNode) {
    if (!rootNode) {
        return [];
    }

    const result = [];
    const stack = [rootNode];

    while (stack.length > 0) {
        const currentNode = stack.pop();
        result.push(currentNode.val); 

        if (currentNode.right) {
            stack.push(currentNode.right);
        }
        if (currentNode.left) {
            stack.push(currentNode.left);
        }
    }

    return result;
}