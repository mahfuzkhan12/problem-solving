/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {

    const traverse = function (node, min = null, max = null) {
        if(!node){
            return true
        }
        
        if ((min != null && node.val <= min) || (max != null && node.val >= max)) {
            return false
        }

        const left = traverse(node.left, min, node.val)
        const right = traverse(node.right, node.val, max)

        return left && right
    }

    return traverse(root)

};