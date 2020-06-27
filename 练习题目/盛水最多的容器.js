/*
* 原题链接：https://leetcode-cn.com/problems/container-with-most-water/
*
* 步骤：
* 1.定义一个左指针和右指针。
* 2.得到当前的面积（h * w）
* 3.对比左边和右边的值，看哪个小，
*   左边小于右边 left ++
*   右边小于左边 right --
* */


function maxArea(height) {
  let l = 0
  let r = height.length - 1

  let result = 0
  while(l < r) {
    let h = Math.min(height[r], height[l])
    result = Math.max(result, (r - l) * h)
    height[l] < height[r] ? l ++ : r --
  }
  return result
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]) === 49)
