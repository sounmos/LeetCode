/*
* 原题地址：https://leetcode-cn.com/problems/3sum-closest/
*
* 步骤：
* 1.先遍历
* 2.内部使用双指针
*
* */

function threeSumClosest(nums, target) {
  // 排序
  nums.sort((a,b) => a - b)
  let closestNum = nums[0] + nums[1] + nums[2];
  for (let i = 0; i < nums.length - 2; i++) {
    let l = i + 1, r = nums.length - 1;
    while (l < r){
      let threeSum = nums[l] + nums[r] + nums[i];
      if (Math.abs(threeSum - target) < Math.abs(closestNum - target)) {
        closestNum = threeSum;
      }
      if (threeSum > target) {
        r--;
      } else if (threeSum < target) {
        l++;
      } else {
        return target;
      }

    }

  }

  return closestNum;
}

console.log(threeSumClosest([-1,2,1,-4], 1))
