/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
    function func(s) {
        if (s.length < 2) {
            return "";
        }
        let set = new Set([...s]);
        for (let i = 0; i < s.length; i++) {
            if (set.has(s[i].toLowerCase()) && set.has(s[i].toUpperCase())) {
                continue
            } else {
                let prev = func(s.substring(0, i));
                let next = func(s.substring(i + 1));
                return prev.length >= next.length ? prev : next;
            }
        }
        return s;
    }
    return func(s);
};