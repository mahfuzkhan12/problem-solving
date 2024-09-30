/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
    this.maxSize = maxSize
    this.stack = []
    this.inc = []
};

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
    if (this.stack.length < this.maxSize) {
        this.stack.push(x);
        this.inc.push(0);
    }
};

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
    if (this.stack.length === 0) {
        return -1;
    }
    let idx = this.stack.length - 1;
    let result = this.stack[idx] + this.inc[idx]; 
    if (idx > 0) {
        this.inc[idx - 1] += this.inc[idx];
    }
    this.stack.pop();
    this.inc.pop();
    return result;
};

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
    let limit = Math.min(k, this.stack.length) - 1;
    if (limit >= 0) {
        this.inc[limit] += val;
    }
};

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */