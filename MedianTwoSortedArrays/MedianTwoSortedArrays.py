class Solution:
    def findMedianSortedArrays(self, nums1: List[int], nums2: List[int]) -> float:
            merged_array = nums1 + nums2
            sorted_array = sorted(merged_array)

            mid = len(sorted_array) // 2
            if len(sorted_array) % 2 != 0:
                median = sorted_array[mid]
            else:
                median = (sorted_array[mid - 1] + sorted_array[mid]) / 2

            return median