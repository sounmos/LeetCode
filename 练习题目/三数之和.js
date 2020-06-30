/*
* 原题链接：https://leetcode-cn.com/problems/3sum/
*
* 步骤：
* 1.先遍历
* 2.内部使用双指针
*
* */


function threeSum (nums) {
  nums.sort((a, b) => a - b) // 先递增排序
  let result = []
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] !== nums[i - 1])) {  // 跳过可能重复的答案

      let l = i + 1, r = nums.length - 1, sum = 0 - nums[i];
      while (l < r) {
        if (nums[l] + nums[r] === sum) {
          result.push([nums[i], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) l++;
          while (l < r && nums[r] === nums[r - 1]) r--;
          l++;
          r--;
        } else if (nums[l] + nums[r] < sum) {
          while (l < r && nums[l] === nums[l + 1]) l++;   // 跳过重复值
          l++;
        } else {
          while (l < r && nums[r] === nums[r - 1]) r--;
          r--;
        }
      }
    }
  }
  return result;
}

console.log(threeSum([-1,0,1,2,-1,-4]))
console.log(threeSum([-2,-1,1,2]))
console.log(threeSum([0,0,0,0]))
