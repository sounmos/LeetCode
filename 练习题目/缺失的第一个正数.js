/*
  原题链接：https://leetcode-cn.com/problems/first-missing-positive/
* 步骤：
* 1.正整数为大于0的数，所以初始值result从1开始
* 2.递增查询，如果nums中不含有当前值，当前值为最小。返回当前值，
* */

function firstMissingPositive(nums) {
  let result = 1
  while(nums.includes(result)) {
    result++
  }
  return result
}


console.log(firstMissingPositive([3,4,-1,1]))
