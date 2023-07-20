/**
 * @param {string} s
 * @return {string}
 */
var toLowerCase = function(s) {
    
    let output = ""
    for (let c of s) {
        let charCode = c.charCodeAt()
        output += charCode > 64 && charCode < 91 ? String.fromCharCode(charCode + 32) : c 
    }
    return output

};