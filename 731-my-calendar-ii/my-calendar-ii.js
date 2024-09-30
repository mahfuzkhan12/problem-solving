
var MyCalendarTwo = function() {
  this.booked = []
  this.doubleBooked = []  
};

/** 
 * @param {number} start 
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function(start, end) {

    for (const [s, e] of this.doubleBooked) {
        if (Math.max(start, s) < Math.min(end, e)) {
            return false;
        }
    }

    for (const [s, e] of this.booked) {
        if (Math.max(start, s) < Math.min(end, e)) {
            this.doubleBooked.push([Math.max(start, s), Math.min(end, e)])  
        }
    }

    this.booked.push([start, end]);
    return true;
    
};

/** 
 * Your MyCalendarTwo object will be instantiated and called as such:
 * var obj = new MyCalendarTwo()
 * var param_1 = obj.book(start,end)
 */