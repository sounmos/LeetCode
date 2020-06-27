/*
* 原题链接：https://leetcode-cn.com/problems/3sum/
*
* 步骤：
* 见代码注释；
*
* */

function threeSum(nums) {
  let res = []
  let length = nums.length;
  nums.sort((a, b) => a - b) // 先递增排序
  if (nums[0] <= 0 && nums[length - 1] >= 0) { // 整个数组同符号，则无解
    for (let i = 0; i < length - 2;) {
      if (nums[i] > 0) break; // 最左值为正数则一定无解
      let first = i + 1
      let last = length - 1
      do {
        if (first >= last || nums[i] * nums[last] > 0) break // 两人选相遇，或者三人同符号，则退出
        let result = nums[i] + nums[first] + nums[last]
        if (result === 0) { // 如果可以组队
          res.push([nums[i], nums[first], nums[last]])
        }
        if (result <= 0 ) { // first右移一位
          while (first < last && nums[first] === nums[++first]){} // 如果相等就跳过
        } else { // last左移一位
          while (first < last && nums[last] === nums[--last]) {}
        }
      } while (first < last)
      // 如果i相等就跳过。
      while (nums[i] === nums[++i]) {}
    }
  }
  return res
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]))
