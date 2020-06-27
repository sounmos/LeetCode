/*
* 原题链接：https://leetcode-cn.com/problems/string-to-integer-atoi/
*
* 步骤：
* 1.使用正则将字符串前后的空格删除
* 2.使用正则截取符合数组规范的字符串
* 3.判断得到的地富川在不在取值范围内。
* 4.大于最大值，返回最大值-1  小于最小值，返回最小值。没截取到，返回0
* */

let str = "a 42"

function myAtoi(str) {
  let min = Math.pow(-2, 31)
  let max = Math.pow(2, 31)
  let result = str.replace(/^\s+|\s+$/, '').match(/^[-|\+]?\d+(\.\d+)?/)
  return result ? result[0] >= max ? max - 1 : result[0] < min ? min : result[0] : 0;
}

console.log(myAtoi(str))
