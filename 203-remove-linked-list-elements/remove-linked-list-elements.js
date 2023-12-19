/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    if(!head || !head.val){
        return head
    }


    var previous = head
    var current = head

    while(current) {
        if(current.val == val){
            previous.next = current.next
        }else {
            previous = current
        }
        current = current.next
    }

    if(head.val == val){
        head = head.next
    }
    return head

};