/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
     
    let arr1 = []
    let arr2 = []

    const recur = (root, arr) => {
        if(root.right || root.left){
            if(root.left) {
                recur(root.left, arr)
            }
            if(root.right){
                recur(root.right, arr)
            }
        }else if(root.val){
            arr.push(root.val)
        }
    }

    recur(root1, arr1)
    recur(root2, arr2)

    if(arr1.length !== arr2.length){
        return false
    }
    
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] !== arr2[i]){
            return false
        }
    }

    return true

};