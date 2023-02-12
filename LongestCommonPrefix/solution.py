class Solution:
    def longestCommonPrefix(self, strs: List[str]) -> str:
        if not strs:
            return ""
        if len(strs) == 1:
            return strs[0]
        min_len = min([len(s) for s in strs])
        prefix = ""
        for i in range(min_len):
            c = strs[0][i]
            for j in range(1, len(strs)):
                if strs[j][i] != c:
                    return prefix
            prefix += c
        return prefix