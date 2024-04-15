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
 * @return {number}
 */
var sumNumbers = function(root) {
    
    let nums = []

    const traverse = (node, prev = "") => {
        const num = prev+node.val
        if(node.left){
            traverse(node.left, num)
        }
        if(node.right){
            traverse(node.right, num)
        }
        if(!node.right && !node.left){
            nums.push(num)
        }
    }

    traverse(root)

    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += parseInt(nums[i])
    }

    return sum
    
};