/*
* 原题链接：https://leetcode-cn.com/problems/median-of-two-sorted-arrays/
*
* 步骤：
* 1.使用归并排序将 nums1和nums2排序。
* 2.判断当前已排序的元素是不是大于了一半。如果是，使用getResult方法得到结果并返回。
*
* */

function findMedianSortedArrays(nums1, nums2) {
  let len1 = nums1.length;
  let len2 = nums2.length;

  let i1 = 0;
  let i2 = 0;

  let result = []
  let half = (len1 + len2) / 2

  // 此位置开始到47行，都属于归并排序
  while(i1 < len1 && i2 < len2) {
    if (nums1[i1] < nums2[i2]) {
      result.push(nums1[i1])
      i1 ++
    } else {
      result.push(nums2[i2])
      i2 ++
    }
    if (result.length > half) {
      return getResult(result)
    }
  }

  while(i1 < len1) {
    result.push(nums1[i1])
    i1 ++
    if (result.length > half) {
      return getResult(result)
    }
  }
  while(i2 < len2) {
    result.push(nums2[i2])
    i2 ++
    if (result.length > half) {
      return getResult(result)
    }
  }

  // 如果已排序的元素多余一半，则通过此方法得到结果。
  function getResult(result) {
    let len = result.length - 1

    return (len1 + len2) % 2 ? result[len] : (result[len] + result[len - 1]) / 2
  }
}

console.log(findMedianSortedArrays(
  [1,2],
  [3,4]
))
