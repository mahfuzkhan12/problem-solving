class Solution:
    def addToArrayForm(self, num: List[int], k: int) -> List[int]:
        i = len(num) - 1
        while i >= 0 and k > 0:
            k, num[i] = divmod(num[i] + k, 10)
            i -= 1
        while k > 0:
            k, a = divmod(k, 10)
            num = [a] + num
        return num