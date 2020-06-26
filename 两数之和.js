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
