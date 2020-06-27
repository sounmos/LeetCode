/*
  原题链接：https://leetcode-cn.com/problems/two-sum/
* 步骤：
* 1.创建一个哈希表
* 2.遍历数组，判断哈希表中是否缓存过target和当前元素差的索引值
* 3.如果存在，将当前索引和哈希表中的差值索引返回。
* */

function twoSum(nums, target) {
  let memory = new Map()
  for(let i = 0,len = nums.length; i < len; i++) {
    if(memory.has(target - nums[i])) {
      return [memory.get(target - nums[i]), i]
    }else {
      memory.set(nums[i], i)
    }
  }
}

console.log(twoSum([2,7,11,15], 9))
