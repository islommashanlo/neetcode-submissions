class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        let sf = new Map();
        let tf = new Map();
    
        for (const char of s) {
            if (!sf.has(char)) {
                sf.set(char, 1);
            } else {
                sf.set(char, sf.get(char) + 1);
            }
        }

        for (const char of t) {
            if (!tf.has(char)) {
                tf.set(char, 1);
            } else {
                tf.set(char, tf.get(char) + 1);
            }
        }

        for (const [char, count] of sf) {
            if (tf.get(char) !== count) {
                return false;
            }
        }

        return true;
    }
}
