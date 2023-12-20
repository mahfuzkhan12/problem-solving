/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    
    if(k == 0 || !head) return head

    let l = 0
    var dummy = head
    while(dummy){
        l++
        dummy = dummy.next
    }

    if(k == l || k % l == 0) return head

    let from_idx = k > l ? k % l : k
    from_idx = l - from_idx


    let keep = null
    let last = null
    let last_current = last
    let keep_current = keep
    
    while(head){
        if(from_idx <= 0){
            if(!last){
                last = new ListNode(head.val, null)
                last_current = last
            }else {
                last_current.next = new ListNode(head.val, null)
                last_current = last_current.next
            }
        }else {
            if(!keep){
                keep = new ListNode(head.val, null)
                keep_current = keep
            }else {
                keep_current.next = new ListNode(head.val, null)
                keep_current = keep_current.next
            }
        }
        head = head.next
        from_idx--
    }

    last_current.next = keep

    return last

};