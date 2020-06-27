/*
* 原题链接：https://leetcode-cn.com/problems/reverse-integer/
*
* 步骤：
* 1.首先判断x是不是单数，如果是，返回x
* 2.使用数学计算的方法，将x倒转
* 3.查看倒转之后的值是否超过范围，超过 返回0，不超过，返回result
*
* */

function reverse(x) {
  if((x >= 0 && x < 10) || (x < 0 && x > -10)) return x

  let result = 0;
  while(x) {

    let gewei = x % 10

    result = result * 10 + gewei

    x = ~~(x / 10)
  }
  let max = Math.pow(2,31), min = Math.pow(-2,31)
  return result > max || result < min ? 0 : result
}

console.log(reverse(1534236469))
